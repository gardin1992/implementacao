<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {

    $baseDir = 'uploads';

    $iterator = new \RecursiveDirectoryIterator($baseDir);
    $recursiveIterator = new \RecursiveIteratorIterator($iterator);

    $files = [];

    foreach ( $recursiveIterator as $entry ) {

        if ($entry->getFilename() != "." && $entry->getFilename() != "..") {
            $files[] = [
                'url' => $entry->getPath() . '/' . $entry->getFilename(),
                'name' => $entry->getFilename()
            ];
        }

    }

    return view('index', ['files' => $files]);

});

Route::get('user/{id}', 'UserController@show');

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::resource('photos', 'PhotoController');
