<?php defined('SYSPATH') or die('No direct script access.');

/**
 * Extend Kostache's View_Layout for a HTML Layout
 */
class View_Html extends View_Layout {

	const PAGE_TITLE_PREFIX = 'Private Poems by Luke Morton';
	const PAGE_TITLE_SPACER = ' :: ';
	
	protected $_layout = 'html';
	protected $_stylesheets = array('css/screen.css' => 'screen, projection');
	protected $_scripts = array();
	protected $_predefined_scripts = array(
		'jquery'  => 'http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js',
		'masonry' => 'http://github.com/desandro/masonry/raw/master/js/jquery.masonry.min.js',
	);
	
	public $page_title = '';
	public $title = NULL;
	
	public function full_page_title()
	{
		return ($this->page_title ? $this->page_title.self::PAGE_TITLE_SPACER : '').self::PAGE_TITLE_PREFIX;
	}
	
	public function page_id()
	{
		return 'poems-'.str_replace('/', '-', $this->uri);
	}
	
	public function page_classes()
	{
		return str_replace('/', ' ', $this->uri);
	}
	
	// base_uri without trailing slash
	public function base()
	{
		return URL::base(FALSE, TRUE);
	}
	
	public function stylesheets()
	{
		$stylesheets = array();
		foreach ($this->_stylesheets as $_style => $_media)
		{
			$stylesheets[] = HTML::style($_style, array('media' => $_media));
		}
		return implode("\n", $stylesheets);
	}
	
	public function scripts()
	{
		$scripts = array();
		foreach ($this->_scripts as $_script)
		{
			if (in_array($_script, array_keys($this->_predefined_scripts)))
			{
				$_script = $this->_predefined_scripts[$_script];
			}
			$scripts[] = HTML::script($_script);
		}
		return implode("\n", $scripts);
	}
}