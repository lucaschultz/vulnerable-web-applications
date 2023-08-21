<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::name('issues › ')
    ->group(function () {
    Route::name('greet')
        ->prefix('greet')
            ->group(
        __DIR__ . '/issues/greet.php'
            );

    Route::name('list-users')
    ->prefix('list-users')
            ->group(
        __DIR__ . '/issues/list-users.php'
            );

    Route::name('example-data')
    ->prefix('example-data')
            ->group(
        __DIR__ . '/issues/example-data.php'
            );

    Route::name('hello')
        ->prefix('hello')
            ->group(
        __DIR__ . '/issues/hello.php'
            );

    Route::name('genres')
        ->prefix('genres')
            ->group(
        __DIR__ . '/issues/genres.php'
            );
    });
