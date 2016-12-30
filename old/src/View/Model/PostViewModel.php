<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class PostViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => trim(strip_tags($data['post']['title'])),
			'post' => [
				'title' => $data['post']['title'],
				'content' => $data['markdown']->transform($data['post']['content']),
				'created' => $this->formatted_date($data['post']['created']),
				'about_url' => $data['about_url'],
			],
			'index_url' => $data['index_url'],
			'archive_url' => $data['archive_url'],
		];
	}

	public function as_json($data)
	{
		return json_encode([
			'title' => trim(strip_tags($data['post']['title'])),
			'post' => [
				'title' => $data['post']['title'],
				'content' => $data['markdown']->transform($data['post']['content']),
				'created' => $this->formatted_date($data['post']['created']),
			],
		]);
	}
}
