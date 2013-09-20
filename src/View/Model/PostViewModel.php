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
			'updated' => $this->formatted_date($data['post']['updated']),
			'index_url' => $data['index_url'],
		];
	}
}
