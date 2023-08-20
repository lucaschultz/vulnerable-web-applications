<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  $name = request()->query('name', '');

  $html = "
<!DOCTYPE html>
<html>

<head>
  <title>Example Vulnerable Page</title>
</head>

<body>
  <div id=\"greeting\" style=\"color:green;\">Hello $name!</div>
</body>

</html>
";

  return response($html);
});
