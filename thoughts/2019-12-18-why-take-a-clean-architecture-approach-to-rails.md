---
publishedAt: 2019-12-18
tags:
 - Clean Architecture
---

# Why take a Clean Architecture approach to Rails?

On the reasoning why and how you might use a Clean Architecture approach in Rails applications. Warning: it's nuanced and full of compromise.

A few years ago I was introduced to the concept of Clean Architecture. When I saw it something clicked in my brain. Before Clean Architecture I chose to remove logic from controllers and models of applications I built into Plain Old Ruby Objects (POROs). While I maintained some consistency across projects, my approach to architecting and testing these POROs varied more often than not and it often felt like I was reinventing the wheel.

## Before Clean Architecture: Services

The POROs were usually placed into a directory like `app/services` and called Service Objects or just Services. The Service Object pattern involves the creation classes that represent business logic or behaviour that would otherwise sit too close to the the database in an ActiveRecord model or in the controller.

After having a little google I found references going as far back as 2012 including a blog post on ["the service layer \[that\] lies between controllers and models"](https://blog.carbonfive.com/2012/01/10/does-my-rails-app-need-a-service-layer/) and a RailsCasts video on [using Service Objects in Rails](http://railscasts.com/episodes/398-service-objects).

This pattern is probably the most common Rails pattern for keeping controllers and models skinny though it remains decidedly *non-standard* by [Rails creator DHH](https://twitter.com/dhh/status/280717161029328896).

> It's like we have a J2EE renaissance fair going on at the moment. Digging up every discredited pattern of complexity to do a reunion tour.

Haha, I laughed at that one. He was still hurting from his time as a Java developer when he tweeted that I suspect.

> It's given birth to some truly horrendous monstrosities of architecture. A dense jungle of service objects, command patterns, and worse.

Yup, that is the author of Rails' view of service objects. He don't like 'em much does he? [He also doesn't like TDD](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html). YMMV.

I think it's okay for the Rails author to not support a common idiom within the community, his mileage did vary. We have to have empathy for differing views in a complex world.

DHH was right about one thing though: lumping the Service Object and Command pattern together. You'll find the most commonly touted approach to services in Rails is to name them as verbs and have a common public method like `#run`, `#call`, `#execute` or `#exec`. This isn't the Service Object pattern in reality – it's the Command pattern [as mentioned by Martin Fowler](https://gist.github.com/blaix/5764401).

## Introducing Clean Architecture: Even further from pure-Rails

Okay so how about Clean Architecture? I've certainly seen "by the book" Clean Architecture applied to Rails applications. Some teams love it! In this pure adoption you will usually find application and enterprise business rules in the `lib/` directory of a Rails app rather than `app/`. You will also find directories named `domain/` or `entities/`, `interactions/` or `use_cases/`, and `gateways/` or `adapters/` in `lib/`.

I've also seen teams of Ruby on Rails developers completely reject Clean Architecture. They already have their idioms for this problem! Something didn't click in their brains like it did in mine. This was clearly a stretch too far from the Rails way.

Again, empathy for all, everyone can have view that differ. For me I found the concept of breaking down business rules into entities, use cases and adapters a fairer split of labour than simply lifting and shifting controller code into a single service object. That said, in many cases where an application is made up of (mostly) simple CRUD, this extra layer of complexity wasn't needed at all.

The world isn't as simple as always using one pattern or another. Sure it's easier to teach one way, rather than the nuances of many, but knowing and being able to argue the tradeoffs with yourself is the real wisdom.

## Introducing Clean Architecture: Services (and other friends)

This world of nuance has led me to take a more compromising view on the adoption of Clean Architecture in the Rails world – when it makes sense to use Clean Architecture at all.

A more friendly approach for Rails developers is to use more Rails idioms. There are plenty of idioms that match up with the entity, use case and gateway classes from Clean Architecture.

The Services convention in Rails clearly matches that of use case classes that represent actions a user can make on a system. This especially rings true for me when taking the Command pattern approach to Services which is the same convention I see used in Clean Architecture use cases. Just put your use cases in `app/services`!

Entities are use to represent enterprise-level business rules. Code that will likely be shared across use cases and business functions. These need only introducing when you want to share behaviour between use cases, or when you want to abstract your use cases from the database and the ActiveRecord pattern. There are plenty of libraries including ActiveModel that provide helpers to make the definition of these classes easier. You may need to debate with your team whether these can sit beside database representations in `app/models` or whether you split them out into `app/domains`.

Adapters are already known to Rails developers as the Adapter pattern is rife there too. Plenty of applications have adapters for connecting to external APIs or databases. These can go in `app/adapters`.

So you see, Clean Architecture isn't actually a million miles away from being idiomatic to Rails developers. Sure it's full of compromise, and is probably only worth it when your application is complex enough. We have to learn these nuances and know when to compromise to deliver value for our users and organisations.
