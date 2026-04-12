<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
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
        return response()->json([
            'user' => $user,
            'access_token' => $user->createToken('api-token')->plainTextToken
        ], 201);
    }
    public function getUser(Request $request) {
        return response()->json(['user' => $request->user()]);
    }
    public function login(Request $request) {

        $credentials = $request->user;

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }
    public function logout(Request $request) {
        $request->session()->flush();
        return response()->json('OK', 200);
    }
}
