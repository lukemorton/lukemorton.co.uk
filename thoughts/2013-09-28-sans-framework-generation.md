# Sans framework generation

That's right. It's time to leave your **frameworks** behind
you.

This isn't advice. Okay it is. But you seriously need to think
about what I'm about to say. Read and reread the following
statement.

> Frameworks aren't bad, but being locked into them is

What do I mean by this? I mean bad things come from projects
that get locked to a framework. By locked I mean coupled. Slow
rails tests anyone? Difficulty deconstructing applications
into smaller services due to reliance on a particular way of
doing something? Decided omakase isn't for you?

Whatever the problem it comes down to locking yourself in.
Vendor lock in is shitty. When your entire business gives
itself to one vendor it's a risk.

There's a better way. Write your business logic before
choosing a framework. Work out your wireframes, build HTML
prototypes, do some TDD for your user stories. The key is to
defer the framework decision. Hell, [defer][1] [all][2] your
[base][3].

I'm serious here. Why write your framework code first? How
does it make any sense to do something the rails way? You
should do it your applications way. That doesn't mean your
application logic won't fit into the rails paradigm. Just
write your application logic so it doesn't care for what
interface it uses to deliver content to the user. Rails does
this particularly poorly since you end up using a lot of logic
provided by it's framework. To get the benefits of rails you
do really have to go the rails way, but then you're fucked.

You decide where you stand but I'm of the sans framework
generation.

Comments to [@LukeMorton][4] please.

[1]: http://www.youtube.com/watch?v=WpkDN78P884#t=49m48s
[2]: http://www.allaboutagile.com/lean-principles-4-defer-commitment/
[3]: http://www.codinghorror.com/blog/2006/10/the-last-responsible-moment.html
[4]: https://twitter.com/LukeMorton
