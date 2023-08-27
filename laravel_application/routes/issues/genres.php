<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
  $search = request()->query('search', '');

  try {
    $rows = DB::select("SELECT * FROM genres WHERE name LIKE '%{$search}%'");
    return response()->json($rows);
  } catch (\Exception) {
    return response('An unexpected error occurred', 500);
  }
});
