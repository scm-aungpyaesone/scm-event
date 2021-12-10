<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ResultController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/save-gifts','ResultController@saveGiftResult')->name('save-gifts');
Route::post('/save-nomikai','ResultController@saveNomikaiResult')->name('save-nomikai');
Route::get('/save-zip', 'ResultController@saveZip')->name('save-zip');