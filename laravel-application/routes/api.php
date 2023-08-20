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
        Route::name('cross-site-scripting')
            ->prefix('cross-site-scripting')
            ->group(
                __DIR__ . '/issues/cross-site-scripting.php'
            );

        Route::name('denial-of-service')
            ->prefix('denial-of-service')
            ->group(
                __DIR__ . '/issues/denial-of-service.php'
            );

        Route::name('path-traversal')
            ->prefix('path-traversal')
            ->group(
                __DIR__ . '/issues/path-traversal.php'
            );

        Route::name('remote-code-execution')
            ->prefix('remote-code-execution')
            ->group(
                __DIR__ . '/issues/remote-code-execution.php'
            );

        Route::name('sql-injection')
            ->prefix('sql-injection')
            ->group(
                __DIR__ . '/issues/sql-injection.php'
            );
    });
