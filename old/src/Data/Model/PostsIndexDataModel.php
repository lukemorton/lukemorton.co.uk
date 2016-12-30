<?php

namespace Data\Model;

use FilesystemIterator;

class PostsIndexDataModel
{
    public function as_array($data)
    {
        $posts_dir_path = $data['root'].'/posts/*';

        $posts = array();

        foreach ($this->filesInDateOrder($posts_dir_path) as $_basename => $_file)
        {
            list($y, $m, $d) = explode('-', $_basename, 4);
            $created = strtotime("{$y}-{$m}-{$d}");

            if (isset($data['between'])
                AND ($data['between'][0] > $created
                     OR $data['between'][1] < $created))
            {
                continue;
            }

            $posts[$_basename] =
                $this->title_and_intro_from_markdown_file($_file)
                + [
                    'slug' => $_basename,
                    'created' => $created,
                ];

            if (isset($data['limit']) AND count($posts) == $data['limit']) {
                break;
            }
        }

        return array('posts' => array_values($posts));
    }

    private function filesInDateOrder($posts_dir_path)
    {
        $posts_dir =
            new FilesystemIterator(
                dirname($posts_dir_path));

        $posts = array();

        foreach ($posts_dir as $_file) {
            $posts[$_file->getBasename('.md')] = $_file;
        }

        krsort($posts);
        return $posts;
    }

    private function title_from_markdown_file($file)
    {
        $title = substr(fgets($file), 2);
        return $title;
    }

    private function intro_from_markdown_file($file)
    {
        $intro = '';

        while (($line = fgets($file)) !== "\n")
        {
            $intro .= $line;
        }

        return $intro;
    }

    private function title_and_intro_from_markdown_file($fileinfo)
    {
        $file = fopen($fileinfo->getRealPath(), 'r');

        $title = $this->title_from_markdown_file($file);
        fgets($file);

        $intro = $this->intro_from_markdown_file($file);
        fclose($file);

        return compact('title', 'intro');
    }
}
