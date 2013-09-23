<?php 
require_once('includes/header.php'); 
?>
	<article id="latest">
		<header>
			<h1 id="a-nice-welcoming">This is my first (X)HTML5 page, the way I see it</h1>
			<ul class="meta">
				<li class="published">Published on <time datetime="2009-09-01">1st September 2009</time></li>
				<li class="vcard">By <a href="http://lukemorton.co.uk/" class="fn url">Luke Morton</a></li>
			</ul>
		</header>
		<section class="intro">
			<p>After seeing a sudden influx of HTML5 blog posts, and well written articles (often too persuading) I have decided to start implementing test HTML5 web pages to see what it will be like.</p>
			<p>Since I prefer well formed, interchangable formats I have stuck with XML or XHTML based syntax. Hate me or love me I care very little. Also please note, although the code imitates XML, it is strictly speaking HTML still.</p>
		</section>
		<p>My first few issues arise from <code>&lt;nav&gt;</code> whereby it does not nest <code>&lt;li&gt;</code> within itself but requires an unordered list container, the classic <code>&lt;ul&gt;</code>, thinking about it, it is not that bad, it may even be more semantic to still wrap the list items as an unordered list, but I am not writing a list of an unordered kind, it is a navigation list, something unrelated to both <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> which just bloat my code, IMO of course.</p>
		<h2>Footer issue? What issue?</h2>
		<p>Looks like Zeldman and crew's wishes were met, whether it was their influence or not it is good to see the draft is still <a href="http://html5.org/tools/web-apps-tracker?from=3750&amp;to=3751">malleable</a>.</p>
		<h2>Kicking IE into action</h2>
		<p>With the use of this shiv I have managed to get IE to at least recognise the new HTML elements. I am also using CSS3 techniques, some of which may not work in many browsers but since this is a test page, I don't give a shit!</p>
		<h2>An annoyance with a validator</h2>
		<p>Although the validator is experimental and probably not that up to date if at all usable, I still tried to validate this page which validated <em>tentatively</em> according to the <a href="http://validator.w3.org">w3 device</a>. It simply does not recognise <code>&lt;meta charset=&quot;utf-8&quot; /&gt;</code> as an alternative to the old school <code>&lt;meta http-equiv=&quot;Content-type&quot; content=&quot;text/html; charset=utf-8&quot;" /&gt;</code>. Through my stuborness I fixed this issue by creating a <a href="http://httpd.apache.org/docs/2.2/howto/htaccess.html#what">.htaccess</a> file.</p>
		<pre>AddType 'text/html; charset=UTF-8' html</pre>
		<p>Yet even after delivering the page as forced UTF-8, the validator still told me to include a meta tag with the information in, STFU, I've done it already!</p>
		<p>Oh boy this HTML5 stuff is fun! Got anything you want to share? <a href="mailto:lukemorton.designs@gmail.com">Get in touch</a>.</p>
		<footer>
			<p class="copyright">
				No Copyright reserved
				<br />
				Luke Morton 2009--
			</p>
		</footer>
	</article>
<?php require_once('includes/footer.php'); ?>