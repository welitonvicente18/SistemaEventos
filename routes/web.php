<?php

use App\Http\Controllers\ResetPassword;
use Illuminate\Support\Facades\Route;

Route::get('/teste', function () {
   return \Inertia\Inertia::render('Teste', []);
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/esquecisenha', [ResetPassword::class, 'index'])->name('password');
Route::post('/esquecisenha', [ResetPassword::class, 'reset'])->name('password.reset');

require_once 'admin.php';
require_once 'client.php';
require_once 'public.php';
