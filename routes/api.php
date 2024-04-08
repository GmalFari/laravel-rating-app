<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RatingController;

use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;

Route::post('/rating', [RatingController::class, 'saveRating'])->name('rating.save');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('posts', PostController::class)->except([
    'create', 'show', 'edit'
]);