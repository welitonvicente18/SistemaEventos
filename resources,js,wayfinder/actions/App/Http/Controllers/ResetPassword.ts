import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ResetPassword::index
* @see app/Http/Controllers/ResetPassword.php:15
* @route '/esquecisenha'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/esquecisenha',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResetPassword::index
* @see app/Http/Controllers/ResetPassword.php:15
* @route '/esquecisenha'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResetPassword::index
* @see app/Http/Controllers/ResetPassword.php:15
* @route '/esquecisenha'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResetPassword::index
* @see app/Http/Controllers/ResetPassword.php:15
* @route '/esquecisenha'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ResetPassword::reset
* @see app/Http/Controllers/ResetPassword.php:20
* @route '/esquecisenha'
*/
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/esquecisenha',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ResetPassword::reset
* @see app/Http/Controllers/ResetPassword.php:20
* @route '/esquecisenha'
*/
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResetPassword::reset
* @see app/Http/Controllers/ResetPassword.php:20
* @route '/esquecisenha'
*/
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

const ResetPassword = { index, reset }

export default ResetPassword