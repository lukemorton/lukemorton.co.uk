<?php
$page_id = "index";
$page_advice = 'Go college, get knowledge, that\'s food for brain. Yeah thats right, <a href="http://no-www.org">no www</a>!';
$page_headers = <<<HEADERS
<link href="http://lukemorton.co.uk/feed.atom" type="application/atom+xml" rel="alternate" title="Luke Morton update center" />
HEADERS;
require_once('includes/header.php');
/*
?>
<div class="article main">
	<h1 class="entry-title"><a href="/blog/">The blog is back</a></h1>
	<div class="meta"><abbr class="updated" title="2009-11-20T00:30:00+00:00">20th November 2009 12am GMT</abbr></div>
	<div class="entry-content">
		<p>The RussianIndust theme is back in action on <a href="/blog/">my blog</a>, hopefully if you like it you can e-mail me and if I get enough support I'll release it into the wild, otherwise, it's mine, all mine. Mwhahaha.</p>
		<p>Luke</p>
	</div>
</div>
<div class="article related">
	<h2>Related links</h2>
	<ul class="links">
		<li>
			<h3>Change the style of this site</h3>
			<ul>
				<?php if ($_SESSION['force_style']): ?><li><a href="?style=default">Restore default theme</a></li><?php endif; ?>
				<?php if ($_SESSION['force_style']!="day"): ?><li><a href="?style=day">Set the daytime theme</a></li><?php endif; ?>
				<?php if ($_SESSION['force_style']!="night"): ?><li><a href="?style=night">Set the night time theme</a></li><?php endif; ?>
			</ul>
		</li>
		<li>
			<h3>More from the creator of this gapping hole</h3>
			<ul>
				<li><a href="http://lukemorton.co.uk">This site (well page really)</a></li>
				<li><a href="http://wordpress.org/extend/plugins/wp-cumulus/">WP-Cumulus</a></li>
				<li><a href="http://awmpotatoes.co.uk">And potatoes too</a></li>
				<li><a href="/counter.php">Free PHP hit counter</a></li>
				<li><a href="http://lukemorton.co.uk/feedstah/">Feed cloud browser</a></li>
			</ul>
		</li>
		<li>
			<h3>People and Sites I stalk via syndication</h3>
			<ul>
				<li>
					<a href="http://www.roytanck.com/">Roy Tanck</a>
					<a href="http://feeds.feedburner.com/RoyTancksWeblog" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://www.schneier.com/blog/">Bruce Schneier (on Security)</a>
					<a href="http://feeds.feedburner.com/schneier/fulltext" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://sierracharlie.wordpress.com">Sierra Charlie</a>
					<a href="http://sierracharlie.wordpress.com/feed/" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://www.zeldman.com/">Jeffrey Zeldman</a>
					<a href="http://www.zeldman.com/feed/rss/" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://www.fiveminuteargument.com/">Five Minute Argument</a>
					<a href="http://www.fiveminuteargument.com/feed/blog" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://forabeautifulweb.com/blog/">For a Beautiful Web's Blog</a>
					<a href="http://forabeautifulweb.com/feeds/blog_rss" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://www.smashingmagazine.com/">Smashing Magazine</a>
					<a href="http://rss1.smashingmagazine.com/feed/" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://www.djsemtex.com/blog">DJ Semtex</a>
					<a href="http://feeds2.feedburner.com/Djsemtex" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://www.explosm.net">Explosm</a>
					<a href="http://feeds2.feedburner.com/Explosm" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://blogs.channel4.com/snowblog/">John Snow (Snowblog)</a>
					<a href="http://blogs.channel4.com/snowblog/feed/" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://jeffwongdesign.blogspot.com/">Jeff Wong</a>
					<a href="http://jeffwongdesign.blogspot.com/feeds/posts/default" class="rss">[RSS]</a>
				</li>
				<li>
					<a href="http://cameronmoll.com/">Cameron Moll</a>
					<a href="http://cameronmoll.com/index.xml" class="rss">[RSS]</a>
				</li>
				<li>
					<strong><a href="http://lukemorton.co.uk/rss-subscriptions.xml">Download the full list [OPML]</a></strong>
				</li>
			</ul>
			<h3>A note on syndication</h3>
			<p>After wondering what advantages atom brought to the table for a while, I decided to look into it and personally I think the facts bring most people to the conclusion that atom is a more future proof and adaptive syndication mark-up language. Therefore I have changed my own syndication to atom, I decided not to support both XML formats, that is atom and RSS, since most parsers now parse atom as well as RSS so why stay with the old technology? Disagree with me? <a href="mailto:lukemorton.designs[at]gmail.com">Contact me</a>.</p>
			<p>For information on <strong>atom vs RSS</strong> try <a href="http://www.intertwingly.net/wiki/pie/Rss20AndAtom10Compared">this article</a> and <a href="http://en.wikipedia.org/wiki/Atom_%28standard%29">wikipedia</a>.</p>
		</li>
	</ul>
</div>
<div class="article previous">
	<h2>Atom feed to JSON encoded Atom</h2>
	<div class="meta"><abbr class="updated" title="2009-08-27T17:00:00+00:00">27th August 2009 5pm GMT</abbr></div>
	<div class="entry-content">
		<p>Another little gem I have created, this is a RESTful API aimed at people who want to convert Atom feeds (up to 3 at a time) into a JSON (JavaScript Object Notation) representation of the feed for use with your own applications.</p>
		<p>Don't want to be making extra calls to this server? Thats okay, just email me for the source to this project. <a href="/feed-parse/">Find out more</a>.</p>
	</div>
</div>
<div class="article previous">
	<h2 class="entry-title">Luke's News</h2>
	<div class="meta"><abbr class="updated" title="2009-07-21T15:00:00+00:00">21st July 2009 12am GMT</abbr></div>
	<div class="entry-content">
		<p>I started this project when playing about and learning <a href="http://www.php.net/simplexml">SimpleXML</a> class bundled with PHP, its a create class which allows you to traverse XML with the upmost ease. I love it when working with XML, however now for smaller less complex requests I now parse data in JSON, more to come of that soon.</p>
		<p><a href="/news/">Luke's News</a></p>
	</div>
</div>
<div class="article previous">
	<h2 class="entry-title">Old college crapoozle</h2>
	<div class="meta"><abbr class="updated" title="2009-07-07T15:00:00+00:00">7th July 2009 3pm GMT</abbr></div>
	<div class="entry-content">
		<p>Plenty of boring security information for a security assignment back in 2007.</p>
		<p><a href="/securityhelp/">Staying safe online</a></p>
		<p>/me yawns</p>
	</div>
</div>
<div class="article previous">
	<h2 class="entry-title">Play some games</h2>
	<div class="meta"><abbr class="updated" title="2009-06-21T11:00:00+00:00">21st June 2009 11am GMT</abbr></div>
	<div class="entry-content">
		<p>I created this little gem.. lol.. as part of an events driven programming unit at college. It utilizes a load of jQuery and general JavaScript.</p>
		<p><a href="/pairs/">javaDox</a></p>
		<p>Have fun!</p>
	</div>
</div>
<div class="article previous">
	<h2 class="entry-title">More content soon, sorry!</h2>
	<div class="meta"><abbr class="updated" title="2009-06-11T16:00:00+00:00">11th June 2009 4pm GMT</abbr></div>
	<div class="entry-content">
		<p>Interesting stuff to come soon, for now just take a look at stuff I am looking at.</p>
		<h3>Little note about the stylesheet of this web document</h3>
		<p>Andy Clarke released this cannonball not too long ago, it is a universal style sheet for IE6, yes, one plain hyped up browser default stylesheet aimed to style websites which no longer want to serve a hacked to pieces stylesheet to IE6. I was feeling <strong>lazy</strong> and decided to use it as the main stylesheet for this page until I can be bothered to write my own.</p>
		<p>Web developers will surely love this, on the other hand, who knows what clients will think. Check out <a href="http://forabeautifulweb.com/blog/">Andy's blog</a> for <a href="http://forabeautifulweb.com/blog/about/universal_internet_explorer_6_css/">more details</a>.</p>
		<h3>Edit!</h3>
		<p>As some of you acutely aware people may have already noticed, this is no longer using the IE6 stylesheet, however has been built with a fair few things stolen from it. You have to love zero licenses, for now this <em>page</em> is zero'd too.</p>
		<pre>&lt;?php
	echo "Hello world";
?&gt;</pre></div>
</div>
<?php */ require_once('includes/footer.php'); ?>