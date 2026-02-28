import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Public\EventAcess\EventAcessController::__invoke
* @see app/Http/Controllers/Public/EventAcess/EventAcessController.php:16
* @route '/inscricao/{site}'
*/
export const index = (args: { site: string | number } | [site: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/inscricao/{site}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\EventAcess\EventAcessController::__invoke
* @see app/Http/Controllers/Public/EventAcess/EventAcessController.php:16
* @route '/inscricao/{site}'
*/
index.url = (args: { site: string | number } | [site: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { site: args }
    }

    if (Array.isArray(args)) {
        args = {
            site: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        site: args.site,
    }

    return index.definition.url
            .replace('{site}', parsedArgs.site.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\EventAcess\EventAcessController::__invoke
* @see app/Http/Controllers/Public/EventAcess/EventAcessController.php:16
* @route '/inscricao/{site}'
*/
index.get = (args: { site: string | number } | [site: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Public\EventAcess\EventAcessController::__invoke
* @see app/Http/Controllers/Public/EventAcess/EventAcessController.php:16
* @route '/inscricao/{site}'
*/
index.head = (args: { site: string | number } | [site: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

const eventAcess = {
    index: Object.assign(index, index),
}

export default eventAcess