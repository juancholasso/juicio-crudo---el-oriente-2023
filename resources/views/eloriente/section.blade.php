@extends('eloriente.layouts.master')

@section('content')
<div class="section container">
    <div class="row">
        <div class="col-12">
            <div class="row d-flex mb-3" style="align-items:center">
                <div class="col-sm-12 col-lg-auto p-3 border-right">
                    <h1 style="font-size: 1.6em; font-family: 'Roboto Slab', serif; font-weight: 400; line-height: 1.4em;">
                    <!-- NOMBRE DE SECCION -->    
                    {{$section->name}}
                    </h1>
                </div>
                <div class="col-sm-12 col-lg p-3">
                    <h2 class="">
                        <!-- DESCRIPCION DE SECCION / AGREGAR COMO NUEVO CAMPO EN ADMIN -->    
                        Noticias de actualidad de los principales destinos turísticos y vías en las 6 provincias orientales.
                    </h2>
                </div>
            </div>
        </div>

        @if(str_contains(url()->current(), "multimedia"))
        <div class="row p-4">
            <div style="display:table; margin:auto; width:100%; max-width:240px">
                <form id="multimedia_f" action="/section/multimedia?type=videos" method="GET">
                  <select id="s_type" onchange="$('#multimedia_f').submit();" name="type" class="form-control">
                    <option selected="selected" value="">Todos</option>
                    <option value="videos">Videos</option>
                    <option value="imagenes">Imagénes</option>
                  </select>
                </form>
            </div>
        </div>
        @endif

        <div class="ft-cards">
            <div class="col-12">
                <div class="row section section_listing">
                                                                                                    
                    <!-- PRIMER ITEM -->
                    <div class="col-sm-6 item-noticias item article mb-4">
                        <a target="_top" href="/articulo/{{urlencode($articles[0]->title_seo)}}/{{$articles[0]->article_id}}" title="{{$articles[0]->title_seo}}">
                            <div class="ft-item section_item article" style="background-image:url(https://www.juiciocrudo.com/pics/nocrop/800x440/{{$articles[0]->cover_image}}); background-size:cover">
                                <div class="txt_holder">
                                    <p class="date">
                                        <span>{{date('d/m/Y', strtotime($articles[0]->date))}}</span>
                                        <span class="source">El Oriente</span>
                                    </p>
                                    <h4 class="text-shadow">{{$articles[0]->title_seo}}</h4>
                                    <p class="intro">{{$articles[0]->description_seo}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                                            
                    @for($i = 1; $i<11; $i++)
                    <!-- COLUMNA ITEM-NOTICIA -->
                    <div class="col-sm-3 item-noticias item article mb-4">
                        <a target="_top" href="/articulo/{{urlencode($articles[$i]->title_seo)}}/{{$articles[$i]->article_id}}" title="{{$articles[$i]->title_seo}}">
			                <div class="ft-item section_item article">
                                <div class="img_holder">
                                    <img src="https://www.juiciocrudo.com/pics/nocrop/440x220/{{$articles[$i]->cover_image}}" alt="{{$articles[$i]->title_seo}}" title="{{$articles[$i]->title_seo}}" class="coverimage" style="width:100%; margin-bottom:20px ">
                                </div>
                                <div class="txt_holder">
                                    <p class="date">
                                        <span>{{date('d/m/Y', strtotime($articles[$i]->date))}}</span>
                                        <span class="source">EFE</span>
                                    </p>
                                    <h4 class="text-shadow">{{$articles[$i]->title_seo}}</h4>
                                    <p class="intro">{{$articles[$i]->description_seo}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    @endfor                                                                       
        
                </div>
        </div>
    </div>
    
    <a id="bt_more_news" onclick="loadMoreArticles('{{$section->slug}}')" class="vermas" style="cursor:pointer">mostrar más</a>

</div>
@endsection

@section("script")
    <script>
        var articlesPage = 0;
        function loadMoreArticles(section){
            var settings = {
                "url": `/section/${section}/more?p=${articlesPage}`,
                "method": "GET",
            };

            $.ajax(settings).done(function (articles) {
                for(let article of articles){
                    $('.section_listing').append(`
                        <div class="col-sm-3 item-noticias item article mb-4">
                            <a target="_top" href="/articulo/${encodeURIComponent(article.title_seo)}/${article.article_id}" title="${article.title_seo}">
                                <div class="ft-item section_item article">
                                    <div class="img_holder">
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/440x220/${article.cover_image}" alt="${article.title_seo}" title="${article.title_seo}" class="coverimage" style="width:100%; margin-bottom:20px ">
                                    </div>
                                    <div class="txt_holder">
                                        <p class="date">
                                            <span>${article.date}</span>
                                            <span class="source">EFE</span>
                                        </p>
                                        <h4 class="text-shadow">${article.title_seo}</h4>
                                        <p class="intro">${article.description_seo}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `)
                }
                articlesPage++;
            });
        }
    </script>
@endsection
