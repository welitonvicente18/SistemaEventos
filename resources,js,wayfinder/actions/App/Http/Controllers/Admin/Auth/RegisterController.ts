import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
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

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::store
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:22
* @route '/registrar'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/registrar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::store
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:22
* @route '/registrar'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::store
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:22
* @route '/registrar'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const RegisterController = { register, store }

export default RegisterController