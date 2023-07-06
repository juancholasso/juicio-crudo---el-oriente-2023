<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\MicrositeSectionView;
use App\Models\ElOrienteHighLightCarousel;
use App\Models\MicrositeSectionArticle;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public $ID_MICROSITE_SECTION_SLOT = [];

    public function __construct()
    {
       
    }
    

    public function index(){
        $sectionSlugs = MicrositeSectionView::with(['micrositeSection'])->get();
        foreach($sectionSlugs as $section){
            $this->ID_MICROSITE_SECTION_SLOT[$section->slot_name] = $section->micrositeSection;
        }

        $elOrienteHLC = ElOrienteHighLightCarousel::find(1);
        $slides = json_decode($elOrienteHLC->slides);
        array_splice($slides, 8);
        $slides = array_reverse($slides);
        $idsArticles = array_map(function($slide){ return $slide->id; }, $slides);
        $articles = Article::with(['micrositeSection'])->whereIn('id', $idsArticles)->orderBy('id', 'desc')->get();

        $articlesSlot1 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot1']->id, 3);
        $articlesSlot2 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot2']->id, 3);
        $articlesSlot3 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot3']->id, 1);
        $articlesSlot4 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot4']->id, 4);
        $articlesSlot5 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot5']->id, 4);
        $articlesSlot6 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot6']->id, 4);
        $articlesSlot7 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot7']->id, 4);
        $articlesSlot8 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot8']->id, 1);
        $articlesSlot9 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot9']->id, 1);
        $articlesSlot10 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot10']->id, 1);
        $articlesSlot11 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot11']->id, 2);
        $articlesSlot12 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot12']->id, 1);
        $articlesSlot13 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot13']->id, 1);
        $articlesSlot14 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot14']->id, 1);
        $articlesSlot15 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot15']->id, 4);
        $articlesSlot16 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot16']->id, 4);
        $articlesSlot17 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot17']->id, 4);
        $articlesSlot18 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot18']->id, 4);
        $articlesSlot19 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot19']->id, 4);
        $articlesSlot20 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot20']->id, 4);
        $articlesSlot21 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot21']->id, 4);
        $articlesSlot22 = $this->getArticlesBySection($this->ID_MICROSITE_SECTION_SLOT['slot22']->id, 4);

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
            'articlesSlot14' => $articlesSlot14,
            'articlesSlot15' => $articlesSlot15,
            'articlesSlot16' => $articlesSlot16,
            'articlesSlot17' => $articlesSlot17,
            'articlesSlot18' => $articlesSlot18,
            'articlesSlot19' => $articlesSlot19,
            'articlesSlot20' => $articlesSlot20,
            'articlesSlot21' => $articlesSlot21,
            'articlesSlot22' => $articlesSlot22,
            'slots' => $this->ID_MICROSITE_SECTION_SLOT
        ]);
    }
    

    private function getArticlesBySection($sectionId, $limit){
        return DB::table('microsite_section_article')
        ->leftJoin('article', 'microsite_section_article.article_id', '=', 'article.id')
        ->where('microsite_section_article.microsite_section_id', '=', $sectionId)
        ->orderBy('date', 'desc')
        ->limit($limit)
        ->get();
    }

}
