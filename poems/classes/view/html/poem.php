<?php defined('SYSPATH') or die('No direct script access.');
class View_Html_Poem extends View_Html
{
	protected $_poem = NULL;
	
	public function index_url()
	{
		return $this->base();
	}
	public function poem()
	{
		$params = array();
		$fields = array('title', 'filename');
		if ($this->_poem !== NULL)
		{
			$params['filename'] = $this->_poem;
			$fields = array_merge($fields, array('credits', 'prose'));
		}
		$poems = Model::factory('poem', $params)->get($fields);
		
		foreach ($poems as $_k => $_poem)
		{
			if (isset($_poem['prose']))
			{
				$_poem['prose'] = '<p>'.str_replace(array("\n\n", "\n"), array('</p><p>', '<br />'), $_poem['prose']).'</p>';
			}
			$poems[$_k] = $_poem;
		}
		
		return $poems;
	}
}