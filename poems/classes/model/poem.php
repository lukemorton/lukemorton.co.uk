<?php defined('SYSPATH') or die('No direct script access.');

/**
 * Basic model
 */
class Model_Poem extends Model
{
	/**
	 *
	 */
	public function __construct($params = NULL)
	{
		$this->_params = $params;
	}
	
	/**
	 *
	 */
	public function get($fields = NULL)
	{
		$poems = array();
		$poem_filenames = array();
		
		// Poem Filename
		if (isset($this->_params['filename']))
		{
			$poem_filenames = array($this->_params['filename']);
		}
		
		// Otherwise get full list of filenames
		else
		{
			$poem_dir = opendir(APPPATH.'poems');
			
			// For each file/dir
			while (FALSE !== ($file = readdir($poem_dir)))
			{
				if (strpos($file, '.') === 0)
					continue;

				$poem_filenames[] = $file;
			}
		}
		
		// Foreach file
		foreach ($poem_filenames as $_filename)
		{
			$poem = array();
		
			// File name
			$poem['filename'] = current(explode('.', $_filename));

			// The path to the poem file
			$poem['path'] = Kohana::find_file('poems', $poem['filename'], 'poem');
			
			// If prose required get entire file
			if ($fields === NULL || in_array('prose', $fields))
			{
				// Get Poem contents
				$poem_contents = file_get_contents($poem['path']);

				// Find parts with regex
				preg_match_all('/^([^\n]+)\n([^\n]+)\n(.+)$/s', $poem_contents, $poem_parts);
				
				$poem['title'] = $poem_parts[1][0];
				$poem['credits'] = $poem_parts[2][0];
				$poem['prose'] = $poem_parts[3][0];
			}
			
			// Else get summaries
			else
			{
				$file = file($poem['path']);
				$poem['title'] = trim($file[0]);
				$poem['credits'] = trim($file[1]);
			}
			
			// Set to array
			$poems[] = $fields === NULL ? $poem : Arr::extract($poem, $fields);
		}
		
		return $poems;
	}
}