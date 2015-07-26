<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class IndexViewModel extends AbstractViewModel
{
	public function as_array($data)
	{
		return [
			'title' => 'An Exploration of the Web',
			'formatted_title' => '<span class="break--mobile">An Exploration</span> of the Web',
			'about_url' => $data['about_url'],
			'archive_url' => $data['archive_url'],
			'twitter' => $this->twitter(),
			'thoughts' => $this->thoughts($data['markdown'], $data['posts']),
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

	private function projects()
	{
		return [
			[
				'name' => 'cf-deploy',
				'desc' => 'cf-deploy is the tool you use to deploy your rails app to CloudFoundry providers like Pivotal.',
				'href' => 'https://github.com/madetech/cf-deploy',
			],
			[
				'name' => 'rui',
				'desc' => 'Very experimental ruby user interface library for HTML/CSS',
				'href' => 'https://github.com/DrPheltRight/rui',
			],
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
				'desc' => 'An example of modular frameworkless application design using IDV.',
				'href' => 'https://github.com/DrPheltRight/alchemy.rb',
			],
		];
	}

	private function github_href()
	{
		return 'https://github.com/DrPheltRight';
	}
}
