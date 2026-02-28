import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::store
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:25
* @route '/inscricao/{site}'
*/
export const store = (args: { site: string | number } | [site: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/inscricao/{site}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::store
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:25
* @route '/inscricao/{site}'
*/
store.url = (args: { site: string | number } | [site: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{site}', parsedArgs.site.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Subscription\SubscriptionController::store
* @see app/Http/Controllers/Admin/Subscription/SubscriptionController.php:25
* @route '/inscricao/{site}'
*/
store.post = (args: { site: string | number } | [site: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const eventSubscription = {
    store: Object.assign(store, store),
}

export default eventSubscription