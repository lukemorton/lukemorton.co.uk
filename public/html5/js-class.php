<?php
$page['javascript'] = <<<JS
<script type="text/javascript" src="http://lukemorton.co.uk/html5/js/jsonDecode.js"></script>
<script type="text/javascript">
/* <![CDATA[ */
var phoneBook = function() {
	var json = "";
	var database = false;
	
	this.jsonEncode = function(arr) {
		var parts = [];
		var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');

		for(var key in arr) {
			var value = arr[key];
			if(typeof value == "object") { //Custom handling for arrays
				if(is_list) parts.push(array2json(value)); /* :RECURSION: */
				else parts[key] = array2json(value); /* :RECURSION: */
			} else {
				var str = "";
				if(!is_list) str = '"' + key + '":';

				//Custom handling for multiple data types
				if(typeof value == "number") str += value; //Numbers
				else if(value === false) str += 'false'; //The booleans
				else if(value === true) str += 'true';
				else str += '"' + value + '"'; //All other things
				// :TODO: Is there any more datatype we should be in the lookout for? (Functions?)

				parts.push(str);
			}
		}
		var jason = parts.join(",");
		
		if(is_list) parent.json = '[' + jason + ']';//Return numerical JSON
		parent.json = '{' + jason + '}';//Return associative JSON
		return parent.json;
	}
	
	this.jsonDecode = function() {
		return jsonParse(parent.json);
	}
	
	this.save = function() {
		parent.jsonEncode(database);
		console.log(parent.json);
	}
	
	this.load = function() {
		parent.database = parent.jsonDecode(parent.json);
		console.log(parent.database);
	}

	this.contacts = {
		set = function(params) {
			parent.parent.load();
			parent.parent.database[params.id] = params;
			parent.parent.save();
		}
		get = function(id) {
			parent.parent.load();
			return parent.parent.database[id];
		}
		return function(limit) {
			parent.parent.load();
			return parent.parent.database;
		}
	};
}

$().ready(function() {
	/* My Offline Cache experiment 
	 * By Luke Morton
	 */
	var book = new phoneBook;
	book.contacts().set({
		id: 112,
		name: "Luke Morton",
		num: "01376 550781"
	});
});
/* ]]> */
</script>
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