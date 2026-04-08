<?php

use App\Http\Controllers\UserController;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/posts', [PostController::class, 'index']);
Route::get('/post/{post}', [PostController::class, 'show']);
Route::post('/post', [PostController::class, 'store']);
Route::patch('/post/{post}', [PostController::class, 'update']);
Route::delete('/post/{post}', [PostController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);

Route::post('/register', [UserController::class, 'register']);

Route::get('/test', function (Request $request) {
   return $request->user();
});
