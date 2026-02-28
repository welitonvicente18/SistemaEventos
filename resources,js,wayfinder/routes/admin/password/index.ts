import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::reset
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:21
* @route '/admin/esquecisenha'
*/
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/admin/esquecisenha',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::reset
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:21
* @route '/admin/esquecisenha'
*/
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::reset
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:21
* @route '/admin/esquecisenha'
*/
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

const password = {
    reset: Object.assign(reset, reset),
}

export default password