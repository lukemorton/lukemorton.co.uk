<?php

namespace Data\Model;

use Data\Model\AbstractDataModel;

class PostDataModel extends AbstractDataModel
{
    public function as_array($data)
    {
        list($y, $m, $d) = explode('-', $data['slug'], 4);

        $post_path = $data['root'].'/posts/'.$data['slug'].'.md';

        if ( ! file_exists($post_path)) {
            return [];
        }

        $post_content = file_get_contents($post_path);

        $first_new_line_pos = strpos($post_content, "\n\n");

        return [
            'post' => [
                'title' => substr($post_content, 2, $first_new_line_pos),
                'content' =>
                    $data['markdown']->transform(
                        substr($post_content, $first_new_line_pos)),
                'created' => strtotime("{$y}-{$m}-{$d}"),
            ],
        ];
    }
}
