import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/authenticate'
*/
const AuthenticateController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AuthenticateController.url(options),
    method: 'post',
})

AuthenticateController.definition = {
    methods: ["post"],
    url: '/authenticate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/authenticate'
*/
AuthenticateController.url = (options?: RouteQueryOptions) => {
    return AuthenticateController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/authenticate'
*/
AuthenticateController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AuthenticateController.url(options),
    method: 'post',
})

export default AuthenticateController