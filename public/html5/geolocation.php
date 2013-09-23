<?php
$page['javascript'] = <<<JS
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true&key=ABQIAAAAqQJ-gFBKUbBLaFN1HQF4KBThKp54nn_dBjDwyDHd_vrxYAGTBRQ2gQXSDLmPWtPZ5sctSgEZMH9PzA"></script>
<script type="text/javascript" src="http://google-ajax-examples.googlecode.com/svn/trunk/whereareyou/scripts/geometa.js"></script>
<script type="text/javascript">
/* <![CDATA[ */
$().ready(function() {
	/* My GeoLocation experiment 
	 * By Luke Morton
	 */
	var uLocation = new google.maps.LatLng(51.50015, -0.12624);
	var uLocationMsg = new google.maps.InfoWindow({
		content: '<br />If you want to discover your current location you will need<br />' +
				'to confirm this to your browser when it asks.',
		size: new google.maps.Size(50,100)
	});
	var params = {
		zoom: 14,
		center: uLocation,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var uMap = new google.maps.Map(document.getElementById('uLocation'), params);
	var uLocationMrk = new google.maps.Marker({
		position: uLocation, 
		map: uMap
	});
	uLocationMsg.open(uMap, uLocationMrk);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(pos) {
			var uLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
			uLocationMrk.setPosition(uLocation);
			var uLocationMsg = new google.maps.InfoWindow({
				content: "You are here",
				size: new google.maps.Size(50,100)
			});
			uLocationMsg.open(uMap, uLocationMrk);
		}, function() {
			var uLocationMsg = new google.maps.InfoWindow({
				content: 'Unfortunately even though your browser is compatible, it has not given me permission to grab your location.',
				size: new google.maps.Size(50,100)
			});
			uLocationMsg.open(uMap, uLocationMrk);
			});
	} else {
		var uLocationMsg = new google.maps.InfoWindow({
			content: 'Unfortunately your browser does not currently support GeoLocation, you could always try <a href="http://getfirefox.com">FireFox</a>.',
			size: new google.maps.Size(50,100)
		});
		uLocationMsg.open(uMap, uLocationMrk);
	}
	
});
/* ]]> */
</script>
JS;
require_once('includes/header.php'); 
?>
	<article id="latest">
		<header>
			<h1 id="geolocation">GeoLocation</h1>
			<ul class="meta">
				<li class="published">Published on <time datetime="2009-10-11">11th October 2009</time></li>
				<li class="vcard">By <a href="http://lukemorton.co.uk/" class="fn url">Luke Morton</a></li>
			</ul>
		</header>
		<section class="intro">
			<p>Forget what letters I capitalised, this is awesome. In fact forget capitalism, but that is another thought for now have a look at this GeoLocation example.
			<p>Although I am using <code>navigator.geolocation</code>, I am using somewhat of a shiv hosted on Google Code <a href="http://google-ajax-examples.googlecode.com/svn/trunk/whereareyou/scripts/geometa.js">here</a>. It uses native geolocator API (part of the HTML5 spec) if available then falling back to other API's where necessary. It has little or no support in many browsers, but does work fairly successfully in Firefox, Chrome, Safari, and Safari for the iPhone.</p>
		</section>
		<h2>The usage</h2>
		<p>Please find an example of my fantasy uLocation web app below, all it is is Google Map, using GeoLocation to pinpoint your location on the map, you will need to accept your browsers security warning if you wish to see you location on the map. View source for a sneak peak.</p>
		<div class="app" id="uLocation"><p>Please wait whilst we obtain your location, you may need to give permission.</p></div>
		<p>As you may find out, the accuracy is subject to how you get your connection, for example on a supported mobile phone, your position can be triangulated using your nearest cells, same with WiFi connections, however if you are using a standard ADSL connection or something alike, the only location method maybe IP address, which isn't the most accurate of methods.</p>
		<footer>
			<p class="copyright">
				No Copyright reserved
				<br />
				Luke Morton 2009--
			</p>
		</footer>
	</article>
<?php require_once('includes/footer.php'); ?>