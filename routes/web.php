<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


// Route::get('/{any?}', function () {
//     return view('welcome');
// })->where('any', '.*');

Route::get('/', function() {
  return view('welcome');
});

Route::get('/{vue_capture?}', function() {
  return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');