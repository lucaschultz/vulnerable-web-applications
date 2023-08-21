<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  $category = request()->query('category');
  $filePath = realpath(base_path('../assets/public/') . $category);

  try {
    $data = file_get_contents($filePath);
    return response($data);
  } catch (\Exception $exception) {
    if (strpos($exception->getMessage(), 'file_get_contents(): Read of') !== false) {
      return response("Unknown category, please try 'artists' or 'genres'", 404);
    }
    return response("An unexpected error occurred, please try again later", 500);
  }
});
