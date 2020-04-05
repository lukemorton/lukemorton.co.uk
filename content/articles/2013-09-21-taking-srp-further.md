---
publishedAt: 2013-09-21
---

# Taking SRP further

This is my take on the **single responsibility** principle and
how we can take it further.

The principle [tells us][1] that:

> Every class should have a single responsibility, and that
> responsibility should be entiry encapsulated by the class.

Let's dig straight into an example in ruby.

<script src="https://gist.github.com/lukemorton/6670928.js"></script>

So here we have a class that follows SRP. It deals with the
transformation of data ready to be merged with a template. In
this case it is a blog post's view.

However I don't want to just tell you about SRP. I want to
show you my take. I think the above example doesn't fully
encapsulate like SRP mandates. My personal take on single
responsibility comes in the form of a single entry point to
the behaviour of an object. That means one public function
only! I would personally write the above code like so:

<script src="https://gist.github.com/lukemorton/6670974.js"></script>

You might observe that I'm not storing any state in this
object. You'd be correct. This is more a functional style of
programming. It unties data from behaviour. And this is the
crux of single responsibility for me. In order to decouple
systems you shouldn't be passing objects around with their
behaviour. Passing behaviour around in a variable in the form
of an object will lead to more code knowing more shit.

Why don't you want code knowing more shit? Because the less it
knows the less things go wrong when the facts it knows are no
longer true.

Bringing this back to SRP, behaviour should have a single
responsibility. To change data. Input and output. We pass a
hash into `BlogPostViewModel.new.to_hash()` and get another
hash out. This way you can't pass around a `BlogPostViewModel`
object and have your code know anything other than `#to_hash`.
The objects single responsibility is `#to_hash`.

Of course the two examples found within this post are not
the same. One is an object that has many public accessors to
the data it contains. Some with transformative behaviour on
the data that was initially passed into the object when it was
instatiated. The other takes a hash and produces a hash.
However both can be used with mustache templates so for me
it's not an issue.

I like passing around my data in hashes and behaviour in
objects or functions. It depends on the language and first
class nature of functions. Ruby you have to pass around
objects. In Clojure or JavaScript you can pass methods around
but anyhow I digress.

I love this principle and if you don't you will learn to love
it in time. Following it will keep your code self contained.
It will lead to less dependencies.

I will write more on this subject but until then let me make
a quote up.

> The less bytes know about other bytes the better

[1]: http://en.wikipedia.org/wiki/Single_responsibility_principle
