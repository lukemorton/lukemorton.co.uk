<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class AboutViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => 'About the Author',
			'index_url' => $data['index_url'],
		];
	}
}
