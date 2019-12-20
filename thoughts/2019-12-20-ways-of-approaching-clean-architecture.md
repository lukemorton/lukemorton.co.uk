---
publishedAt: 2019-12-20
---

# Ways of approaching Clean Architecture

In which I ask questions about the ways that a team might approach Clean Architecture in a way you can still benefit from the productivity of a framework.

Many approach Clean Architecture as an all or nothing approach. You are either architecting your system(s) that way, or you aren't. I agree up to a certain point in that you can quickly stop benefitting from Clean Architecture if you ignore it's boundaries which can particularly be an issue in dynamic languages like Ruby.

Where I disagree is in the opposite direction when Clean Architecture can push your domain so far from the delivery mechanism, say the Ruby on Rails framework, to the point you can no longer benefit from the Rails ecosystem. Worse still I see teams starting without a framework altogether, taking a HTTP routing library such as Sinatra, and then over time end up adding framework features into it like ActiveRecord but gain none of the benefits of Rails development speed and gem ecosystem.

## Throwing the framework out with the bath water

An example I see in the wild is where you can no longer benefit from Rails view helpers like [`form_with`](https://guides.rubyonrails.org/form_helpers.html) because you either used Sinatra, or you've hidden your ActiveRecord or database DAOs so far away from your controllers you can't inject them into your views to use with `form_with`.

There are bigger examples too, such as losing the ability use gems such as Devise for authentication in your application, and not being able to use Paperclip or these days [ActiveStorage](https://guides.rubyonrails.org/active_storage_overview.html), and creating your own queuing drivers rather than using [ActiveJob](https://guides.rubyonrails.org/active_job_basics.html). The list goes on, and it drives me crazy because folks don't know what they're missing in productivity! More experienced with Clean Architecture and generalist programmer practices we miss the community-specific learnings and wisdom that may exist within a particular ecosystem like Rails.

To quote myself or maybe Danny Dyer, "it does my absolute nut in" to see such learnings from a community overlooked. It's no ones fault of course, empathy for all, but it seems like institutional memory loss in my mind. What a waste.

## A middle way

I believe there is a path that sits between the all or nothing approaches of both pure framework versus pure Clean Architecture. There has to be. I ask myself a lot of questions around this, I certainly don't have all the answers.

How might you approach Clean Architecture progressively where you use it in particularly complex areas of your application? Should ATDD start directly in your `lib/` far away from your `app/` in a Rails application? Or could it start with a feature test, and then a request test, and then dive into a use case unit test? How fragile would your application be in that scenario?

How might you adopt Clean Architecture in a way that you can benefit from Devise, ActiveStorage and ActiveJob?

## Discipline required

How do you maintain a discipline to know when you move from Rails CRUD into Clean Architecture? Or more still, how do you even know when to use one or the other?

These are ongoing questions I ask myself, and our team at [Made Tech](https://www.madetech.com/careers). Our Rails Working Group is actively looking at how we can bridge the gap, engaging Clean Architecture with joy as Rails developers, and engaging with Rails community wisdom as generalist XP professionals.

Stay tuned for more! I also recently wrote about [why you might want to adopt Clean Architecture in a Rails application](http://localhost:3000/thoughts/2019-12-18-why-take-a-clean-architecture-approach-to-rails).
