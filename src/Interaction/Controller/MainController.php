<?php

namespace Interaction\Controller;

use Interaction\Controller\AbstractPageController;

use Lily\Util\Response as Res;

class MainController extends AbstractPageController
{
    private function posts_data($req)
    {
        if ($req['env'] === 'production') {
            $between = [0, time()];
        }

        if (isset($req['query']['limit'])) {
            $limit = $req['query']['limit'];
        }

        return
            $req['dc']['d']['model']['index']->as_array(
                ['root' => $req['root']]
                + compact('between', 'limit'));
    }

    public function index($req)
    {
        $posts_data = $this->posts_data($req + ['limit' => 5]);

        return $this->render($req, 'index', [
            'index_url' => $req['app']->uri('index'),
            'markdown' => $req['dc']['markdown'],
            'about_url' => $req['app']->uri('about'),
            'archive_url' => $req['app']->uri('archive'),
            'posts' => $posts_data['posts'],
        ]);
    }

    public function archive($req)
    {
        $posts_data = $this->posts_data($req);

        return $this->render($req, 'archive', [
            'index_url' => $req['app']->uri('index'),
            'about_url' => $req['app']->uri('about'),
            'markdown' => $req['dc']['markdown'],
            'posts' => $posts_data['posts'],
        ]);
    }

    public function atom($req)
    {
        $posts_data = $this->posts_data($req);

        return
            Res::ok(
                $req['dc']['v']['model']['atom']->as_atom([
                    'posts' => $posts_data['posts'],
                    'markdown' => $req['dc']['markdown'],
                    'atom_feed' => $req['dc']['atom_feed'],
                ]),
                [
                    'Content-Type' => 'application/atom+xml',
                ]);
    }

    public function json($req)
    {
        $posts_data = $this->posts_data($req);

        return
            Res::ok(
                $req['dc']['v']['model']['json']->as_json([
                    'posts' => $posts_data['posts'],
                    'markdown' => $req['dc']['markdown'],
                ]),
                [
                    'Content-Type' => 'application/json',
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
            'archive_url' => $req['app']->uri('archive'),
            'about_url' => $req['app']->uri('about'),
        ]);
    }

    public function about($req)
    {
        return $this->render($req, 'about', [
            'index_url' => $req['app']->uri('index'),
        ]);
    }
}
