<?php

use App\Http\Controllers\Admin\Auth\AuthenticateController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\Auth\LogoutController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\Users\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['as' => 'admin.', 'prefix' => 'admin'], function () {

    Route::get('/', [LoginController::class, 'login'])->name('login');

    Route::post('/authenticate', AuthenticateController::class)
//        ->middleware('throttle:5,5') // middleware referente ao número máximo de tentativas
        ->name('login.do');

    Route::get('/logout', LogoutController::class)->name('logout');

    Route::group(['middleware' => ['auth']], function () {
        Route::get('/dashboard', DashboardController::class)->name('dashboard');
    });

    // Users
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/novo', [UserController::class, 'create'])->name('users.create');
    Route::post('/users/novo', [UserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}/editar', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}/editar', [UserController::class, 'update'])->name('users.update');
    Route::put('/users/{user}/deletar', [UserController::class, 'destroy'])->name('users.destroy');
});
