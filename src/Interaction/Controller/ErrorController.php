<?php

namespace Interaction\Controller;

use Interaction\Controller\AbstractPageController;

use Lily\Util\Response as Res;

class ErrorController extends AbstractPageController
{
    public function notFound($req)
    {
        if (strpos($req['uri'], '.') === FALSE) {
            $body = $this->render($req, 'not_found', [
                'title' => 'Page Not Found',
                'index_url' => $req['app']->uri('index'),
            ]);
        } else {
            $body = '';
        }

        return Res::notFound($body);
    }

    public function error($req)
    {
        return Res::response(500, $this->render($req, 'error', [
            'title' => 'Oooops, an error happened',
            'index_url' => $req['app']->uri('index'),
        ]));
    }
}
