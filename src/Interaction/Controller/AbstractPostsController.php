<?php

namespace Interaction\Controller;

use Interaction\Controller\AbstractPageController;

use Lily\Util\Response as Res;

class AbstractPostsController extends AbstractPageController
{
    protected function posts_data($req)
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
}
