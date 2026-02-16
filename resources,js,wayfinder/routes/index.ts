import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\ResetPassword::password
* @see app/Http/Controllers/ResetPassword.php:15
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
* @see \App\Http\Controllers\ResetPassword::password
* @see app/Http/Controllers/ResetPassword.php:15
* @route '/esquecisenha'
*/
password.url = (options?: RouteQueryOptions) => {
    return password.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResetPassword::password
* @see app/Http/Controllers/ResetPassword.php:15
* @route '/esquecisenha'
*/
password.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: password.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResetPassword::password
* @see app/Http/Controllers/ResetPassword.php:15
* @route '/esquecisenha'
*/
password.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: password.url(options),
    method: 'head',
})

