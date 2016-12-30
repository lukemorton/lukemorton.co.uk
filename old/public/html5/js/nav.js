/* Navigation FX
 * By Luke Morton
 */
function slideNavigation(nav, over_margin, off_margin) {
	nav.css('marginLeft', off_margin+'px'); // Initially hide
	nav.fadeTo(200, 0.5); // Initially fade
	var ti = 0; // Set timeout var
	
	// Hover
	nav.hover(function() {
		clearTimeout(ti);
		ti = setTimeout(function() {
			nav.fadeTo(200, 1);
			nav.animate({'marginLeft':over_margin+'px'}, 600);
		},200);
	}, function() {
		clearTimeout(ti);
		ti = setTimeout(function() {
			nav.stop();
			nav.fadeTo(200, 0.5);
			nav.animate({'marginLeft':off_margin+'px'}, 400);
		},200);
	});
}

$(function() {
	// Hover slide out
	slideNavigation($('nav#primary'), -550, -450);
	slideNavigation($('nav#external'), 250, 150);

	// Hover text expand
	$('nav ul li a').hover(function() {
		$(this).animate({
			'backgroundColor': 'rgb(50,50,50)',
			'height': '+=8px',
			'lineHeight': '+=8px',
			'fontSize': '+=4px'
		}, 200);
	}, function() {
		$(this).animate({
			'backgroundColor': 'rgb(15,15,15)',
			'height': '-=8px',
			'lineHeight': '-=8px',
			'fontSize': '-=4px'
		}, 200);
	});
});