import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import users from './users'
import event from './event'
import subscription from './subscription'
/**
* @see \App\Http\Controllers\Admin\DashboardController::__invoke
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DashboardController::__invoke
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DashboardController::__invoke
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::__invoke
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

const admin = {
    dashboard: Object.assign(dashboard, dashboard),
    users: Object.assign(users, users),
    event: Object.assign(event, event),
    subscription: Object.assign(subscription, subscription),
}

export default admin