import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
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

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/logout'
*/
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/esquecisenha'
*/
export const password = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: password.url(options),
    method: 'get',
})

password.definition = {
    methods: ["get","head"],
    url: '/esquecisenha',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/esquecisenha'
*/
password.url = (options?: RouteQueryOptions) => {
    return password.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/esquecisenha'
*/
password.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: password.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/esquecisenha'
*/
password.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: password.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:17
* @route '/registrar'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/registrar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:17
* @route '/registrar'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:17
* @route '/registrar'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:17
* @route '/registrar'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

