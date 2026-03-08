import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
export const email = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(args, options),
    method: 'get',
})

email.definition = {
    methods: ["get","head"],
    url: '/confirm-email/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
email.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return email.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
email.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\ConfirmEmailController::__invoke
* @see app/Http/Controllers/Admin/Auth/ConfirmEmailController.php:10
* @route '/confirm-email/{token}'
*/
email.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: email.url(args, options),
    method: 'head',
})

const confirm = {
    email: Object.assign(email, email),
}

export default confirm