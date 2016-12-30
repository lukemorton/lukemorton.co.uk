<?php

namespace Data\Model;

class PostDataModel
{
    public function as_array($data)
    {
        $post_path = $data['root'].'/posts/'.$data['slug'].'.md';

        if ( ! file_exists($post_path)) {
            return [];
        }

        $post_content = file_get_contents($post_path);

        $first_new_line_pos = strpos($post_content, "\n\n");

        list($y, $m, $d) = explode('-', $data['slug'], 4);
        
        return [
            'post' => [
                'title' => substr($post_content, 2, $first_new_line_pos),
                'content' => substr($post_content, $first_new_line_pos),
                'created' => strtotime("{$y}-{$m}-{$d}"),
            ],
        ];
    }
}
