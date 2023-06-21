<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ElOrienteHighLightCarousel;
use App\Models\MicrositeSectionArticle;

class TestController extends Controller
{
    public function __construct()
    {
       
    }
    

    public function index(){
        $elOrienteHLC = ElOrienteHighLightCarousel::find(1);
        $slides = json_decode($elOrienteHLC->slides);
        array_splice($slides, 8);
        $idsArticles = array_map(function($slide){ return $slide->id; }, $slides);
        $articles = Article::with(['micrositeSection'])->whereIn('id', $idsArticles)->get();

        $articlesSlotOne = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', 105)->orderBy('position', 'desc')->limit(3)->get(); 
        $articlesSlotOne = $articlesSlotOne->map(function($item){ return $item->article; });
        // dd($articlesSlotOne);

        return view('eloriente.index')->with(['articles' => $articles, 'articlesSlotOne' => $articlesSlotOne]);
    }
    

}
