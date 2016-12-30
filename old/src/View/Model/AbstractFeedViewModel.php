<?php

namespace View\Model;

use View\Model\AbstractViewModel;

abstract class AbstractFeedViewModel extends AbstractViewModel
{
	protected function formatted_posts($markdown, $posts)
	{
		return
			array_map(
				function ($post) use ($markdown)
				{
					$post['title'] = trim(strip_tags($post['title']));
					$post['intro'] = $markdown->transform($post['intro']);
					$post['href'] = 'http://lukemorton.co.uk/thoughts/'.$post['slug'];

					return $post;
				},
				$posts);
	}
}
