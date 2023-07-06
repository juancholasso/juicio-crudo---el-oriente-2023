<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ElOrienteHighLightCarousel;
use App\Models\MicrositeSectionArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{

    public function __construct()
    {
       
    }
    

    public function index($title, $id, Request $request){
        $article = Article::with(['micrositeSection'])->find($id);

        // $articlesRelated = DB::table('article as t')
        // ->leftJoin('article_section as s', 's.article_id', '=', 't.id')
        // ->leftJoin('microsite_section_article as msa', 'msa.article_id', '=', 't.id')
        // ->leftJoin('microsite_section as ms', 'ms.id', '=', 'msa.microsite_section_id')
        // ->leftJoin('microsite m', 'm.id', '=', 'ms.microsite_id')
        // ->where('m.slug', '=', 'el_oriente')
        // ->limit(4)
        // ->get();

        // dd($articlesRelated);

        return view('eloriente.article')->with(['article' => $article]);
    }

}
