<?php
$root = __DIR__.'/..';

require $root.'/vendor/autoload.php';

$dc = new Interaction\DependencyContainer(compact('root'));
$app = new Interaction\Application(compact('dc', 'root'));
$response_status_handlers = [
    404 => function ($req) {
        return $req['dc']['c']['error']->notFound($req);
    },
];

if (getenv('PRODUCTION')) {
    $env = 'production';
    $response_status_handlers[500] = function ($req) {
        return $req['dc']['c']['error']->error($req);
    };
} else {
    $env = 'development';
}

$response =
    (new Lily\Adapter\HTTP(['returnResponse' => TRUE]))->run(
        new Lily\Application\MiddlewareApplication(
            [
                $app,

                new Lily\Middleware\ExceptionHandler(['register' => TRUE]),

                new Lily\Middleware\ResponseStatusHandler([
                    'handlers' => $response_status_handlers,
                ]),

                new Lily\Middleware\Injection([
                    'inject' => compact('env', 'dc', 'root', 'app'),
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
