import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\EsqueciSenhaController::store
* @see app/Http/Controllers/Admin/Auth/EsqueciSenhaController.php:18
* @route '/admin/esquecisenha'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/esquecisenha',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\EsqueciSenhaController::store
* @see app/Http/Controllers/Admin/Auth/EsqueciSenhaController.php:18
* @route '/admin/esquecisenha'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\EsqueciSenhaController::store
* @see app/Http/Controllers/Admin/Auth/EsqueciSenhaController.php:18
* @route '/admin/esquecisenha'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const esquecisenha = {
    store: Object.assign(store, store),
}

export default esquecisenha