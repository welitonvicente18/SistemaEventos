<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ResetPassword extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('admin/ResetPassword', []);
    }

    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user){
            return back()->withErrors(['email' => 'Não conseguimos achar seu email']);
        }

        $newPassword = Str::random(5);

        $user->password = Hash::make($newPassword);
        $user->save();

        Mail::to($user->email)->send(new ResetPasswordMail($user->name, $newPassword));

        return back()->with('success', 'Nova senha enviada por email.');
    }
}
