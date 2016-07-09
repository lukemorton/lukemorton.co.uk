<?php

namespace Interaction\Controller;

use Interaction\Controller\PostsController;

use Lily\Util\Response as Res;

class PostsController extends AbstractPostsController
{
    public function index($req)
    {
        $posts_data = $this->posts_data($req);

        return $this->render($req, 'archive', [
            'index_url' => $req['app']->uri('index'),
            'about_url' => $req['app']->uri('about'),
            'markdown' => $req['dc']['markdown'],
            'posts' => $posts_data['posts'],
        ]);
    }

    public function show($req)
    {
        $post_data = $this->post_data($req);

        if (empty($post_data)) {
            return Res::notFound();
        }

        return $this->render($req, 'post', [
            'markdown' => $req['dc']['markdown'],
            'post' => $post_data['post'],
            'index_url' => $req['app']->uri('index'),
            'archive_url' => $req['app']->uri('archive'),
            'about_url' => $req['app']->uri('about'),
        ]);
    }

    public function show_json($req)
    {
        $post_data = $this->post_data($req);

        if (empty($post_data)) {
            return Res::notFound();
        }

        return
            Res::ok(
                $req['dc']['v']['model']['post']->as_json([
                    'post' => $post_data['post'],
                    'markdown' => $req['dc']['markdown'],
                ]),
                [
                    'Content-Type' => 'application/json',
                ]);
    }

    private function post_data($req)
    {
        return
            $req['dc']['d']['model']['post']->as_array(
                [
                    'root' => $req['root'],
                    'slug' => $req['params']['slug'],
                ]);
    }
}
