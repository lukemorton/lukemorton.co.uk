<?php

namespace View\Model;

use View\Model\AbstractFeedViewModel;

class AtomViewModel extends AbstractFeedViewModel
{
	public function as_atom($data)
	{
		$feed = $data['atom_feed'];
		$feed->setTitle('An Exploration of the Web');
		$feed->setLink('http://lukemorton.co.uk');
		$feed->setSelfLink('http://lukemorton.co.uk/thoughts/latest.atom');

		$latest_post = current($data['posts']);
		$feed->setDate($latest_post['created']);

		$this->add_posts_as_feed_items($data);

		return $feed->generateFeed();
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
