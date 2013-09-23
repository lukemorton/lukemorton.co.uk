<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class IndexViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => 'An Exploration of the Web',
			'about_url' => $data['about_url'],
			'twitter' => $this->twitter(),
			'thoughts' => $this->thoughts($data['posts']),
			'projects' => $this->projects(),
			'github_href' => $this->github_href(),
		];
	}

	private function twitter()
	{
		return [
			'url' => 'https://twitter.com/LukeMorton',
			'handle' => '@LukeMorton',
		];
	}

	private function thoughts($posts)
	{
		return
			array_map(
				function ($post)
				{
					$post['created'] = $this->formatted_date($post['created']);
					$post['href'] = '/thoughts/'.$post['slug'];
					return $post;
				},
				$posts);
		// [
		// 	[
		// 		'title' => 'Less Objects',
		// 		'started' => $this->formatted_date(time()),
		// 		'desc' => 'A look at moving away from object heavy development.',
		// 	],
		// 	[
		// 		'title' => 'Less Frameworks',
		// 		'started' => $this->formatted_date(time()),
		// 		'desc' => 'A look at moving away from the reliance we have of frameworks.',
		// 	],
		// 	[
		// 		'title' => 'A Trilogy of Web Application Patterns',
		// 		'started' => $this->formatted_date(time()),
		// 		'desc' => 'A 3 part journey into the programming patterns I use.',
		// 	],
		// ];
	}

	private function projects()
	{
		return [
			[
				'name' => 'Lily',
				'desc' => 'A lightweight web application library for PHP.',
				'href' => 'https://github.com/DrPheltRight/lily',
			],
			[
				'name' => 'Uniform',
				'desc' => 'A way of organising your front-end CoffeeScript or JavaScript.',
				'href' => 'https://github.com/DrPheltRight/uniform',
			],
			[
				'name' => 'alchemy.rb',
				'desc' => 'An example of modular frameworkless application design.',
				'href' => 'https://github.com/DrPheltRight/alchemy.rb',
			],
		];
	}

	private function github_href()
	{
		return 'https://github.com/DrPheltRight';
	}
}
