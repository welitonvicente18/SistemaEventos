<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Auth\AuthenticateRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AuthenticateController extends Controller
{
    public function __invoke(AuthenticateRequest $request)
    {
        $validated = $request->validated();

        $credentials = [
            'email' => $validated['email'],
            'password' => $validated['password']
        ];

        if(Auth::attempt($credentials, $validated['remember']?? false)) {
            Session::regenerate();
            Inertia::flash('success', 'Seja bem-vindo!');
            return Redirect::route('admin.dashboard');
        }

        return Redirect::back()->withInput()
            ->withInput($request->only('email', 'remember'));
    }
}
