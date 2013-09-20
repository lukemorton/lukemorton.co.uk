<?php
$root = __DIR__.'/..';

require $root.'/vendor/autoload.php';

$dc = new Interaction\DependencyContainer(compact('root'));

$response =
    (new Lily\Adapter\HTTP(['returnResponse' => TRUE]))->run(
        new Lily\Application\MiddlewareApplication([
            $app = new Interaction\Application(compact('dc', 'root')),

            new Lily\Middleware\ExceptionHandler(['register' => TRUE]),

            new Lily\Middleware\ResponseStatusHandler([
                'handlers' => [
                    404 => function ($req) {
                        return $req['dc']['c']['error']->notFound($req);
                    },
                ],
            ]),

            new Lily\Middleware\Injection([
                'inject' => compact('dc', 'root', 'app'),
            ]),
        ]));

// If running in PHP dev webserver and response is 404 return
// FALSE. See: http://php.net/manual/en/features.commandline.webserver.php
if (PHP_SAPI === 'cli-server'
    AND $response['status'] === 404
    AND empty($response['body'])) {
    return FALSE;
}

// If we're here just send request out
(new Lily\Adapter\HTTP)->run(
    function () use ($response) {
        return $response;
    });
