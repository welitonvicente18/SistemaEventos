import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:13
* @route '/admin/registrar'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/admin/registrar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:13
* @route '/admin/registrar'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:13
* @route '/admin/registrar'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::register
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:13
* @route '/admin/registrar'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

const RegisterController = { register }

export default RegisterController