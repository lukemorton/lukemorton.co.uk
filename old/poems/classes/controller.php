<?php defined('SYSPATH') or die('No direct script access.');

/**
 * This override sets $this->request->response as $this->view
 * if $this->view has been set. It's more for short hand and
 * easy reference than anything else.
 */
class Controller extends Kohana_Controller {
	public function after()
	{
		if (isset($this->view))
		{
			$this->response->body($this->view);
		}
		parent::after();
	}
}