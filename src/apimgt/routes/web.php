<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 登录页面路由
Route::get('/passport/login', 'Passport@login');
Route::post('/passport/doLogin', 'Passport@doLogin');
Route::post('/passport/doLogout', 'Passport@logout');

// 空值面板路由
Route::get('/dashboard/index', 'Dashboard@index');

Route::get('/', function () {return view('welcome');});