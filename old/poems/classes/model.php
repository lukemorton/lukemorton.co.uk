<?php defined('SYSPATH') or die('No direct script access.');

/**
 * Basic model
 */
class Model
{
	protected $_params = NULL;
	
	public static function factory($path, $params = NULL)
	{
		$class = 'Model_'.str_replace('/', '_', $path);
		return new $class($params);
	}
}