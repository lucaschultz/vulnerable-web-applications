<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  $amount = request()->query('amount');
  $amount = eval("return {$amount} * 10;");
  return "Hello {$amount} times!";
});
