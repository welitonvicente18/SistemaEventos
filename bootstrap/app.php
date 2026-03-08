<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
//use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {

        $middleware->redirectGuestsTo(function (Request $request): string {

            if(str_starts_with($request->route()->getName(), 'admin.')) {
                return route('login');
            }

            return route('login');
        });

        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->respond(function ($response) {

            // TODO- verificar redirecionado correto
            if ($response->getStatusCode() === 429) {
                return back()->withErrors('Muitas tentativas foram feiras, aguarde e tente novamente.');
            }

            if ($response->getStatusCode() === 500 && app()->isProduction()) {
                return back()->withErrors('Erro interno, Solicite atendimento com o suporte.');
            }

            if ($response->getStatusCode() === 419) {
                return back()->with([
                    'message' => 'The page expired, please try again.',
                ]);
            }
            return $response;
        });
    })->create();
