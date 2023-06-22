<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ElOrienteHighLightCarousel;
use App\Models\MicrositeSectionArticle;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function __construct()
    {
       
    }
    

    public function index($title, $id, Request $request){
        $article = Article::find($id);
        // $articlesRelated = Article::where()
        // dd($article);
        return view('eloriente.article')->with(['article' => $article]);
    }

}
