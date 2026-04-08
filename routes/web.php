<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/{any}', function () {
    return Inertia::render('Home');
})->where('any', '.*');
