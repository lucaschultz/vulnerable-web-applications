<?php

use Illuminate\Support\Facades\Route;

class ValidationError extends Exception
{
  public function __construct($message)
  {
    parent::__construct($message);
  }
}

function validateUser($value)
{
  if (
    !is_array($value) ||
    $value === null ||
    !isset($value['name']) ||
    !is_string($value['name']) ||
    strlen($value['name']) === 0
  ) {
    throw new ValidationError('Invalid User: ' . json_encode($value));
  }

  return ['name' => $value['name']];
}

function validateUserArray($value)
{
  if (!is_array($value)) {
    throw new ValidationError('Expected user array received ' . json_encode($value));
  }

  return array_map('validateUser', $value);
}

function work($user)
{
  usleep(100000);
  return $user['name'];
}

Route::post('/', function () {
  try {
    $users = validateUserArray(request()->json()->all());
    $names = [];

    foreach ($users as $user) {
      $names[] = work($user);
    }

    return implode(', ', $names);
  } catch (Exception $e) {
    if ($e instanceof ValidationError) {
      return response($e->getMessage(), 400);
    } else {
      return response('An unexpected error occurred', 500);
    }
  }
});
