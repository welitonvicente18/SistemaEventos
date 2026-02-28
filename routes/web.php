<?php

use App\Http\Controllers\Admin\Subscription\SubscriptionController;
use App\Http\Controllers\Public\EventAcess\ConfimationSubscripttionController;
use App\Http\Controllers\Public\EventAcess\EventAcessController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/inscricao/{site}', EventAcessController::class)->name('eventAcess.index');
Route::post('/inscricao/store', [SubscriptionController::class, 'store'])->name('eventSubscription.store');
Route::get('/inscricao/{id}/confirmacao', [SubscriptionController::class, 'confirmation'])->name('subscription.confirmation');
Route::get('/inscricao/cancelar/{tokem}', [SubscriptionController::class, 'cancel'])->name('subscription.cancel');

require_once 'admin.php';
require_once 'public.php';
