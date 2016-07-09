<?php

namespace View\Model;

use View\Model\FeedViewModel;

class JsonViewModel extends FeedViewModel
{
	public function as_json($data)
	{
		$posts = $this->formatted_posts($data['markdown'],$data['posts']);
		return json_encode(compact('posts'));
	}
}
