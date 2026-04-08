<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {
    public function register(Request $request) {
        $user = User::create([
            'name' => request('user.name'),
            'email' => request('user.email'),
            'password' => Hash::make(request('user.password')),
        ]);
        Auth::loginUsingId($user->id);
        logger($user);
        return [
            'token' => $user->createToken('api-token')->plainTextToken,
        ];
    }
    public function getUser(Request $request) {
        return response()->json($request->user());
    }
}
