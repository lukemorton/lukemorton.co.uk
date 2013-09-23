<?php
/* Defaults
 * By Luke Morton
 */
 
if (!$page['title']) $page['title'] = "HTML5";
?><!doctype html>
<html dir="ltr" lang="en-GB">
<head>
<title><?php echo $page['title']; ?></title>
<base href="http://lukemorton.co.uk/html5/lukemorton.html" target="_self" />
<meta charset="utf-8" />
<link 
	rel="stylesheet" 
	type="text/css" 
	href="http://lukemorton.co.uk/html5/css/base.css" 
	media="screen" 
	title="Homegrown CSS3" 
	charset="utf-8"  
/>
<!--[if IE 6]>
<style type="text/css">
nav { position: absolute; }
</style>
<![endif]-->
<?php echo $page['css']; ?>
</head>
<body class="lukemorton-co-uk" id="home">
	<nav id="assistance">
		<ul>
			<li><a href="#latest">Skip to latest article</a></li>
			<li><a href="#primary">Skip to navigation</a></li>
		</ul>
	</nav>
