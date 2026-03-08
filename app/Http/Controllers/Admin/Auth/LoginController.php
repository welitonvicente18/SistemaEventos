<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function login()
    {
        return Inertia::render('admin/Login');
    }
}