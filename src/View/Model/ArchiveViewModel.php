<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class ArchiveViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => 'Thought Archive',
			'index_url' => $data['index_url'],
			'thoughts' => $this->thoughts($data['markdown'], $data['posts']),
		];
	}
}
