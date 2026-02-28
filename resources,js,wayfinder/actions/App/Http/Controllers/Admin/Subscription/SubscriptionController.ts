import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::store
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:28
* @route '/inscricao/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/inscricao/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::store
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:28
* @route '/inscricao/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::store
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:28
* @route '/inscricao/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::confirmation
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:64
* @route '/inscricao/{id}/confirmacao'
*/
export const confirmation = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmation.url(args, options),
    method: 'get',
})

confirmation.definition = {
    methods: ["get","head"],
    url: '/inscricao/{id}/confirmacao',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::confirmation
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:64
* @route '/inscricao/{id}/confirmacao'
*/
confirmation.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return confirmation.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::confirmation
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:64
* @route '/inscricao/{id}/confirmacao'
*/
confirmation.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::confirmation
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:64
* @route '/inscricao/{id}/confirmacao'
*/
confirmation.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmation.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::cancel
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:72
* @route '/inscricao/cancelar/{tokem}'
*/
export const cancel = (args: { tokem: string | number } | [tokem: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(args, options),
    method: 'get',
})

cancel.definition = {
    methods: ["get","head"],
    url: '/inscricao/cancelar/{tokem}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::cancel
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:72
* @route '/inscricao/cancelar/{tokem}'
*/
cancel.url = (args: { tokem: string | number } | [tokem: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tokem: args }
    }

    if (Array.isArray(args)) {
        args = {
            tokem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tokem: args.tokem,
    }

    return cancel.definition.url
            .replace('{tokem}', parsedArgs.tokem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::cancel
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:72
* @route '/inscricao/cancelar/{tokem}'
*/
cancel.get = (args: { tokem: string | number } | [tokem: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::cancel
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:72
* @route '/inscricao/cancelar/{tokem}'
*/
cancel.head = (args: { tokem: string | number } | [tokem: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cancel.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::create
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:20
* @route '/admin/inscrito/novo'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/inscrito/novo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::create
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:20
* @route '/admin/inscrito/novo'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::create
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:20
* @route '/admin/inscrito/novo'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::create
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:20
* @route '/admin/inscrito/novo'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::edit
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:97
* @route '/admin/inscrito/{id}/editar'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/inscrito/{id}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::edit
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:97
* @route '/admin/inscrito/{id}/editar'
*/
edit.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::edit
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:97
* @route '/admin/inscrito/{id}/editar'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::edit
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:97
* @route '/admin/inscrito/{id}/editar'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

const SubscriptionController = { store, confirmation, cancel, create, edit }

export default SubscriptionController