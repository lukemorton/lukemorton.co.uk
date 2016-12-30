<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class LayoutViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => $this->title($data),
			'content' => $data['content'],
			'nav' => $this->nav($data['app']),
		];
	}

	private function title($data)
	{
		if (isset($data['title'])) {
			return "{$data['title']} – Luke Morton";
		} else {
			return 'Luke Morton';
		}
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
