<?php

namespace App\Http\Controllers;

use App\Models\MicrositeSectionArticle;
use App\Models\MicrositeSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SectionController extends Controller
{

    public function __construct()
    {
       
    }
    

    public function index($title, Request $request){
        $section = MicrositeSection::where('slug', $title)->first();
        dd($section);
        $articles =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $section->id);

        if($request->query('type') == "videos"){
            $articles = $articles->where('article.video_url', '!=', "")->whereNotNull('article.video_code');
        }

        if($request->query('type') == "imagenes"){
            $articles = $articles->where('article.type', '=', "picture");
        }

        $articles = $articles->orderBy('date', 'desc')
        ->limit(11)
        ->get();

        return view('eloriente.section')->with(['section' => $section, 'articles' => $articles]);
    }
    
    public function getMoreArticles($title, Request $request){
        $itemsPerPage = 8;
        $section = MicrositeSection::where('slug', $title)->first();
        $articles =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $section->id)
        ->orderBy('date', 'desc')
        ->skip(11+($itemsPerPage*$request->query('p')))
        ->take($itemsPerPage)
        ->get();

        return $articles;
    }
}
