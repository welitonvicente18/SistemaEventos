<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Mail\CreateUserMail;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mail;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function register()
    {
        return Inertia::render('admin/Register');
    }

    public function store(Request $request, User $user)
    {
        $validate = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8','confirmed'],
        ]);

        $userSalve = $user->create($validate);
        $idUser = base64_encode($userSalve->id);

        Mail::to($validate['email'])->send(new CreateUserMail($validate['name'], $idUser));

        return redirect()->route('login')->with('success', 'Cadastro realizado com sucesso! Verifique seu email para confirmar seu cadastro.');
    }
}
