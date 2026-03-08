import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::create
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:19
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
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:19
* @route '/admin/inscrito/novo'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::create
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:19
* @route '/admin/inscrito/novo'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::create
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:19
* @route '/admin/inscrito/novo'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::edit
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:96
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
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:96
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
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:96
* @route '/admin/inscrito/{id}/editar'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::edit
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:96
* @route '/admin/inscrito/{id}/editar'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::update
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:106
* @route '/admin/inscrito/{id}/editar'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/inscrito/{id}/editar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::update
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:106
* @route '/admin/inscrito/{id}/editar'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::update
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:106
* @route '/admin/inscrito/{id}/editar'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::destroy
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:125
* @route '/admin/inscrito/{id}/deletar'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

destroy.definition = {
    methods: ["put"],
    url: '/admin/inscrito/{id}/deletar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::destroy
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:125
* @route '/admin/inscrito/{id}/deletar'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::destroy
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:125
* @route '/admin/inscrito/{id}/deletar'
*/
destroy.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

const subscription = {
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default subscription