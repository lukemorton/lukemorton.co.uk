<?php

namespace Interaction\Controller;

use Interaction\Controller\AbstractPageController;

use Lily\Util\Response as Res;

class MainController extends AbstractPageController
{
    public function index($req)
    {
        $posts_data =
            $req['dc']['d']['model']['index']->as_array(
                [
                    'root' => $req['root'],
                ]);

        return $this->render($req, 'index', [
            'markdown' => $req['dc']['markdown'],
            'about_url' => $req['app']->uri('about'),
            'posts' => $posts_data['posts'],
        ]);
    }

    public function post($req)
    {
        $post_data =
            $req['dc']['d']['model']['post']->as_array(
                [
                    'root' => $req['root'],
                    'slug' => $req['params']['slug'],
                ]);

        if (empty($post_data)) {
            return Res::notFound();
        }

        return $this->render($req, 'post', [
            'markdown' => $req['dc']['markdown'],
            'post' => $post_data['post'],
            'index_url' => $req['app']->uri('index'),
        ]);
    }

    public function about($req)
    {
        return $this->render($req, 'about', [
            'index_url' => $req['app']->uri('index'),
        ]);
    }
}
