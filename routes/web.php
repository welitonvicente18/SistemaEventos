<?php

use App\Http\Controllers\Admin\Auth\AuthenticateController;
use App\Http\Controllers\Admin\Auth\ConfirmEmailController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\Auth\LogoutController;
use App\Http\Controllers\Admin\Auth\RegisterController;
use App\Http\Controllers\Admin\Auth\ResetPassword;
use App\Http\Controllers\Admin\Subscription\SubscriptionController;
use App\Http\Controllers\Public\EventAcess\EventAcessController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LoginController::class, 'login'])->name('login');

Route::post('/authenticate', AuthenticateController::class)
        ->middleware('throttle:5,5') // middleware referente ao número máximo de tentativas
        ->name('login.do');

Route::get('/logout', LogoutController::class)->name('logout');

Route::get('/esquecisenha', [ResetPassword::class, 'index'])->name('password');
Route::post('/esquecisenha', [ResetPassword::class, 'reset'])->name('password.reset');

Route::get('/registrar', [RegisterController::class, 'register'])->name('register');
Route::post('/registrar', [RegisterController::class, 'store'])->name('register.store');

Route::get('/inscricao/{site}', EventAcessController::class)->name('eventAcess.index');
Route::post('/inscricao/store', [SubscriptionController::class, 'store'])->name('eventSubscription.store');
Route::get('/inscricao/{id}/confirmacao', [SubscriptionController::class, 'confirmation'])->name('subscription.confirmation');
Route::get('/inscricao/cancelar/{tokem}', [SubscriptionController::class, 'cancel'])->name('subscription.cancel');
Route::get('/confirm-email/{token}', ConfirmEmailController::class)->name('confirm.email');

require_once 'admin.php';
require_once 'public.php';