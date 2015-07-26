<?php

namespace Interaction;

use Interaction\Controller;

use Michelf\MarkdownExtra;

use FeedWriter\Atom;

use Data;
use View;

use Pimple;
use Phly;

class DependencyContainer extends Pimple
{
    public function __construct($config)
    {
        $this['v'] = $this->share(function () use ($config) {
            $c = new Pimple;

            $c['template_engine'] = $this->share(function () use ($config) {
                $mustache = new Phly\Mustache\Mustache;
                $mustache->setTemplatePath($config['root'].'/templates');
                return $mustache;
            });

            $c['model'] = $this->share(function () {
                $c = new Pimple;

                $c['index'] = $this->share(function () {
                    return new View\Model\IndexViewModel;
                });

                $c['archive'] = $this->share(function () {
                    return new View\Model\ArchiveViewModel;
                });

                $c['atom'] = $this->share(function () {
                    return new View\Model\AtomViewModel;
                });

                $c['post'] = $this->share(function () {
                    return new View\Model\PostViewModel;
                });

                $c['about'] = $this->share(function () {
                    return new View\Model\AboutViewModel;
                });

                return $c;
            });

            return $c;
        });

        $this['d'] = $this->share(function () {
            $c = new Pimple;

            $c['model'] = $this->share(function () {
                $c = new Pimple;

                $c['index'] = $this->share(function () {
                    return new Data\Model\PostsIndexDataModel;
                });

                $c['post'] = $this->share(function () {
                    return new Data\Model\PostDataModel;
                });

                return $c;
            });

            return $c;
        });

        $this['c'] = $this->share(function () {
            $c = new Pimple;

            $c['main'] = $this->share(function () {
                return new Controller\MainController;
            });

            $c['error'] = $this->share(function () {
                return new Controller\ErrorController;
            });

            return $c;
        });

        $this['atom_feed'] = function () {
            return new Atom;
        };

        $this['markdown'] = $this->share(function () {
            return new MarkdownExtra;
        });
    }
}
