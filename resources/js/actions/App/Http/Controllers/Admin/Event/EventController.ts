import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Event\EventController::index
* @see app/Http/Controllers/Admin/Event/EventController.php:17
* @route '/admin/evento'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/evento',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Event\EventController::index
* @see app/Http/Controllers/Admin/Event/EventController.php:17
* @route '/admin/evento'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Event\EventController::index
* @see app/Http/Controllers/Admin/Event/EventController.php:17
* @route '/admin/evento'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::index
* @see app/Http/Controllers/Admin/Event/EventController.php:17
* @route '/admin/evento'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::show
* @see app/Http/Controllers/Admin/Event/EventController.php:27
* @route '/admin/evento/{id}/gestao'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/evento/{id}/gestao',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Event\EventController::show
* @see app/Http/Controllers/Admin/Event/EventController.php:27
* @route '/admin/evento/{id}/gestao'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Event\EventController::show
* @see app/Http/Controllers/Admin/Event/EventController.php:27
* @route '/admin/evento/{id}/gestao'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::show
* @see app/Http/Controllers/Admin/Event/EventController.php:27
* @route '/admin/evento/{id}/gestao'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::create
* @see app/Http/Controllers/Admin/Event/EventController.php:47
* @route '/admin/evento/novo'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/evento/novo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Event\EventController::create
* @see app/Http/Controllers/Admin/Event/EventController.php:47
* @route '/admin/evento/novo'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Event\EventController::create
* @see app/Http/Controllers/Admin/Event/EventController.php:47
* @route '/admin/evento/novo'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::create
* @see app/Http/Controllers/Admin/Event/EventController.php:47
* @route '/admin/evento/novo'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::store
* @see app/Http/Controllers/Admin/Event/EventController.php:55
* @route '/admin/evento/novo'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/evento/novo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Event\EventController::store
* @see app/Http/Controllers/Admin/Event/EventController.php:55
* @route '/admin/evento/novo'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Event\EventController::store
* @see app/Http/Controllers/Admin/Event/EventController.php:55
* @route '/admin/evento/novo'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::edit
* @see app/Http/Controllers/Admin/Event/EventController.php:85
* @route '/admin/evento/{id}/editar'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/evento/{id}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Event\EventController::edit
* @see app/Http/Controllers/Admin/Event/EventController.php:85
* @route '/admin/evento/{id}/editar'
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
* @see \App\Http\Controllers\Admin\Event\EventController::edit
* @see app/Http/Controllers/Admin/Event/EventController.php:85
* @route '/admin/evento/{id}/editar'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::edit
* @see app/Http/Controllers/Admin/Event/EventController.php:85
* @route '/admin/evento/{id}/editar'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::update
* @see app/Http/Controllers/Admin/Event/EventController.php:95
* @route '/admin/evento/{id}/editar'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/evento/{id}/editar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Event\EventController::update
* @see app/Http/Controllers/Admin/Event/EventController.php:95
* @route '/admin/evento/{id}/editar'
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
* @see \App\Http\Controllers\Admin\Event\EventController::update
* @see app/Http/Controllers/Admin/Event/EventController.php:95
* @route '/admin/evento/{id}/editar'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\Event\EventController::destroy
* @see app/Http/Controllers/Admin/Event/EventController.php:125
* @route '/admin/evento/{id}/deletar'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

destroy.definition = {
    methods: ["put"],
    url: '/admin/evento/{id}/deletar',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Event\EventController::destroy
* @see app/Http/Controllers/Admin/Event/EventController.php:125
* @route '/admin/evento/{id}/deletar'
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
* @see \App\Http\Controllers\Admin\Event\EventController::destroy
* @see app/Http/Controllers/Admin/Event/EventController.php:125
* @route '/admin/evento/{id}/deletar'
*/
destroy.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

const EventController = { index, show, create, store, edit, update, destroy }

export default EventController