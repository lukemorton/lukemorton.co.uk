<?php
header('Location: http://blog.lukemorton.co.uk');
exit;
?>
<!doctype html> 
<html lang="en" class="lukemorton-co-uk" id="index">
	<head>
		<meta chartset="utf-8" />
		<title>A Web Explorer, Luke.</title>
		<meta name="google-site-verification" content="DT2kFSGUa9dCnd_D1CELMkU27-x90KNYE2g-qMALAQ4" />
		<meta name="viewport" content="width=device-width;initial-scale=1.0;" />
		<link rel="stylesheet" type="text/css" href="/styles/base.css" />
		<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	
		<!--
	
			  Some credit where it is due:
	
			- Remy Sharp for his HTML5 shiv above
			- That ginger guy <3 for his CSS guruness (I hope he's not offended I just don't think I need to mention his name)
			- tileabl.es for their background paper affect, adapted on this site
			- squidfingers.com/patterns for their lovely pattern atop and below this site's content
			- Anyone who develops or uses the web
	
			  Thanks again, Luke.
	
		-->
	</head>
	<body>
		<div id="canvas"></div>
		<article>
			<header>
				<a href="http://lukemorton.co.uk/" class="logo"><img src="/img/logo.png" alt="Luke Morton" /></a>
				<div class="details">
					<div class="slogan">A web explorer extraordinaire</div>
					<div class="modified"><strong title="Page last modified"><?php echo gmdate("jS F Y ga",filemtime("/var/http/sites/lukemorton.co.uk/htdocs" . $_SERVER['PHP_SELF'])+3600); ?></strong> <abbr title="Greenwich Mean Time, also known as UTC or the Universal Time Constant." class="timezone"><?php echo gmdate("T",time()+3600); ?></abbr></div>
					<nav class="external">
					</nav>
				</div>
			</header>
			<h1>I've done, and do things with the web.</h1>
			<p>There's nothing like looking to the future, hopefully soon somewhere near here you will find my latest thoughts on code, life and the universe. I have so much on my brain these days I need an outlet. You can already find my recommended reading list over on my alter ego, <a href="http://pheltright.com">Dr PheltRight</a>.</p>
			<p>I also fancy starting a few small web projects, nothing major just things to keep testing my brain. I'm happily <a href="http://freeola.com">employed</a> you know, but there is nothing like extracurricular activites.</p>
			<p>This is a sorry <strong>one page website</strong>, I recently decommissioned loads of old pages because they were from a <a href="http://web.archive.org/web/20060203072307/http://lukemorton.co.uk/">bygone era</a>. That includes my old blog, but fear not! Something should be tumbling along pretty soon :P</p>
			<p>To the future, salut!<br />Luke Morton</p>
			<div class="vcard">
				<h2>My contact details</h2>
				<p>
					E-mail me at <a href="mailto:lukemorton.designs@gmail.com" class="email">lukemorton.designs@gmail.com</a>, 
					<span class="adr">meet me near
						<span class="locality">Braintree</span>,
						<span class="region">Essex</span>, 
						<span class="country-name">England</span>
					</span> 
					<span class="tel">or call me on <span class="type">work</span> tel: <a href="callto:+44-7534-426920"><span class="value">+447534426920</span></a></span>.
					You can also stalk me on <a href="http://twitter.com/lukemorton">Twitter</a>, see me on <a href="http://www.facebook.com/pheltright">Facebook</a> or <a href="http://feeds.technorati.com/contacts/http://lukemorton.co.uk/">download my vCard</a>.
				</p>
			</div>
			<footer> 
				<p class="copyright">No Copyright &copy; <a href="/">Luke Morton</a> 2005-2010. No Rights Reserved.</p>
			</footer>
		</article>
		<script type="text/javascript">document.write(unescape("%3Cscript src='http://www.google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"))</script>
		<script type="text/javascript">try{var pageTracker=_gat._getTracker("UA-9371957-1");pageTracker._trackPageview();}catch(err){}</script>
	</body>
</html>