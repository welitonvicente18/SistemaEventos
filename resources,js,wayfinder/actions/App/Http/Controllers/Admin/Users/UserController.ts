import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/users'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/users'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/users'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::index
* @see app/Http/Controllers/Admin/Users/UserController.php:12
* @route '/admin/users'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/users/novo'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/users/novo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/users/novo'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/users/novo'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::create
* @see app/Http/Controllers/Admin/Users/UserController.php:18
* @route '/admin/users/novo'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::store
* @see app/Http/Controllers/Admin/Users/UserController.php:23
* @route '/admin/users/novo'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/users/novo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::store
* @see app/Http/Controllers/Admin/Users/UserController.php:23
* @route '/admin/users/novo'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Users\UserController::store
* @see app/Http/Controllers/Admin/Users/UserController.php:23
* @route '/admin/users/novo'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::edit
* @see app/Http/Controllers/Admin/Users/UserController.php:40
* @route '/admin/users/{user}/editar'
*/
export const edit = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/users/{user}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::edit
* @see app/Http/Controllers/Admin/Users/UserController.php:40
* @route '/admin/users/{user}/editar'
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
* @see app/Http/Controllers/Admin/Users/UserController.php:40
* @route '/admin/users/{user}/editar'
*/
edit.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::edit
* @see app/Http/Controllers/Admin/Users/UserController.php:40
* @route '/admin/users/{user}/editar'
*/
edit.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::update
* @see app/Http/Controllers/Admin/Users/UserController.php:47
* @route '/admin/users/{user}/editar'
*/
export const update = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/users/{user}/editar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::update
* @see app/Http/Controllers/Admin/Users/UserController.php:47
* @route '/admin/users/{user}/editar'
*/
update.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/Admin/Users/UserController.php:47
* @route '/admin/users/{user}/editar'
*/
update.put = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\Users\UserController::destroy
* @see app/Http/Controllers/Admin/Users/UserController.php:75
* @route '/admin/users/{user}/deletar'
*/
export const destroy = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

destroy.definition = {
    methods: ["put"],
    url: '/admin/users/{user}/deletar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Users\UserController::destroy
* @see app/Http/Controllers/Admin/Users/UserController.php:75
* @route '/admin/users/{user}/deletar'
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
* @see app/Http/Controllers/Admin/Users/UserController.php:75
* @route '/admin/users/{user}/deletar'
*/
destroy.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

const UserController = { index, create, store, edit, update, destroy }

export default UserController