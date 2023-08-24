<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'age',
        'num-afi',
        'adress',
        'status'
    ];


    public function patient(){

        //paciente a medico
        //un paciente puede tener muchos turnos

        return $this->belongsTo("App\Models\Patient");

       




    }
}
