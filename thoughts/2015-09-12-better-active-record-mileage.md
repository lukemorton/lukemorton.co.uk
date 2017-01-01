# Getting better mileage out of Active Record

In which I provide a few links to help scale the M in MVC,
the ActiveRecord in rails.

The basis of this post comes from one tweet I read.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">The greatest trick the ORM ever pulled was convincing the world the DB doesn&#39;t exist... and it&#39;s a disaster for a generation of devs</p>&mdash; Brad Urani (@bradurani) <a href="https://twitter.com/bradurani/status/640330896885727232">September 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<br />

I saw this tweet by Brad and had a response that I commonly have to positions
or declarations in the world of software engineering.

> That's a bit extreme.

More and more I have this view. I feel rather mellow. That said, I responded on
twitter almost a troll comment which immediately sinks me into having a view
which again could be considered extreme.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/bradurani">@bradurani</a> <a href="https://twitter.com/Baranosky">@Baranosky</a> People are still shipping products though?</p>&mdash; Luke Morton (@LukeMorton) <a href="https://twitter.com/LukeMorton/status/640479014919012352">September 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<br />

Ah, isn't life full of ironic opportunities. Anyway...

People are still shipping products but I think Brad is right in a way. The more
we introduce engineers to the world of web development via rails the more
abstracted away from the concepts of the database they are. In the world of
small business, the one I choose to operate in, roles aren't well defined.
Full stack is about as defined as my role can get since on any given day I can
be building out UI components with Sass/BEM/[pieces][pieces], designing refund
systems for Spree applications, setting up continuous delivery practices for new
clients, writing chef recipes, finding [new hires][made-careers] or writing blog
posts. I didn't even mention databases here or the scaling of your models
which are yet more skills required for generalists.

For small businesses and for people entering the world of rails (or whatever
your framework) it's easy to become a generalist and suffer the consequences of
becoming the [master of none][jack-of-all-trades]. We need to be mindful as our
applications grow how to keep control of our ORMs.

## Resources for getting along with your ORM

Brad wrote a follow up post which I recommend you go read now before continuing.

[https://medium.com/@bradurani/turning-the-tables-how-to-get-along-with-your-object-relational-mapper-e5d2d6a76573](https://medium.com/@bradurani/turning-the-tables-how-to-get-along-with-your-object-relational-mapper-e5d2d6a76573)

The author writes the common pitfalls of Active Record, statements of denial
and provides some resources to how we might fix these problems. I'd like to add
to the mix a bunch of resources I find useful for tackling these issues.

### Tackling god objects with entities, data objects and repositories

Great article on how to break down models with a trip of patterns.
Although this author introduces these concepts with the aid of a gem, I think
we can achieve these patterns without any additional dependencies.

[http://victorsavkin.com/post/41016739721/building-rich-domain-models-in-rails-separating](http://victorsavkin.com/post/41016739721/building-rich-domain-models-in-rails-separating)

### Learn from others

Piotr wrote a great piece on the things he's learnt whilst being a rails
developer:

[http://solnic.eu/2015/03/04/8-things-i-learned-during-8-years-of-ruby-and-rails.html](http://solnic.eu/2015/03/04/8-things-i-learned-during-8-years-of-ruby-and-rails.html)

### Use OO boundaries more efficiently

Alright, this is a plug to one of my blog posts at Made. It's on topic though
and highlights how we might better use object oriented as well as functional
programming practices to scale our models further.

[https://www.madetech.com/blog/boundaries-in-object-oriented-design](https://www.madetech.com/blog/boundaries-in-object-oriented-design)

### Use data objects

Rather than leaning on complex models we can instead lean on hashes or hash
like objects to transfer data around our applications.

 - [http://brewhouse.io/2015/07/31/be-nice-to-others-and-your-future-self-use-data-objects.html](http://brewhouse.io/2015/07/31/be-nice-to-others-and-your-future-self-use-data-objects.html)
 - [http://lukemorton.co.uk/thoughts/2013-09-23-hashes-for-data](http://lukemorton.co.uk/thoughts/2013-09-23-hashes-for-data)

### Moar patterns

I hesistated in posting this one since it's yet another list of design patterns.
Then again, this whole blog post is about links to design patterns so it's
included for completeness.

I'm going to write in the future on how design patterns are introducing more
problems to our applications through their blind use.

[http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/](http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/)

### Avoid callbacks

By using Query and Command objects we can avoid the necessity for callbacks
which are often a cause for confusing bugs.

[http://www.mattjohnston.co/blog/2013/07/07/dumb-data-objects/](http://www.mattjohnston.co/blog/2013/07/07/dumb-data-objects/)

### Use SQL prepared statements in rails 5

It's getting easier to use straight up SQL in rails.

[https://github.com/rails/rails/pull/21536](https://github.com/rails/rails/pull/21536)

### Avoid ActiveRecord

Use ROM.rb instead!!

[http://rom-rb.org/](http://rom-rb.org/)

### Avoid rails

Use Lotus instead!!

[http://lotusrb.org/](http://lotusrb.org/)

## Conclusion

Okay those last two links are more inspirational than aspirational. As engineers
who chose shops that use rails, we won't be escaping Active Record or rails in
general any time soon. Hopefully I've provided a few more links that
can help you scale out your models and ORMs further.

I haven't however provided resources to how you can utilise the power of your
database further. Or even learn as a rubyist how to be a DBA. One thing that
came out of my education was database normalisation a concept some developers
haven't heard of. Let the conversation continue...

[pieces]: https://github.com/lukemorton/pieces
[made-careers]: madetech.com/careers
[jack-of-all-trades]: https://en.wikipedia.org/wiki/Jack_of_all_trades,_master_of_none
