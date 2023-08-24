<?php

namespace App\Http\Controllers;
use App\Models\Patient;
use Illuminate\Http\Request;


class PatienteController extends Controller
{
    //

    public function index(){
        $pacientes = Patient::all();
        return $pacientes;
    }

    public function store(Request $request){
        $patientes = Patient::create($request->all());
        return 'se registro'. response()->json($patientes,201);

    }

    public function update(Request $resquest, string $id){
        $pacientes = Patient::findOrFail($id);
        $pacientes->update($resquest->all());
        return response()->json($pacientes,200);
    }





}
