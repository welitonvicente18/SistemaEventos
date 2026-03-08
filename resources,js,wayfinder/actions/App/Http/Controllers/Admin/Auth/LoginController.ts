import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

const LoginController = { login }

export default LoginController