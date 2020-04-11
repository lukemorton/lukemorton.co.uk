---
publishedAt: 2016-09-24
tags:
  - Ruby on Rails
---

# Business logic in Rails

On structuring Rails apps for growth. Often a tricky area this article will walk you through a refactor and hopefully you'll walk away with a few more ideas for structuring your business logic.

I read and loved Tom Dalling's post about [Isolating Side Effects in Ruby](https://semaphoreci.com/community/tutorials/isolate-side-effects-in-ruby) today and agree with a lot of his sentiments with regards to functional core, imperative shell. I want to expand on the testing of [business logic](https://en.wikipedia.org/wiki/Business_logic) (also known as domain logic) in Rails with his examples and continue on to explain how we can evolve our applications as we add more features to them. I'll be referring to the post quite a bit so it is probably best you read that first.

Tom discusses moving the business logic into what he calls functionally pure methods within a static/singleton class. His use of the phrase "functionally pure" is quite the liberty as he admits in his own article.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=01.rb"></script>

Revisiting the `Billing` module we can observe a few things:

- `.billable_accounts` performs an SQL query using an ActiveRecord object
- `.monthly_bill` returns an initialised ActiveRecord object
- `.discounts` is functionally pure business logic

## Testing business logic

The first two methods aren't really functionally pure but how does this affect their testability? We can jump straight into testing `.billable_accounts`.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=02.rb"></script>

Unfortunately this test hit the DB. The fact the method hits the DB will to some mean the method isn't functionally pure or business logic at all. The method isn't functionally pure because even though you do not pass any parameters, the values it change can vary depending on what is in the DB. [Pure functions](https://en.wikipedia.org/wiki/Pure_function) should return the same results every time they are called with the same arguments. It's not business logic either as it deals with implmentation specific details such as it is use of ActiveRecord methods.

For now, I suppose we could do some mocking to get around this.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=03.rb"></script>

I'm not opposed to resorting to this if we need to get a method under test quickly. Luckily ruby and RSpec make this kind of thing easy. You certainly would not be able to do this in PHP or Java.

Moving onto `.monthly_bill` we should notice it is a little easier to test.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=04.rb"></script>

The tests here are not too bad. `.monthly_bill` is easier to test as it is mostly business logic and doesn't rely on complex external interfaces. The only external interfaces it relys on is `account#plan#amount`, `account#type` and `Bill.new`.

## Reviewing the test suite

If we structure our assertions into an actual RSpec suite, our tests describe our billing domain well. This isn't a bad place to be. The suite entirely avoids hitting the DB so it'll be fast.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=05.rb"></script>

One thing to note is that we are testing `.discounts` in the `.monthly_bill` example as well as in it is own specific test. To me this signals that we are probably exposing functionality that does not need to be exposed. Calculating discounts is only used when we are creating a monthly bill so we can probably hide that functionality and test it indirectly with our "creating monthly bill" context.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=06.rb"></script>

After making `.discounts` private our test suite will begin to fail with `NoMethodError: private method 'discount' called for Billing:Module`. This is okay, we can now delete this failing test.

## Growing the domain

Tom goes on to talk about Skinny Models and using objects in Rails to model actions rather than things. The `Billing` module is an object that performs actions rather than modelling a thing.

The `Account` and `Bill` ActiveRecord objects do model things, but we've kept the business logic separate by not placing that logic inside the models.

Unfortunately the way we've built `Billing` module means it will only have a short shelf life. Billing is a large domain so the module will likely get bigger and bigger. Not only that but it is responsible for two separate actions: querying billing accounts and creating bills. Once we start adding more billing related actions to this module, for example refunding a bill, the test suite will grow along with the module itself which to me means it is more difficult for Engineers to quickly understand the responsibilities of the module and therefore more difficult to change it.

Luckily the piece of wisdom shared in the post provides the answer.

> Enlightenment comes when you use objects in a server-side web application to model actions, not things.
>
> – Brad Urani

We need to use objects (read: plural) to model actions. We simply need to split the file down into responsibilities.

What would breaking down the billing module into individual actions look like?

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=07.rb"></script>

We can then split out the RSpec examples.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=08.rb"></script>

## Model actions not things

We've now got two billing modules for two different topics, `Billing::Accounts` and `Billing::MonthlyBill`. However from the name of these modules it still feels like we've moved back to modelling things rather than actions.

In order to categorise our logic into actions we need to think about triggers the actions. What is consuming our business logic? From Tom's original example he was tying everything together in a job class.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=09.rb"></script>

Above is the updated job to match the changes we've made in this article. From the name of the classes I'm still not getting a clear picture what is happening here. Reading the code of the job does tell us, but it is not easy to understand at a glance. What if the job called an action object?

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=10.rb"></script>

I think this is a lot easier to understand. We're passing in our `create_and_send_monthly_bill` object and calling `#to_all_accounts` on it. From the name of the parameter and the method called we paint a clear picture of what is going on.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=11.rb"></script>

As you can see our `MonthlyBillingJob` can now be tested without as many mocks as before.

We of course now need to create our create and send monthly bill action.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=12.rb"></script>

Essentially the code from the job class is now in this domain specific action class. The RSpec example will therefore be fairly similar to the old job spec.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=13.rb"></script>

Quite a jumble as in the original post. I think this in itself is a smell about the way our code works. We have to do a fair bit of mocking in order to test our action because our `CreateAndSendMonthlyBill` action calls `Billing::Accounts` and `Billing::MonthlyBill` directly. We are also duplicating our testing efforts again.

One solution to this problem would be to inject `Billing::Accounts` and `Billing::MonthlyBill` into our action. This will allow us to create doubles in our test and pass those in. This would mean our mocking would be simplified and we will reduce the duplication of our tests.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=14.rb"></script>

Ha, that didn't go as well as I expected. It's actually more number of lines than our previous test. I think this is a reflection of the design of our business logic. Business logic should be easy to understand and easy to test. These properties should exist when we reach a good design. I often find gut instinct tells me if the design is good and I think this is informed by how easily my brain can understand the code.

We'll need to update our implementation of `CreateAndSendMonthlyBill` to satisfy this test.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=15.rb"></script>

We've called the variable storing the `MonthlyBill` `monthly_bill_initialiser` which does clearly explain what it does, but the method `#to_all_accounts` is now a little harder to understand.

## Composing actions

We should probably move the creation and sending of bills into their own actions that are composed together in order to achieve the larger create and send action. The `CreateAndSendMonthlyBill` contains the word "and". This to me signals there are two separate concerns here. We could move the two concerns into their own classes and then use them within the bigger action.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=16.rb"></script>

Looking at `CreateAndSendMonthlyBill#to_all_accounts` the code now makes more sense when you read it.

Our test can now be split up which will reduce the complexity of them and make them easy to understand too.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=17.rb"></script>

Our app is a lot easier to understand from the filesystem level too.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=22.txt"></script>

We can at a glance of the file names know what our application does.

## Finishing up

We are almost there but we still have our `Billing::Accounts` and `Billing::MonthlyBill` modules that represent things rather than actions.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=18.rb"></script>

`Billing::Accounts` is an easy win as we just change the class name to begin with a verb, "find".

`Billing::MonthlyBill` is a little harder to change. It is responsible for initialising a `Bill` object with a correct amount. This feels very much related to the creation of the bill to me. It's almost as if we could move all the logic into `Billing::CreateMonthlyBill`.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=19.rb"></script>

Doing this violates one of Tom's rules about not mixing business logic with things that have side effects. However for me, at this point in time no other object needs to initialise a `Bill` with the same logic so until that need arises I would in fact keep it all in this class.

You'll have probably noticed that we now inject an empty `Bill` object. This is to keep things easy to test.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=20.rb"></script>

The tests don't look too bad at all. Our folder structure is looking really informative too.

<script src="https://gist.github.com/lukemorton/260cc1535e67cd2a76c8463beaa64596.js?file=21.txt"></script>

## Conclusion

Code's testability is very much affected by its design and structure. You might say that your tests inform the design of your code. I prefer to think that the design supports easier testing because it has an easy to understand structure. Code that is easily tested is typically easier to understand.

Business logic is easier to understand when expressed as actions. This allows Engineers to understand the function of your domain by simply reading file names. It also means it is easy to find relevant parts of your domain and they remain easy to test.

The structure presented in this article isn't new. [Uncle Bob](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) and [Gary Bernhardt](https://www.destroyallsoftware.com/talks/boundaries) along with many others have been talking about this before. Some call "actions" by their other name "use case classes".

Hopefully with this design you can avoid fat controllers and fat models. Instead we can have skinny everything when we break down our domain into easy to understand pieces.

Thanks for bearing with me, and feel free to [tweet your feedback to me](https://twitter.com/LukeMorton).
