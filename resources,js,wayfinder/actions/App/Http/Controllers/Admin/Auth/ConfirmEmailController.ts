import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
const ConfirmEmailController = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ConfirmEmailController.url(args, options),
    method: 'get',
})

ConfirmEmailController.definition = {
    methods: ["get","head"],
    url: '/confirm-email/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
ConfirmEmailController.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return ConfirmEmailController.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
ConfirmEmailController.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ConfirmEmailController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
ConfirmEmailController.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ConfirmEmailController.url(args, options),
    method: 'head',
})

export default ConfirmEmailController