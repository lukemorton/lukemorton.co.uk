<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class LayoutViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => $data['title'],
			'content' => $data['content'],
			'nav' => $this->nav($data['app']),
		];
	}

	private function nav($app)
	{
		return [
			[
				'href' => $app->uri('index'),
				'label' => 'Introduction',
			],
			[
				'href' => $app->uri('archive'),
				'label' => 'Thoughts',
			],
			[
				'href' => $app->uri('about'),
				'label' => 'About Author',
			],
		];
	}
}
