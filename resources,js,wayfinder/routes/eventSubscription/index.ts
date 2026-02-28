import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
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

const eventSubscription = {
    store: Object.assign(store, store),
}

export default eventSubscription