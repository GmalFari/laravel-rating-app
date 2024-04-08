<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

abstract class Controller
{
    //
    public function index(): Response
    {
        return response('Hello , world');
    }
}
