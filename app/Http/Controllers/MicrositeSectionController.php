<?php

namespace App\Http\Controllers;

use App\Models\MicrositeSectionArticle;
use App\Models\MicrositeSection;
use Illuminate\Http\Request;

class MicrositeSectionController extends Controller
{

    public function __construct()
    {
       
    }
    

    public function index($title, Request $request){
        $section = MicrositeSection::where('slug', $title)->first();
        $articles = MicrositeSectionArticle::with(['article'])->where('microsite_section_id', $section->id)->orderBy('date', 'desc')->limit(11)->get(); 
        $articles = $articles->map(function($item){ return $item->article; });
        return view('eloriente.section')->with(['section' => $section, 'articles' => $articles]);
    }
    
    public function getMoreArticles($title, Request $request){
        $itemsPerPage = 8;
        $section = MicrositeSection::where('slug', $title)->first();
        $articles = MicrositeSectionArticle::with(['article'])
        ->where('microsite_section_id', $section->id)->orderBy('date', 'desc')
        ->skip(11+($itemsPerPage*$request->query('p')))->take($itemsPerPage)->get(); 
        $articles = $articles->map(function($item){ return $item->article; });

        return $articles;
    }
}
