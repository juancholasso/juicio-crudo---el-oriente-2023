<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/','TestController@index');
Route::get('/articulo/{title}/{id}','ArticleController@index');
Route::get('/section/{title}','MicrositeSectionController@index');
Route::get('/section/{title}/more','MicrositeSectionController@getMoreArticles');

