<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ElOrienteHighLightCarousel;
use App\Models\MicrositeSectionArticle;

class TestController extends Controller
{

    public $ID_MICROSITE_SECTION_SLUG_1 = 105; //Caso Chevron
    public $ID_MICROSITE_SECTION_SLUG_2 = 3; //Podcasts
    public $ID_MICROSITE_SECTION_SLUG_3 = 34; //Medio Ambiente
    public $ID_MICROSITE_SECTION_SLUG_4 = 32; //Energia
    public $ID_MICROSITE_SECTION_SLUG_5 = 31; //Politica y Economía
    public $ID_MICROSITE_SECTION_SLUG_6 = 63; //Seguridad y Fronteras
    public $ID_MICROSITE_SECTION_SLUG_7 = 87; //Noticas Nacionales
    public $ID_MICROSITE_SECTION_SLUG_8 = 35; //Pueblos Indigenas
    public $ID_MICROSITE_SECTION_SLUG_9 = 66; //Actualidad
    public $ID_MICROSITE_SECTION_SLUG_10 = 112; //Opinion
    public $ID_MICROSITE_SECTION_SLUG_11 = 66; //Cultura y Turismo
    public $ID_MICROSITE_SECTION_SLUG_12 = 124; //Salud
    public $ID_MICROSITE_SECTION_SLUG_13 = 129; //Internacional
    public $ID_MICROSITE_SECTION_SLUG_14 = 71; //Ciencia y Tecnología

    public function __construct()
    {
       
    }
    

    public function index(){
        $elOrienteHLC = ElOrienteHighLightCarousel::find(1);
        $slides = json_decode($elOrienteHLC->slides);
        array_splice($slides, 8);
        $idsArticles = array_map(function($slide){ return $slide->id; }, $slides);
        $articles = Article::with(['micrositeSection'])->whereIn('id', $idsArticles)->get();

        $articlesSlot1 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_1)->orderBy('date', 'desc')->limit(3)->get(); 
        $articlesSlot1 = $articlesSlot1->map(function($item){ return $item->article; });

        $articlesSlot2 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_2)->orderBy('date', 'desc')->limit(3)->get(); 
        $articlesSlot2 = $articlesSlot2->map(function($item){ return $item->article; });

        $articlesSlot3 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_3)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot3 = $articlesSlot3->map(function($item){ return $item->article; });

        $articlesSlot4 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_4)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot4 = $articlesSlot4->map(function($item){ return $item->article; });

        $articlesSlot5 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_5)->orderBy('date', 'desc')->limit(4)->get(); 
        $articlesSlot5 = $articlesSlot5->map(function($item){ return $item->article; });

        $articlesSlot6 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_6)->orderBy('date', 'desc')->limit(4)->get(); 
        $articlesSlot6 = $articlesSlot6->map(function($item){ return $item->article; });

        $articlesSlot7 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_7)->orderBy('date', 'desc')->limit(4)->get(); 
        $articlesSlot7 = $articlesSlot7->map(function($item){ return $item->article; });

        $articlesSlot8 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_8)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot8 = $articlesSlot8->map(function($item){ return $item->article; });

        $articlesSlot9 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_9)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot9 = $articlesSlot9->map(function($item){ return $item->article; });

        $articlesSlot10 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_10)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot10 = $articlesSlot10->map(function($item){ return $item->article; });

        $articlesSlot11 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_11)->orderBy('date', 'desc')->limit(2)->get(); 
        $articlesSlot11 = $articlesSlot11->map(function($item){ return $item->article; });

        $articlesSlot12 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_12)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot12 = $articlesSlot12->map(function($item){ return $item->article; });

        $articlesSlot13 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_13)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot13 = $articlesSlot13->map(function($item){ return $item->article; });

        $articlesSlot14 = MicrositeSectionArticle::with(['article.micrositeSection'])->where('microsite_section_id', $this->ID_MICROSITE_SECTION_SLUG_14)->orderBy('date', 'desc')->limit(1)->get(); 
        $articlesSlot14 = $articlesSlot14->map(function($item){ return $item->article; });
        // dd($articlesSlot1);

        return view('eloriente.index')->with([
            'articles' => $articles, 
            'articlesSlot1' => $articlesSlot1,
            'articlesSlot2' => $articlesSlot2,
            'articlesSlot3' => $articlesSlot3,
            'articlesSlot4' => $articlesSlot4,
            'articlesSlot5' => $articlesSlot5,
            'articlesSlot6' => $articlesSlot6,
            'articlesSlot7' => $articlesSlot7,
            'articlesSlot8' => $articlesSlot8,
            'articlesSlot9' => $articlesSlot9,
            'articlesSlot10' => $articlesSlot10,
            'articlesSlot11' => $articlesSlot11,
            'articlesSlot12' => $articlesSlot12,
            'articlesSlot13' => $articlesSlot13,
            'articlesSlot14' => $articlesSlot14
        ]);
    }
    

}
