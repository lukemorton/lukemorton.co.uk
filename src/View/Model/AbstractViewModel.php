<?php

namespace View\Model;

abstract class AbstractViewModel
{
	protected function formatted_date($time)
	{
		return date('jS F Y', $time);
	}
}
