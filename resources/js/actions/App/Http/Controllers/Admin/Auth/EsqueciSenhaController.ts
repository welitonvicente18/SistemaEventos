import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\EsqueciSenhaController::index
* @see app/Http/Controllers/Admin/Auth/EsqueciSenhaController.php:13
* @route '/admin/esquecisenha'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/esquecisenha',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\EsqueciSenhaController::index
* @see app/Http/Controllers/Admin/Auth/EsqueciSenhaController.php:13
* @route '/admin/esquecisenha'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\EsqueciSenhaController::index
* @see app/Http/Controllers/Admin/Auth/EsqueciSenhaController.php:13
* @route '/admin/esquecisenha'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\EsqueciSenhaController::index
* @see app/Http/Controllers/Admin/Auth/EsqueciSenhaController.php:13
* @route '/admin/esquecisenha'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

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

const EsqueciSenhaController = { index, store }

export default EsqueciSenhaController