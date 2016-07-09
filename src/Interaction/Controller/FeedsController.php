<?php

namespace Interaction\Controller;

use Interaction\Controller\PostsController;

use Lily\Util\Response as Res;

class FeedsController extends AbstractPostsController
{
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
}
