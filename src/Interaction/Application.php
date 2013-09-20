<?php

namespace Interaction;

use Lily\Application\RoutedApplication;
use Lily\Util\Response as Res;

use Exception;

class Application extends RoutedApplication
{
    private $dc;

    // Takes a dependency container and root
    public function __construct(array $config)
    {
        $this->dc = $config['dc'];
        $this->root = $config['root'];
    }

    // Get a controller by name from dependency container
    // and return a tuple of controller and method name
    private function c($name, $method)
    {
        return [$this->dc['c'][$name], $method];
    }

    // Returns an array of named routes
    protected function routes()
    {
        $root = $this->root;

        return [
            'index' => ['GET', '/', $this->c('main', 'index')],

            'about' => ['GET', '/about', $this->c('main', 'about')],

            'post' => ['GET', '/thoughts/:slug', $this->c('main', 'post')],

            // [NULL, NULL, function ($request) use ($root) {
            //     $file = $root.'/public/'.$request['uri'];

            //     if (file_exists($file)) {
            //         return
            //             Res::ok(
            //                 file_get_contents($file),
            //                 [
            //                     'Content-Type' => 'text/css',
            //                 ]);
            //     }

            //     return Res::notFound();
            // }]
        ];
    }
}
