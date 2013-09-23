<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Poem extends Controller {

	public function action_index($poem = NULL)
	{
		$poem = $this->request->param('poem');
		
		if ($poem === NULL)
		{
			$this->view = Kostache::factory('html/poem/list');
		}
		else
		{
			$this->view = Kostache::factory('html/poem')->set('_poem', $poem);
		}
		
		$this->view->uri = $this->request->uri();
	}
}

