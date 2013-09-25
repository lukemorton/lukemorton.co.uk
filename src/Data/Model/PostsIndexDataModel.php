<?php

namespace Data\Model;

use FilesystemIterator;

class PostsIndexDataModel
{
    public function as_array($data)
    {
        $posts_dir_path = $data['root'].'/posts/*';

        $posts_dir =
            new FilesystemIterator(
                dirname($posts_dir_path));

        foreach ($posts_dir as $_file) {
            $basename = $_file->getBasename('.md');
            list($y, $m, $d) = explode('-', $basename, 4);
            $created = strtotime("{$y}-{$m}-{$d}");

            if (isset($data['before'])
                AND $data['before'] < $created)
            {
                continue;
            }

            $posts[$basename] =
                $this->title_and_intro_from_markdown_file($_file)
                + [
                    'slug' => $basename,
                    'created' => $created,
                ];
        }

        krsort($posts);

        return array('posts' => array_values($posts));
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
