<?php

namespace Interaction\Controller;

use Interaction\Controller\PostsController;

use Lily\Util\Response as Res;

class MainController extends AbstractPostsController
{
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

    public function about($req)
    {
        return $this->render($req, 'about', [
            'index_url' => $req['app']->uri('index'),
        ]);
    }
}
