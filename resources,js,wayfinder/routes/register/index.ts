import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::store
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:22
* @route '/registrar'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/registrar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::store
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:22
* @route '/registrar'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\RegisterController::store
* @see app/Http/Controllers/Admin/Auth/RegisterController.php:22
* @route '/registrar'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const register = {
    store: Object.assign(store, store),
}

export default register