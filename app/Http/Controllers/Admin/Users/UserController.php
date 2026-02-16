<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('name', 'asc')->get();
        return Inertia::render('admin/users/Index', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('admin/users/Form', ['user' => '']);
    }

    public function store(Request $request, User $user)
    {
        $userValidate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'fone' => 'nullable|max:20',
            'fone' => 'nullable|max:20',
            'password' => 'nullable|max:20',
            'avatar' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
        ]);

        $user->create($userValidate);

        Inertia::flash('success', 'Usuário Salvo com sucesso!');
        return redirect()->route('admin.users.index');
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        $avatarUrl = $user->avatar ? asset('storage/' . $user->avatar) : null;
        return Inertia::render('admin/users/Form', ['user' => $user, 'avatarUrl' => $avatarUrl]);
    }

    public function update(Request $request, User $user)
    {
        $userValidate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'fone' => 'nullable|max:20',
            'password' => 'nullable|string|max:20',
            'avatar' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
        ]);

        if (!empty($userValidate['password'])) {
            $userValidate['password'] = bcrypt($userValidate['password']);
        } else {
            unset($userValidate['password']); // remove para não atualizar a coluna
        }


        if ($request->file('avatar')) {
            $fileName = preg_replace('/[^A-Za-z]/', '', $request->name) . '_' . date('Y-m-d_H:i:s') . '.' . $request->file('avatar')->getClientOriginalExtension();
            $userValidate['avatar'] = $request->file('avatar')->storeAs('/users/avatar', $fileName);
        }

        $user->update($userValidate);

        Inertia::flash('success', 'Usuário atualizado com sucesso!');
        return redirect()->route('admin.users.index');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->destroy($id);
        return redirect()->route('admin.users.index');
    }
}
