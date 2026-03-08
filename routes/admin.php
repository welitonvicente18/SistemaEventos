<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\Event\EventController;
use App\Http\Controllers\Admin\Subscription\SubscriptionController;
use App\Http\Controllers\Admin\Users\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['as' => 'admin.', 'prefix' => 'admin'], function () {

    Route::group(['middleware' => ['auth']], function () {
        Route::get('/dashboard', DashboardController::class)->name('dashboard');
    });

    // Users
    Route::get('/usuario', [UserController::class, 'index'])->name('users.index');
    Route::get('/usuario/novo', [UserController::class, 'create'])->name('users.create');
    Route::post('/usuario/novo', [UserController::class, 'store'])->name('users.store');
    Route::get('/usuario/{user}/editar', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/usuario/{user}/editar', [UserController::class, 'update'])->name('users.update');
    Route::put('/usuario/{user}/deletar', [UserController::class, 'destroy'])->name('users.destroy');

    // Event
    Route::get('/evento', [EventController::class, 'index'])->name('event.index');
    Route::get('/evento/{id}/gestao', [EventController::class, 'show'])->name('event.show');
    Route::get('/evento/novo', [EventController::class, 'create'])->name('event.create');
    Route::post('/evento/novo', [EventController::class, 'store'])->name('event.store');
    Route::get('/evento/{id}/editar', [EventController::class, 'edit'])->name('event.edit');
    Route::put('/evento/{id}/editar', [EventController::class, 'update'])->name('event.update');
    Route::put('/evento/{id}/deletar', [EventController::class, 'destroy'])->name('event.destroy');

    // Subscription
    Route::get('/inscrito/novo', [SubscriptionController::class, 'create'])->name('subscription.create');
    Route::get('/inscrito/{id}/editar', [SubscriptionController::class, 'edit'])->name('subscription.edit');
    Route::put('/inscrito/{id}/editar', [SubscriptionController::class, 'update'])->name('subscription.update');
    Route::put('/inscrito/{id}/deletar', [SubscriptionController::class, 'destroy'])->name('subscription.destroy');
});
