import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/admin/authenticate'
*/
const AuthenticateController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AuthenticateController.url(options),
    method: 'post',
})

AuthenticateController.definition = {
    methods: ["post"],
    url: '/admin/authenticate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/admin/authenticate'
*/
AuthenticateController.url = (options?: RouteQueryOptions) => {
    return AuthenticateController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/admin/authenticate'
*/
AuthenticateController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AuthenticateController.url(options),
    method: 'post',
})

export default AuthenticateController