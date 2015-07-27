<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class LayoutViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => "{$data['title']} by Luke Morton",
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
				'index' => 1,
			],
			[
				'href' => $app->uri('archive'),
				'label' => 'Thoughts',
				'index' => 2,
			],
			[
				'href' => $app->uri('about'),
				'label' => 'About Author',
				'index' => 3,
			],
		];
	}
}
