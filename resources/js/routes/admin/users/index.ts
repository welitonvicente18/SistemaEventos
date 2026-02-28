import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/usuario'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/usuario',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/usuario'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/usuario'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/usuario'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/usuario/novo'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/usuario/novo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/usuario/novo'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/usuario/novo'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/usuario/novo'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::store
* @see app/Http/Controllers/Admin/Users/UserController.php:23
* @route '/admin/usuario/novo'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/usuario/novo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::store
* @see app/Http/Controllers/Admin/Users/UserController.php:23
* @route '/admin/usuario/novo'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::store
* @see app/Http/Controllers/Admin/Users/UserController.php:23
* @route '/admin/usuario/novo'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::edit
* @see app/Http/Controllers/Admin/Users/UserController.php:39
* @route '/admin/usuario/{user}/editar'
*/
export const edit = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/usuario/{user}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::edit
* @see app/Http/Controllers/Admin/Users/UserController.php:39
* @route '/admin/usuario/{user}/editar'
*/
edit.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: args.user,
    }

    return edit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::edit
* @see app/Http/Controllers/Admin/Users/UserController.php:39
* @route '/admin/usuario/{user}/editar'
*/
edit.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::edit
* @see app/Http/Controllers/Admin/Users/UserController.php:39
* @route '/admin/usuario/{user}/editar'
*/
edit.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::update
* @see app/Http/Controllers/Admin/Users/UserController.php:46
* @route '/admin/usuario/{user}/editar'
*/
export const update = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/usuario/{user}/editar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::update
* @see app/Http/Controllers/Admin/Users/UserController.php:46
* @route '/admin/usuario/{user}/editar'
*/
update.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return update.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::update
* @see app/Http/Controllers/Admin/Users/UserController.php:46
* @route '/admin/usuario/{user}/editar'
*/
update.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::destroy
* @see app/Http/Controllers/Admin/Users/UserController.php:73
* @route '/admin/usuario/{user}/deletar'
*/
export const destroy = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

destroy.definition = {
    methods: ["put"],
    url: '/admin/usuario/{user}/deletar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::destroy
* @see app/Http/Controllers/Admin/Users/UserController.php:73
* @route '/admin/usuario/{user}/deletar'
*/
destroy.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: args.user,
    }

    return destroy.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::destroy
* @see app/Http/Controllers/Admin/Users/UserController.php:73
* @route '/admin/usuario/{user}/deletar'
*/
destroy.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

const users = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default users