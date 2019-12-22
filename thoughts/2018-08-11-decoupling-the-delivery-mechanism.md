---
publishedAt: 2018-08-11
tags:
 - Clean Architecture
---

# Decoupling the delivery mechanism

On the trouble you can encounter when trying to separate your domain logic from a framework like Rails.

If you work with Rails and haven't heard of Clean Architecture you may have heard of Hexagonal Architecture and most probably have heard of the Service Object pattern. These patterns seek to keep your controllers and models skinny by using Plain Old Ruby Objects (POROs) to model domain problems. If you do not know these patterns, I suggest you read up a little to understand the context in which this article is written.

![Clean Architecture diagram shows DB/API is depended on by gateways which are depended on by use cases which surrounds the business domain which is then executed by use cases which are depended on by the delivery mechanism which is finally depended on the user interface](https://www.dropbox.com/s/a8n3l7qq6rabh04/CleanArchitecture.png?raw=1)

When exploring concepts like Clean Architecture in a Rails context it's often tempting to cut corners. Perhaps rather than using test doubles for Rails dependencies inside your library code you decide to depend on them directly.

<script src="https://gist.github.com/lukemorton/ce7b1e0fb85f56385c116cfee6487508.js?file=01.rb"></script>

In the example above we now have a direct dependency on the Rails model `Ship` and also on the database itself. This means slower tests as they hit the DB and also means the system is harder to change as if you change your model you'll need to change this test too.

Or maybe you decided to use your model as a gateway rather than create a PORO adapter class to encapsulate the model.

<script src="https://gist.github.com/lukemorton/ce7b1e0fb85f56385c116cfee6487508.js?file=02.rb"></script>

Here we have another direct dependency on Rails and the database. Again slower tests and your library needs to change when your application changes.

Or you thought you could return models from your gateways and treat it like a domain object.

<script src="https://gist.github.com/lukemorton/ce7b1e0fb85f56385c116cfee6487508.js?file=03.rb"></script>

Finally in this example we return an ActiveRecord model from the gateway and therefore expose a large interface to the wider application. The problem here is that method calls to the `Ship` model could trigger SQL queries meaning control of database performance is spread through the codebase rather than solely managed by gateways. This again makes the system harder to reason about and harder to change.

The problem with doing any of this is that you no longer have a library that represents your business logic independent of Rails, that is easy to test and easy to change. Instead you a left with a contrived and non-standard Rails setup that is harder to test and difficult to change. It would have been better to stay [omakase](http://david.heinemeierhansson.com/2012/rails-is-omakase.html).

## Your library should not depend on Rails

If running `rspec spec/unit/lib` requires you to load `rails_helper.rb` you've already fallen fowl of coupling your library to Rails. Allow me to apologise for the lack of information out there that might have helped you avoid this situation. At this point you have one of two options:

1. Find a way not to depend on `rails_helper.rb`
2. Move your library code back into the `app/` directory and keep to a more standard omakase approach

There's a more general rule here too that goes beyond Clean Architecture and Rails. Your library code should not depend on any delivery mechanism, database, or API. There should be no need to depend on database fixtures, factories or depend on framework or database classes being defined. This rule exists to make change cheap in the future.

Of course, you will likely have acceptance and feature tests that will depend on `rails_helper.rb` and that's okay. You want to test when delivering your library via Rails that everything works in harmony. This will only be a certain percentage of your tests. Remember the testing pyramid?

![The testing pyramid shows that a good test suite has a large amount of unit tests, a smaller amount of acceptance tests and even less feature tests](https://www.dropbox.com/s/ilqby3lbz3s7x6e/TestingPyramid.png?raw=1)

As a rule the unit tests for your library, usually found in `spec/unit/lib`, should not need to depend on Rails.

## Mocking out ActiveRecord in your gateway unit tests

In example one we saw the gateway specs relying on Rails for setting up database state. We can avoid this by using RSpec's [`class_double`](https://relishapp.com/rspec/rspec-mocks/docs/verifying-doubles/using-a-class-double) and [`instance_double`](https://relishapp.com/rspec/rspec-mocks/docs/verifying-doubles/using-an-instance-double).

<script src="https://gist.github.com/lukemorton/ce7b1e0fb85f56385c116cfee6487508.js?file=04.rb"></script>

The test remains largely the same except that there is no direct dependency on Rails this time. We add another test, `'retrieves ship from model'`, to ensure that we call the mock as expected, this replaces the need to rely on the state of the database.

## Mocking out gateways in your use case unit tests

In example two we saw a use case using an ActiveRecord model directly as a gateway. Not only this but the spec directly depended on the model and database state via FactoryBot.

<script src="https://gist.github.com/lukemorton/ce7b1e0fb85f56385c116cfee6487508.js?file=05.rb"></script>

Instead of using ActiveRecord as the gateway we instead rely on an adapter gateway `Space::Flight::ShipGateway`. We go even further by not directly depending on the gateway and instead use `instance_double` to mock it out. This approach decouples the use case from ActiveRecord resulting in a spec that doesn't touch the database.

## Avoid returning ActiveRecord models from your gateways

In example three `Space::Flight::ShipGateway` returns an ActiveRecord model from it's `#find_by_id` method. We really should have the discipline to return a domain object from the gateway instead.

<script src="https://gist.github.com/lukemorton/ce7b1e0fb85f56385c116cfee6487508.js?file=06.rb"></script>

Here we define `Space::Flight::Ship` a domain object that exposes a limited amount a functions compared to an ActiveRecord model. Our gateway constructs this domain object and returns it.

## Discipline as a software engineer

It takes discipline as a software engineer to keep interfaces clean between the various layers of your application. This is especially true in Ruby where interfaces do not exist as part of it's OOP implementation.

Discipline and experience leads to good architecture.

> Good architecture makes the system easy to understand, easy to develop, easy to maintain, and easy to deploy.
> <small>Clean Architecture by Robert C. Martin</small>
