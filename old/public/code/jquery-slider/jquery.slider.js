(function ($) {
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
		'speed'              : 500,
		'cycleSpeed'         : 3000,
		'axis'               : 'x',
		'axisClassPrefix'    : 'slider-axis-'
	};
	
	// The plugin
	$.fn.slider = function (settings) {
		
		// Alias for this
		var slider = this;
		
		// Combine global with local settings
		settings = $.extend({}, $.slider.globalSettings, settings);
		
		// For each slider on page
		slider.each(function () {
			
			// Collect the three main jQuery objects
			var $slider = $(this);
			var $container = $slider.children(settings.containerSelector);
			var $nav = $slider.children(settings.navigationSelector);
			var $links = $nav.find(settings.linkSelector);
			
			// Position reference, either left or top
			var dir;
			var scrollFunc;
			
			// We will need to store widths for axis x
			var width = 0;
			
			// Container offset
			var containerOffset = 0;
			
			// Add current class to first
			$links.first().addClass(settings.linkCurrentClass);
			
			// Add axis class to slider
			$slider.addClass(settings.axisClassPrefix + settings.axis);
			
			if (settings.axis === 'x') {
				dir = 'left';
				scrollFunc = 'scrollLeft';
			} else {
				dir = 'top';
				scrollFunc = 'scrollTop';
			}
				
			// Healthy delegation
			$nav.delegate(settings.linkSelector, settings.linkEvent, function (e, cycle) {
				// Stop the hash tag, back button not needed here
				e.preventDefault();
				
				// The clicked link
				var $link = $(this);
				
				// The target <li>
				var $target = $($link.attr(settings.linkTargetAttr));
				
				// Animate
				var animate = {};
				animate[scrollFunc] = $container[scrollFunc]() + $target.position()[dir];

				// Animate to scroll position
				$container.animate(animate, settings.speed);
				
				// Remove .current from all links
				$links.removeClass(settings.linkCurrentClass);
				
				// Add back to needed link
				$link.addClass(settings.linkCurrentClass);
					
				// Wait another duration before cycling, this does not happen
				// if this is a normal cycle generated click
				if ( ! cycle && slider.cycleInstance !== null) {
					slider
						.stop()
						.cycle();
				}
			});
		});
		
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
		
		// Return slider (aka this)
		return slider;
	};
}(this.jQuery));