<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class PostViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => $data['post']['title'],
			'content' => $data['post']['content'],
			'created' => $this->formatted_date($data['post']['created']),
			'index_url' => $data['index_url'],
		];
	}
}
