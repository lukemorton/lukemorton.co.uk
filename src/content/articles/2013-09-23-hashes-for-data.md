---
publishedAt: 2013-09-23
---

# Hashes for Data

This is my take on using **hashes** to transfer data between
behaviour. You might know hashes as maps or associative
arrays.

If you're up for separating data and behaviour as discussed in
a [previous post][1] then you'll need some kind of container
for your data whilst passing it around your application. If
you're walking away from the object zoo then you might be
missing the monkeys. Hopefully I can assure you the world of
separating data from behaviour is a more tidy and efficient
one.

Let's work with an example. We'll start with a data source. In
this case, a mapper method called `#find_one_by_id`. When
given an ID it returns a user.

<script src="https://gist.github.com/lukemorton/6672861.js"></script>

Surprise surprise I'm returning a `Hash` here. Why is this
cool? Because it's already independent of the data layer it
just came from. It's not a Sequel dataset, or MongoDB cursor.
It's a hash representing a record. Sequel and MongoDB even
have nice ways of exporting records as hashes. And when you're
testing, you can just make up hashes as you go along like my
example above!

So let's talk about another layer. Data modelling. That's the
transformative step that uses mappers and data to build up a
model of data required by the application. The following
example uses the mapper defined above and also a user ID to
produce a data model.

<script src="https://gist.github.com/lukemorton/6672864.js"></script>

Who'da thunk it? `#to_hash` returns a hash! You should also
note it takes a hash to begin with. Versatile little things
aren't they?

Let's add another tier. A view model.

<script src="https://gist.github.com/lukemorton/6672868.js"></script>

So we pass in another hash to `ProfileViewModel#to_hash`. This
time with one key, `:profile_user` which in fact is the hash
produced by `UserDataModel#to_hash`.

At this point you might have your object pirate hat on. You're
shouting at me, "Y U NO OBJECT?!"

Well an object has implementation details. They have methods.
They can also have side effects.

So then you say, "SEW DOES HASH IN REWBEE!"

Well yes it does. But a `Hash` is a core object provided by
the ruby language. It doesn't belong to a library like
ActiveRecord or DataMapper. It is a common data type that has
a bunch of useful methods that everyone knows about. All you
need to care about are the key names.

So now you're getting smarter. You're saying, "Why can't I
extend `Hash` and add custom behaviour?"

"In ruby we can make objects quack like a `Hash`."

Well yah. But you still might have side effects. Passing a
sequel query from your data mapper into your view model to be
executed at some point in the future might error at that point
in the future. At least if you transform your data provided by
a mapper into a hash in the data model layer you can contain
data errors where they are relevant.

You can mock out with ease too. Anywhere. If all your objects
do is speak to each other in hashes then they all
automatically speak the same language.

It's true we pass mapper objects into the data model. So there
are exceptions. However data mappers are directly related to
data models. Mappers are used by models to get data to be
modelled. In fact because mappers are called inside modellers,
their many methods are never exposed to anyone but the
modeller. This means your application logic only knows to
pass in mapper objects to a single entry point on a data model
object. It's brilliant I tell you!

Speak in hashes my friends. Speak with a `Hash`.

[1]: /thoughts/2013-09-22-data-and-behaviour
