<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
  $search = request()->query('search', '');
  // return response(__DIR__);

  $rows = DB::select("SELECT * FROM genres WHERE name LIKE '%$search%'");
  return response()->json($rows);

  try {
  } catch (\Exception) {
    return response('An unexpected error occurred', 500);
  }
});
