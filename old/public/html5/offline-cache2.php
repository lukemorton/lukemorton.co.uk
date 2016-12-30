<?php
$page['javascript'] = <<<JS
<script type="text/javascript" src="http://lukemorton.co.uk/html5/js/offlineCache.js"></script>
JS;
require_once('includes/header.php'); 
?>
	<article id="latest">
		<header>
			<h1 id="offline">Offline Cache</h1>
			<ul class="meta">
				<li class="published">Published on <time datetime="2009-10-11">11th October 2009</time></li>
				<li class="vcard">By <a href="http://lukemorton.co.uk/" class="fn url">Luke Morton</a></li>
			</ul>
		</header>
		<section class="intro">
			<p>Wow, storing to your computer since 2009.</p>
		</section>
		<div class="app" id="offlineCache"><p>Please wait whilst the app loads.</p></div>
		<footer>
			<p class="copyright">
				No Copyright reserved
				<br />
				Luke Morton 2009--
			</p>
		</footer>
	</article>
<?php require_once('includes/footer.php'); ?>