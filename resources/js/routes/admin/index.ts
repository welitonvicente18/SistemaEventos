import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
import password9cfa90 from './password'
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

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/admin'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/admin'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/admin'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:10
* @route '/admin'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/admin/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/admin/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/admin/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/admin/logout'
*/
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\LogoutController::__invoke
* @see app/Http/Controllers/Admin/Auth/LogoutController.php:16
* @route '/admin/logout'
*/
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/admin/esquecisenha'
*/
export const password = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: password.url(options),
    method: 'get',
})

password.definition = {
    methods: ["get","head"],
    url: '/admin/esquecisenha',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/admin/esquecisenha'
*/
password.url = (options?: RouteQueryOptions) => {
    return password.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/admin/esquecisenha'
*/
password.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: password.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\ResetPassword::password
* @see app/Http/Controllers/Admin/Auth/ResetPassword.php:16
* @route '/admin/esquecisenha'
*/
password.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: password.url(options),
    method: 'head',
})

const admin = {
    dashboard: Object.assign(dashboard, dashboard),
    login: Object.assign(login, loginDf2c2a),
    logout: Object.assign(logout, logout),
    password: Object.assign(password, password9cfa90),
    users: Object.assign(users, users),
    event: Object.assign(event, event),
    subscription: Object.assign(subscription, subscription),
}

export default admin