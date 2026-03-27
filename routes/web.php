<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/{any}', function () {
    return Inertia::render('Home');
})->where('any', '.*');

//Route::get('/', function () {
//    return Inertia::render('Home');
//});
