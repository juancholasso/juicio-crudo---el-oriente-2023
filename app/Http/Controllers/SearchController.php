<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function __construct()
    {
       
    }
    

    public function index(Request $request){
        $articles = Article::with(['micrositeSection']);

        if($request->query('searchWord')){
            $searchWord = $request->query('searchWord');
            $articles = $articles->where('title', 'like', "%$searchWord%");
        }

        $articles = $articles->orderBy('date', 'desc')->get();

        return view('eloriente.search')->with(['articles' => $articles]);
    }
    
}
