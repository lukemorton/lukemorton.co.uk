# More methods,<br /> more problems

An explanation as to why I don't like more than one **public
method** per class.

I've written about this [before][1]. If your classes are
going to have a single responsibility why offer more than
one way to perform that responsibility?

Multiple methods per class – and by this I mean publically
exposed ones – cause problems in a number of ways.

## Multiple responsibilities

Firstly methods should do something. If your class has
multiple public methods it will likely be doing multiple
things.

<script src="https://gist.github.com/DrPheltRight/7466167.js"></script>

So here we have a large model `UserModel`. You should already
have your nose up at this unimplemented class. It does too
much. The methods `#register`, `#login` and `#update_profile`
might have logic in common but they are very different and
have different responsibilities. Having all these methods in
one class means you will have some shared logic in private
methods but a hell of a lot of specific private methods that
aren't used by the other public methods.

Using the [Data][2] component of [IDV][3] you could create
three data actions:

<script src="https://gist.github.com/DrPheltRight/7466181.js"></script>

They might share some logic but package that logic up in
another class they all share rather than putting all this
logic in one class.

You could share logic by an abstract class but this isn't wise
in the long run. Inheritence should be avoided as much as
multiple public methods. Multiple responsibilities and
extension of abstract (or even worse concrete) classes are
examples of coupling and aren't as flexible as dependency
injection.

> Inject shared logic at runtime rather than couple your code
> all the time

## An Exception

Let's move onto an exception. Sometimes your methods might be completely related to one another. The only two examples of
valid multi-method classes I can think of are
[Interaction Controllers][4] and [Data Mappers][2].

Let's take a user data mapper for example.

<script src="https://gist.github.com/DrPheltRight/7466187.js"></script>

So why do I think this is okay? Well firstly a mongo specific
data mapper for a user is a pretty specific responsibility.
The class does not have one single responsibility though. It
has the responsibility of finding one document by ID and many
documents by an array of IDs. Two responsibilities but I still
think this is okay and let me explain why.

The methods `#find_one_by_id` and `#find_by_ids` are
standalone but will share the collection instance injected so
this is one bit of logic that would need to be repeated or
inherited if we split this class into two.

Both methods share the state initialised on construction, the collection, however they are still fairly independent and
atomic. I see these methods as single responsibilties packaged
under a single namespace `UserMongoDataMapper`. As long as the methods remain SRP and share the majority of logic within the
data mapper then they can remain in one class.

So we've now identified an exception – that is – when methods
are independent, atomic and share most private logic in the
class then it might be okay to keep them in one object.

## Atomic

Atomicity is important. I might have just made that word up
so I'll define it. When calling the method it should be
totally independent and rely on no shared state with other
public methods. If by calling `#find_one_by_id` affected a
later call to `#find_by_ids` then these methods would not be
atomic. They are coupled and definitely not single
responsibility. Furthermore leaking these implementation side
effects into your application means you are introducing hidden
coupling into your application. Little secrets such as the
side effects of calling methods of an instance in different
orders lead to many subtle bugs. Just don't do it!

## The obvious

Multiple public methods make a class more difficult to reason
about. The developer using it will need to know when to use
what methods, the interfaces for each method and so will your
code. The more methods in your program the more coupled to implementation your application will become. This should be
obvious:

> The more code you write the more problems you are going to
> have so don't write as much

## Summary

I'm going to quickly summarise the points I've made so you can
argue in favour of the statement "more methods, more
problems".

 - Methods have a single responsibility, having multiple
   methods per class means the class does not have a single
   responsibility
 - Methods may share logic with related methods but they will
   also have independent logic – coupling related methods is
   a messy way to share logic between components –
   try injecting logic instead
 - Methods should be atomic operations, if they aren't then
   you'll be introducing hidden coupling (think method call
   order) and subtle bugs into your application
 - The more methods you write, the more code your application
   will have, the more the code, the more the bugs

The OOP lot like to hide complexity in pretty looking 
chainable fluid interfaces. That's an ironically complex
solution for a problem aimed at reducing complexity.

I know what the magicians are saying, "a class with a few
setters and getters is hardly complex."

Maybe not but I'm not buying your evil magic friend. You and
your tempting class of tricks can stay away from my
application party.

[1]: /thoughts/2013-09-22-data-and-behaviour
[2]: /thoughts/2013-09-25-data
[3]: /thoughts/2013-09-27-IDV
[4]: /thoughts/2013-09-26-interaction
