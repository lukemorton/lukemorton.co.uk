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
            'atom' => ['GET', '/thoughts/latest.atom', $this->c('feeds', 'atom')],
            'json' => ['GET', '/thoughts/latest.json', $this->c('feeds', 'json')],
            'archive' => ['GET', '/thoughts/archive', $this->c('posts', 'index')],
            'post' => ['GET', '/thoughts/:slug', $this->c('posts', 'show')],
        ];
    }
}
