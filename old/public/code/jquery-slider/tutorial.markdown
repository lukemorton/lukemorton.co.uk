# jQuery Plugin Authoring

In this series I will be giving you a stage by stage progression
of my brainwaves as I create a jQueryy plugin. This is a bit of
an experiment for me, but after thinking about solving a problem
I cannot leave said issue alone without reaching a resolution.

The problem that arose was an adequate, yet lightweight slider
or should I say, carousel, plugin for jQuery. A colleague found
jCarousel which I had heard of before, however it turned out it
didn't quite fit the bill.

I wasn't really interested in why we decided not to use this
fully featured carousel, I was interested in thinking how I
would solve the problem. A thinking exercise if you will.

So anyway, I am spieling now when I could be writing up this
process, without further ado, I present...

## Stage one of a jQuery plugin authoring thought process
   experiement kind-of-thing

Being a well meaning, standards abiding web developer no jQuery
plugin would be sufficient if it couldn't carry out it's
function without any JavaScript.

I thought to myself, how would I display a list of images
without CSS, oh, a list! Then how would I create a list of links
ah right... list! So I put some HTML to work:

	<ul class="slider-slides">
		<li id="one"><img src="https://github.com/images/modules/header/logov3-hover.png" /></li>
		<li id="two"><img src="http://kohanaframework.org/media/img/kohana.png" /></li>
		<li id="three"><img src="http://www.google.co.uk/images/logos/ps_logo2.png" /></li>
	</ul>
	<ul class="slider-nav">
		<li>
			<a href="#one">First</a>
		</li>
		<li>
			<a href="#two">Two</a>
		</li>
		<li>
			<a href="#three">Three</a>
		</li>
	</ul>

Fairly simple right? I thought so, the next thought to pop into
my head was that how am I going to show only one at a time with
CSS? And still allow the links to jump between them?

Aside: At this point I was thinking of a horizontal carousel.

Put the list of slides in a div which is only the width of one
of them and hide the others. To scroll it left and right, I 
would need to float those images left. And here was the 
[finished page](http://lukemorton.co.uk/code/jquery-slider/stage-one.html).

## Stage two, putting the JS into this carousel

Keeping exactly the same HTML and CSS authored in the previous
stage, I needed to think about getting the images to slide in
and out of view rather than jolting. This was my main concern,
along with signaling which slide was currently showing by
changing the colour of it's link.

Although this is a process about creating a plugin I do not
usually start with the structure, I first think about how to
solve the issue in the specific context I need it, then abstract
that out into a reusable plugin.

So I decided on how to fulfil the two requirements:

-   Sliding to the next item could be done with `$.fn.animate`
-   Change the colour by binding click event and using 
    `$.fn.addClass` to add the .current class.

So here is the jQuery I came up with, see the comments for the
explanations:

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
	<script>
		$(function () {
			// Find all slider links and cache in a variable
			// this save a function
			var $links = $('.slider-nav a');
			
			// Again since the slider container is mentioned
			// more than once it's healthy to cache it
			var $container = $('.slider-container');
				
			// For each link clicked
			$links
				.click(function (e) {
					// Stop the hash tag, back button not needed here
					e.preventDefault();
					
					// The clicked link, cached for reuse
					var $link = $(this);
					
					// The target <li>
					var $target = $($link.attr('href'));
					
					// Remove .current from all links
					$links.removeClass('current');
					
					// Add back to needed link
					$link.addClass('current');
					
					// Animate to scroll position
					$container
						.animate({
							// .scrollLeft() gives us how much the container
							// is scrolled, then added how far the targets
							// position is will give us the point to move to
							'scrollLeft': $container.scrollLeft() + $target.position().left
						});
				});
		});
	</script>

This was a tidy a sufficient solution for a first attempt, not
reusable, but definitely in the right direction. The one problem
I noticed immediately was the `$target.position().left` was
relative the the `<body>` element rather than the container.
Remedied quickly with one CSS addition `position: relative;` to
the `.slider-container`.

Check out the finished [stage two](http://lukemorton.co.uk/code/jquery-slider/stage-two.html).

## Stage three: Making a reusable plugin

So the main way to get a jQuery plugin up and running is to
define a method to `$.fn` and `return this.each(initFunction)`.
Well that's the brief version, take a look:

	$.fn.fadeOutIn = function () {
		return this.each(function () {
			$(this).fadeOut().delay(1000).fadeIn();
		});
	};

	$('.faders').fadeOutIn();

Wooo! That's a super plugin that is... yah right. So anyway
that's the long and short of it. So in order to change JS from
stage two, into reusable code we just need to take refine the
context of our jQuery DOM lookups per slider. That is only make
the links related to that particular slider action that
specific slide, rather than changing all sliders on the page.

Turns out all this was fairly easy, but I did make a few changes
and added a feature:

-   Changed the DOM look ups to look inside current slider with
    `$(this).find()` and `$(this).children()`.
-   Changed from using `$links.click()` to delegating the event
    to the links containers to stop a load of events poluting
	the atmosphere.
-   Automatically mark the first link as showing on
	initialisation.

	$.fn.slider = function () {
		
		// For each slider on page
		return this.each(function () {
			
			// Collect the three main jQuery objects
			var $slider = $(this);
			var $container = $slider.children('.slider-container');
			var $nav = $slider.children('.slider-nav');
			var $links = $nav.find('a');
			
			// Add current class to first
			$links.first().addClass('current');
			
			// Healthy delegation
			$nav.delegate('a', 'click', function (e) {
				// Stop the hash tag, back button not needed here
				e.preventDefault();
				
				// The clicked link, cached for reuse
				var $link = $(this);
				
				// The target <li>
				var $target = $($link.attr('href'));
				
				// Remove .current from all links
				$links.removeClass('current');
				
				// Add back to needed link
				$link.addClass('current');
				
				// Animate to scroll position
				$container
					.animate({
						// .scrollLeft() gives us how much the container
						// is scrolled, then added how far the targets
						// position is will give us the point to move to
						'scrollLeft': $container.scrollLeft() + $target.position().left
					});
			});
		});
	};

Pretty neat still huh? I love writing code that just feels right
and this certainly does for me. Check out the [stage three](http://lukemorton.co.uk/code/jquery-slider/stage-three.html)
demo to see two sliders in action. Also not the use of HTML in
the second carousel just to show not just images can be sliden
(wooo for making up words).

## Stage Four: Allowing customisation of plugin with options

Now for allow the user to customise the plugin with both global
and local settings. First let me describe what I mean by global
and local:

-   **Global** settings affect all instances of a plugin.
-   **Local** settings only apply to a particular plugin
    instance.
	
Generally the best way to share global settings is via a vanilla
object in JS, and local settings should be passed as a parameter
of in plugin method itself.

	// Global
	$.plugName.globalSettings.settingName = 'setting value';

	// Local
	$('.slider').pluginName({'settingName': 'setting value'});

My practice of making plugins customisable is first by making
most if not all strings inside the plugin editable by settings.
So I managed to remove every single string bar one, that is,
the classes, event types, selectors, etc.

	// Global accessible
	$.slider = {};

	// Provide global settings
	$.slider.globalSettings = {
		'containerSelector'  : '.slider-container',
		'navigationSelector' : '.slider-nav',
		'linkSelector'       : 'a',
		'linkTargetAttr'     : 'href',
		'linkCurrentClass'   : 'current',
		'linkEvent'          : 'click',
		'speed'              : 500
	};

	// The plugin
	$.fn.slider = function (settings) {
		
		// Combine global with local settings
		settings = $.extend({}, $.slider.globalSettings, settings);
		
		// For each slider on page
		return this.each(function () {
			
			// Collect the three main jQuery objects
			var $slider = $(this);
			var $container = $slider.children(settings.containerSelector);
			var $nav = $slider.children(settings.navigationSelector);
			var $links = $nav.find(settings.linkSelector);
			
			// Add current class to first
			$links.first().addClass(settings.linkCurrentClass);
			
			// Healthy delegation
			$nav.delegate(settings.linkSelector, settings.linkEvent, function (e) {
				// Stop the hash tag, back button not needed here
				e.preventDefault();
				
				// The clicked link, cached for reuse
				var $link = $(this);
				
				// The target <li>
				var $target = $($link.attr(settings.linkTargetAttr));
				
				// Remove .current from all links
				$links.removeClass(settings.linkCurrentClass);
				
				// Add back to needed link
				$link.addClass(settings.linkCurrentClass);
				
				// Animate to scroll position
				$container
					.animate({
						// .scrollLeft() gives us how much the container
						// is scrolled, then added how far the targets
						// position is will give us the point to move to
						'scrollLeft': $container.scrollLeft() + $target.position().left
					}, settings.speed);
			});
		});
	};

As you can tell after a bit of studying you can now change a few
things in the plugin. Including the speed of the animation! In
the [stage four](http://lukemorton.co.uk/code/jquery-slider/stage-four.html) demo you can see I globally changed the
selected class and changed the triggering event to the jQuery
mouseenter event instead of a click on the links for the second
example.

## Stage Five: Adding another feature

So now we have gotten this far, I think to myself, crap I forgot
about automatically cycling through each slide! Adding this
feature would also require a method to stop cycling.

The most sensible solution to cycling is a `setTimeout`
recursive loop. Stopping that loop would be a simple matter of
`clearTimeout`.

Allowing `.cycle()` and `.stop()` methods need to be available
only on a per instance basis and therefore I reached the
conclusion that I should bolt these onto the jQuery object
during intialisation:

	// So you can do this:
	$('.slider').slider().cycle();

	// But not:
	$('.slider').slider();
	$('.slider').cycle();

This is a simplest, safest solution. If you want to cycle and
stop later on, simply assign the jQuery object to a variable.

Due to scoping issues at this point I swapped the `this`
references and aliased it to `slider`. Have a look at the
two methods and property I attached to `this` a.k.a. `slider`:

	// Global cycle instance
	slider.cycleInstance = null;

	// Add cycle functionality
	slider.cycle = function (speed) {
		
		// No multi cycling
		if (slider.cycleInstance !== null) {
			return slider;
		}
		
		// Allow custom speed or use default
		speed = speed || settings.cycleSpeed;
		
		function cycle() {
			// For each slider, trigger click
			slider.each(function () {
				var $links = $(this).children(settings.navigationSelector).find(settings.linkSelector);
				var $currentLink = $links.filter('.' + settings.linkCurrentClass);
				var currentIndex = $links.index($currentLink);
				var $nextLink;
				
				if ($links[currentIndex + 1]) {
					$nextLink = $links.eq(currentIndex + 1);
				} else {
					$nextLink = $links.first();
				}
				
				$nextLink.trigger('click', [true]);
			});
			slider.cycleInstance = setTimeout(cycle, speed);
		}
		
		slider.cycleInstance = setTimeout(cycle, speed);
		
		return slider;
	};

	// Allow the stopping of cycle
	slider.stop = function () {
		if (slider.cycleInstance !== null) {
			clearTimeout(slider.cycleInstance);
			slider.cycleInstance = null;
		}
		return slider;
	};

So here you can see how the cycling is implemented, it only
goes in one direction, then quickly cycles back to the
beginning when it reaches the last slide.  I added another
setting at this point, `cycleSpeed` which can be overridden when
you call `.cycle()` like so:

	$('.slider').slider().cycle(5000);

Also needed are `.next()` and `.previous()` triggers so that
custom controls can change slides. This also allowed me to
refactor the `.cycle()` method to use `.next()`.

	// Change target
	slider.step = function (step) {
		return slider.each(function () {
			var $links = $(this).children(settings.navigationSelector).find(settings.linkSelector);
			var $currentLink = $links.filter('.' + settings.linkCurrentClass);
			var currentIndex = $links.index($currentLink);
			var $nextLink;
			
			if ($links[currentIndex + step]) {
				$nextLink = $links.eq(currentIndex + step);
			} else if (step > 0) {
				$nextLink = $links.first();
			} else {
				$nextLink = $links.last();
			}
			
			$nextLink.trigger(settings.linkEvent, [true]);
		});
	};

	// Go forward
	slider.next = function () {
		return slider.step(+1);
	};

	// Go back
	slider.previous = function () {
		return slider.step(-1);
	};

	// Global cycle instance
	slider.cycleInstance = null;

	// Add cycle functionality
	slider.cycle = function (speed) {
		
		// No multi cycling
		if (slider.cycleInstance !== null) {
			return slider;
		}
		
		// Allow custom speed or use default
		speed = speed || settings.cycleSpeed;
		
		function cycle() {
			// For each slider, trigger click
			slider.next();
			slider.cycleInstance = setTimeout(cycle, speed);
		}
		
		slider.cycleInstance = setTimeout(cycle, speed);
		
		return slider;
	};

	// Allow the stopping of cycle
	slider.stop = function () {
		if (slider.cycleInstance !== null) {
			clearTimeout(slider.cycleInstance);
			slider.cycleInstance = null;
		}
		return slider;
	};

Pretty much feature complete in my opinion at this point. Then
yet another thought occured, there could be one more feature!

For now you can check out [stage five](http://lukemorton.co.uk/code/jquery-slider/stage-five.html) in full.

## Stage six: The final feature (for now)

The final feature? Sliding on the Y axis as well as the X! This
was not a requirement, merely a challenge to myself. It turned
out it wasn't hard at all. It simply require some altering of
CSS depending on the axis, solved with adding classes. And using
alternative methods to work out the offsets and animation.

	// Add axis class to slider
	$slider.addClass(settings.axisClassPrefix + settings.axis);

	if (settings.axis === 'x') {
		dir = 'left';
		scrollFunc = 'scrollLeft';
	} else {
		dir = 'top';
		scrollFunc = 'scrollTop';
	}

That is the classes and method names sorted, now for the calling
of said methods on change of slide:

	// Animate
	var animate = {};
	animate[scrollFunc] = $container[scrollFunc]() + $target.position()[dir];

	// Animate to scroll position
	$container.animate(animate, settings.speed);

Done! Check out the code in full for [stage six](http://lukemorton.co.uk/code/jquery-slider/stage-six.html).

## Stage seven: Preparing for use

This final stage is about separating everything out and
preparing the plugin. Basically to ensure the brevity of the $
symbol representing jQuery it's an idea to pass jQuery into a
self executing closure:

	(function ($) {
		// $ is safe in here
	}(this.jQuery));

This is in case jQuery is not accessible via $ in the users
environment, which can occur when using multiple frameworks on
one page.

Moving this out into it's own file is a must, along with the CSS.

## Ending Credits

Ermm... thanks to the internet for allowing be to learn and
continually amazing with it's technological dazzle.

Check out the [gist in full](https://gist.github.com/808917) or the [end example in full](http://lukemorton.co.uk/code/jquery-slider/stage-seven.html). Yeah I like the film Paid in Full.