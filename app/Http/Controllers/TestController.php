<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ElOrienteHighLightCarousel;
use App\Models\MicrositeSectionArticle;
use Illuminate\Support\Facades\DB;

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
    public $ID_MICROSITE_SECTION_SLUG_11 = 33; //Cultura y Turismo
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

        $articlesSlot1 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_1)
        ->orderBy('date', 'desc')
        ->limit(3)
        ->get();

        $articlesSlot2 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_2)
        ->orderBy('date', 'desc')
        ->limit(3)
        ->get();

        $articlesSlot3 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_3)
        ->orderBy('date', 'desc')
        ->limit(1)
        ->get();

        $articlesSlot4 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_4)
        ->orderBy('date', 'desc')
        ->limit(4)
        ->get();

        $articlesSlot5 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_5)
        ->orderBy('date', 'desc')
        ->limit(4)
        ->get();

        $articlesSlot6 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_6)
        ->orderBy('date', 'desc')
        ->limit(4)
        ->get();

        $articlesSlot7 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_7)
        ->orderBy('date', 'desc')
        ->limit(4)
        ->get();

        $articlesSlot8 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_8)
        ->orderBy('date', 'desc')
        ->limit(1)
        ->get();

        $articlesSlot9 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_9)
        ->orderBy('date', 'desc')
        ->limit(1)
        ->get();

        $articlesSlot10 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_10)
        ->orderBy('date', 'desc')
        ->limit(1)
        ->get();

        $articlesSlot11 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_11)
        ->orderBy('date', 'desc')
        ->limit(2)
        ->get();

        $articlesSlot12 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_12)
        ->orderBy('date', 'desc')
        ->limit(1)
        ->get();

        $articlesSlot13 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_13)
        ->orderBy('date', 'desc')
        ->limit(1)
        ->get();

        $articlesSlot14 =  DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $this->ID_MICROSITE_SECTION_SLUG_14)
        ->orderBy('date', 'desc')
        ->limit(1)
        ->get();

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
