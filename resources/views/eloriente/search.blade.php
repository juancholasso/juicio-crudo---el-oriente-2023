@extends('eloriente.layouts.master')

@section('content')
<div class="section container">
    <div class="row">
        <div class="col-12">

            <div class="row d-flex mb-3" style="align-items:center">
                <div class="col-sm-12 col-lg-auto p-3 border-right">
                    <h1
                        style="font-size: 1.6em; font-family: 'Roboto Slab', serif; font-weight: 400; line-height: 1.4em;">
                        <!-- NOMBRE DE SECCION -->
                        Cultura y Turismo
                    </h1>
                </div>
                <div class="col-sm-12 col-lg p-3">
                    <h2 class="">
                        <!-- DESCRIPCION DE SECCION / AGREGAR COMO NUEVO CAMPO EN ADMIN -->
                        Noticias de actualidad de los principales destinos turísticos y vías en las 6 provincias
                        orientales.
                    </h2>
                </div>
            </div>

        </div>

        <div class="ft-cards">
            <div class="col-12">
                <div class="row section">

                    @foreach($articles as $article)
                    <!-- COLUMNA ITEM-NOTICIA -->
                    <div class="col-sm-3 item-noticias item article mb-4">
                        <a target="_top" href="/articulo/{{urlencode($article->title_seo)}}/{{$article->article_id}}" title="{{$article->title_seo}}">
                            <div class="ft-item section_item article">
                                <div class="img_holder">
                                    <img src="https://www.juiciocrudo.com/pics/nocrop/440x220/{{$article->cover_image}}" alt="{{$article->title_seo}}" title="{{$article->title_seo}}" class="coverimage" style="width:100%; margin-bottom:20px ">
                                </div>
                                <div class="txt_holder">
                                    <p class="date">
                                        <span>{{date('d/m/Y', strtotime($article->date))}}</span>
                                        <span class="source">EFE</span>
                                    </p>
                                    <h4 class="text-shadow">{{$article->title_seo}}</h4>
                                    <p class="intro">{{$article->description_seo}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
