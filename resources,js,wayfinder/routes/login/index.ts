import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/authenticate'
*/
export const doMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: doMethod.url(options),
    method: 'post',
})

doMethod.definition = {
    methods: ["post"],
    url: '/authenticate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/authenticate'
*/
doMethod.url = (options?: RouteQueryOptions) => {
    return doMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticateController::__invoke
* @see app/Http/Controllers/Admin/Auth/AuthenticateController.php:14
* @route '/authenticate'
*/
doMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: doMethod.url(options),
    method: 'post',
})

const login = {
    do: Object.assign(doMethod, doMethod),
}

export default login