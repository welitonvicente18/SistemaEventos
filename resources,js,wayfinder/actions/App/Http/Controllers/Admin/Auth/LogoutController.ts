import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
const LogoutController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogoutController.url(options),
    method: 'get',
})

LogoutController.definition = {
    methods: ["get","head"],
    url: '/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
LogoutController.url = (options?: RouteQueryOptions) => {
    return LogoutController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
LogoutController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogoutController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
LogoutController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LogoutController.url(options),
    method: 'head',
})

export default LogoutController