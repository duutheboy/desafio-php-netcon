<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConversaoController;

// Rota para converter quilômetros para anos-luz
Route::post('/quilometros', [ConversaoController::class, 'quilometrosParaAnosLuz']);

// Rota para converter anos-luz para quilômetros
Route::post('/anosLuz', [ConversaoController::class, 'anosLuzParaQuilometros']);

