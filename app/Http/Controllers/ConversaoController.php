<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConversaoController extends Controller
{
    // Definindo a constante anos luz em quilometros
    const ANO_LUZ_EM_KM = 9.461e12; // 1 ano-luz = 9.461 trilhões de quilômetros

    // Converter quilômetros para anos-luz
    public function quilometrosParaAnosLuz(Request $request)
    {
        // Validação do input
        $this->validarInput($request->input('quilometros'), 'quilometros');

        $quilometros = $request->input('quilometros');
        $anosLuz = $quilometros / self::ANO_LUZ_EM_KM;

        return response()->json([
            'quilometros' => round($anosLuz, 4)
        ], 200);
    }

    // Converter anos-luz para quilômetros
    public function anosLuzParaQuilometros(Request $request)
    {
        // Validação do input
        $this->validarInput($request->input('anosLuz'), 'anosLuz');

        $anosLuz = $request->input('anosLuz');
        $quilometros = $anosLuz * self::ANO_LUZ_EM_KM;

        return response()->json([
            'anosLuz' => round($quilometros, 4)
        ], 200);
    }

    // Função para validar input de dados
    private function validarInput($valor)
    {
        if (!is_numeric($valor) || $valor <= 0) {
            abort(response()->json([
                'error' => "Parametros invalidos."
            ], 400));
        }
    }
}
