<?php

namespace View\Model;

abstract class AbstractViewModel
{
	protected function formatted_date($time)
	{
		return date('jS F Y', $time);
	}

    protected function thoughts($markdown, $posts)
    {
        return
            array_map(
                function ($post) use ($markdown)
                {
                    $post['title'] = strip_tags($post['title']);
                    $post['intro'] = $markdown->transform($post['intro']);
                    $post['created'] = $this->formatted_date($post['created']);
                    $post['href'] = '/thoughts/'.$post['slug'];
                    return $post;
                },
                $posts);
    }
}
