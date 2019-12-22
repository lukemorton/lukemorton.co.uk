---
publishedAt: 2016-01-09
tags:
 - Ruby on Rails
---

# Feature testing in 2016

In which I outline a strategy for Feature testing with rspec and capybara.

At the end of last year I, along with friend, [colleague](https://www.madetech.com) and [fellow islander](http://theisland.io)
[David](http://twitter.com/davidwinter) decided upon a set way of writing
feature tests across our rails projects. Based on frustrations with cucumber,
regex and too much code sharing between scenarios the following strategy was
devised.

It builds upon a blog post by Future Learn on
[writing readable feature tests in rspec](https://about.futurelearn.com/blog/how-we-write-readable-feature-tests-with-rspec/). Without further ado:

<script src="https://gist.github.com/lukemorton/6f56ef24dea0516803be.js"></script>

Along with this structure there are some rules for keeping things tidy and
maintainable:

 - Only one "given/when/then" per scenario (never start a step with "and")
 - Never reuse "given/when/then" steps between scenarios
 - Always define steps within the scope of the feature
 - Define lets after private declaration for separation
 - Any shared logic between steps should be placed in private methods defined
   below your let statements
 - Complicated or multiple assertions in your "then" steps should be placed
   in well named methods like `#assert_something`
 - Rely on lets rather than instance variables

I wrote up more of the whys over on our
[Made Tech blog](https://www.madetech.com/blog/feature-testing-with-rspec). This
was before some of our more stricter rules were put in place.

What do you think? Get in touch via twitter
[@LukeMorton](https://twitter.com/LukeMorton).
