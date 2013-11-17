<?php

namespace View\Model;

use View\Model\AbstractViewModel;

class AtomViewModel extends AbstractViewModel
{
	public function as_html($data)
	{
		$feed = $data['atom_feed'];
		$feed->setTitle('An Exploration of the Web');
		$feed->setLink('http://lukemorton.co.uk');

		$this->add_posts_as_feed_items($data);

		return $feed->generateFeed();
	}

	private function formatted_posts($markdown, $posts)
	{
		return
			array_map(
				function ($post) use ($markdown)
				{
					$post['title'] = strip_tags($post['title']);
					$post['intro'] = $markdown->transform($post['intro']);
					$post['href'] = '/thoughts/'.$post['slug'];
					return $post;
				},
				$posts);
	}

	private function add_posts_as_feed_items($data)
	{
		$feed = $data['atom_feed'];
		$posts = $this->formatted_posts($data['markdown'], $data['posts']);

		foreach ($posts as $_post)
		{
			$item = $feed->createNewItem();

			$item->setTitle($_post['title']);
			$item->setLink($_post['href']);
			$item->setDate($_post['created']);
			$item->setAuthor('Luke Morton');
			$item->setDescription($_post['intro']);

			$feed->addItem($item);
		}
	}
}
