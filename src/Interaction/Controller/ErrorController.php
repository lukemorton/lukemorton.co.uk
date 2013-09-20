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
                'index_url' => $req['app']->uri('index'),
            ]);
        } else {
            $body = '';
        }

        return Res::notFound($body);
    }
}
