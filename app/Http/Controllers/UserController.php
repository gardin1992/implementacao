<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
     /**
     * Show a list of all of the application's users.
     *
     * @return Response
     */
    public function index()
    {
        $users = DB::select('select * from users where active = ?', [1]);

        return view('user.index', ['users' => $users]);
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //$results = DB::select('select * from users where id = :id', ['id' => 1]);
        return view('user.profile', ['user' => User::findOrFail($id)]);
    }

    public function insert()
    {
        DB::insert('insert into users (id, name) values (?, ?)', [1, 'Dayle']);
    }
}