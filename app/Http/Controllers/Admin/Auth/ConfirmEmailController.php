<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;

class ConfirmEmailController extends Controller
{
    public function __invoke($id)
    {
        $user = User::findOrFail(base64_decode($id));

        $userDados['email_verified_at'] = date('Y-m-d H:i:s');
        $user->update($userDados);

        return redirect()->route('login')
            ->with('success', 'Email confirmado com sucesso! Agora você pode fazer login.');
    }
}