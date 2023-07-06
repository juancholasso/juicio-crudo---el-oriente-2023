@extends('eloriente.layouts.master')

@section('content')
    <div class="container">

        <div class="destacados row border-bottom pb-4 pt-2">

            <!--DESTACADO 1-->
            <div class="col-lg-6 item-noticias item article mb-5 mb-lg-0 border-right">
                <a target="_top"
                    href="{{$articles[0]->url_generated}}">
                    <div class="ft-item" data-wow-duration="1s">
                        <div class="img_holder">
                            <span class="tag {{$articles[0]->micrositeSection[1]?->slug}} mt-3 ml-3 position-absolute">{{$articles[0]->micrositeSection[1]?->name}}</span>
                            <!-- BTN PLAY SI ARTICULO TIENE VIDEO -->
                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/829x465/{{$articles[0]->cover_image}}"
                                alt="El secretario general de la organización, Haitham Al Ghais, se reunió con Fernando Santos, ministro de Energía y Mina / Foto: EFE"
                                width="540" height="303"
                                title="El secretario general de la organización, Haitham Al Ghais, se reunió con Fernando Santos, ministro de Energía y Mina / Foto: EFE"
                                class="coverimage lazyloaded"
                                src="https://www.juiciocrudo.com/pics/nocrop/829x465/{{$articles[0]->cover_image}}">
                        </div>
                        <p class="date d-none"><span>{{date('d/m/Y', strtotime($articles[0]->date))}}</span></p>
                        <h1 style="font-size:32px">{{$articles[0]->title_seo}}</h1>
                    </div>
                </a>
            </div>

            <!-- DESTACADO 2 -->
            <div
                class="col-sm-5 col-lg-3 ft-cards item-noticias item destacados_right article pb-4 mb-4 pb-sm-0 mb-sm-0 border-bottom border-bottom-sm-none border-right">
                <a target="_top"
                    href="{{$articles[1]->url_generated}}">
                    <div class="ft-item">
                        <div class="img_holder">
                            <!-- CATEGORIA DE ARTICULO / SIMPLE -->
                            <span class="tag {{$articles[1]->micrositeSection[1]?->slug}} mt-3 ml-3 position-absolute">{{$articles[1]->micrositeSection[1]?->name}}</span>
                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articles[1]->cover_image}}"
                                alt="Subrayó que los términos y plazos presidenciales deben cumplirse sin presiones ni amenazas / Foto: cortesía Presidencia "
                                width="540" height="303"
                                title="Subrayó que los términos y plazos presidenciales deben cumplirse sin presiones ni amenazas / Foto: cortesía Presidencia "
                                class="coverimage lazyloaded"
                                src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articles[1]->cover_image}}">
                        </div>
                        <p class="date d-none"><span>{{date('d/m/Y', strtotime($articles[1]->date))}}</span></p>
                        <h4 class="larger">{{$articles[1]->title_seo}}</h4>
                        <p>{{$articles[1]->description_seo}}</p>
                    </div>
                </a>
            </div>

            <div class="col-sm-7 col-lg-3">
                <div class="row">
                    <!-- DESTACADO 3 -->
                    <div class="ft-cards item-noticias item article pb-3 mb-3 border-bottom">
                        <div class="mb-2">
                            <!-- CATEGORIA DE ARTICULO / SIMPLE -->
                            <span class="square {{$articles[2]->micrositeSection[1]?->slug}}"></span>
                            <a class="section_link" href="/section/{{$articles[2]->micrositeSection[1]?->slug}}"
                                title="Medio Ambiente - El Oriente, Ecuador">
                                {{$articles[2]->micrositeSection[1]?->name}}
                            </a>
                        </div>
                        <a target="_top"
                            href="{{$articles[2]->url_generated}}"
                            style="display:table; border-bottom:1px solid #d5d5d5" class="mb-3 pb-3">
                            <div class="ft-item" style="min-height: initial;">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4>{{$articles[2]->title_seo}}</h4>
                                    </div>
                                    <div class="col-8 col-sm-9 col-lg-8">
                                        <p>{{$articles[2]->description_seo}}</p>
                                    </div>
                                    <div class="col-4 col-sm-3 col-lg-4">
                                        <div class="img_holder">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/100x100/{{$articles[2]->cover_image}}"
                                                alt="{{$articles[2]->description_seo}}
                                                width="540" height="303"
                                                title="{{$articles[2]->description_seo}}"
                                                class="coverimage lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/100x100/{{$articles[2]->cover_image}}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <!-- DESTACADO 4 -->
                    <div class="ft-cards item-noticias item article">
                        <div class="mb-2">
                            <!-- CATEGORIA DE ARTICULO / SIMPLE -->
                            <span class="square {{$articles[3]->micrositeSection[1]?->slug}}"></span>
                            <a class="section_link" href="/section/{{$articles[3]->micrositeSection[1]?->slug}}"
                                title="Medio Ambiente - El Oriente, Ecuador">
                                {{$articles[3]->micrositeSection[1]?->name}}
                            </a>
                        </div>
                        <a target="_top"
                            href="{{$articles[3]->url_generated}}"
                            style="display:table; border-bottom:1px solid #d5d5d5" class="mb-3 pb-3">
                            <div class="ft-item" style="min-height: initial;">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4>{{$articles[3]->title_seo}}</h4>
                                    </div>
                                    <div class="col-8 col-sm-9 col-lg-8">
                                        <p>{{$articles[3]->description_seo}}</p>
                                    </div>
                                    <div class="col-4 col-sm-3 col-lg-4">
                                        <div class="img_holder">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/100x100/{{$articles[3]->cover_image}}"
                                                alt="{{$articles[3]->description_seo}}"
                                                width="540" height="303"
                                                title="{{$articles[3]->description_seo}}"
                                                class="coverimage lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/100x100/{{$articles[3]->cover_image}}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- DESTACADOS 4 -->
        </div>
        <!--/ Destacados Principales -->

        <!-- DESTACADOS 5-8 -->
        <div class="row border-bottom pt-3 pb-4 mb-4 ft-cards item bg-light">
            @for ($i = 4; $i<8; $i++)
            <!-- ITEM -->
            <div class="col-md-6 col-lg-3 mb-3 mb-lg-0 item-noticias article">
                <a target="_top"
                    href="{{$articles[$i]->url_generated}}">
                    <div class="ft-item" style="min-height:initial">
                        <div class="row">
                            <div class="img_holder col-4 pl-0">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/{{$articles[$i]->cover_image}}"
                                    alt="" width="120" height="100" title=""
                                    class="coverimage lazyloaded m-0"
                                    src="https://www.juiciocrudo.com/pics/nocrop/120x100/{{$articles[$i]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <div class="col-8 pl-0">
                                <h4 class="m-0" style="font-size:1em">{{$articles[$i]->title_seo}}
                                </h4>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <!-- END ITEM -->
            @endfor
    
        </div> <!-- / DESTACADOS 5-8 -->

        <div class="row border_bottom">

            <!-- BLOQUE 1 -->
            <div class="col-md-8 ft-cards">
                <div class="mb-3">
                    <span class="square {{$slots['slot1']->slug}}"></span>
                    <a class="section_link" href="/section/{{$slots['slot1']->slug}}"
                        title="{{$slots['slot1']->name}}">
                        {{$slots['slot1']->name}}
                    </a>
                </div>
                <div class="row">
                    @foreach($articlesSlot1 as $article)
                    <div class="col-md-4 item-noticias item article">
                        <a target="_top"
                            href="/articulo/{{urlencode($article->title_seo)}}/{{$article->article_id}}">
                            <div class="ft-item" data-wow-duration="1s">
                                <div class="img_holder">
                                    <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$article->cover_image}}"
                                        alt="{{$article->description_seo}}"
                                        width="540" height="303"
                                        title="{{$article->description_seo}}"
                                        class="coverimage lazyloaded"
                                        src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$article->cover_image}}">
                                </div> <!-- /img_holder -->
                                <p class="date"><span>{{date('d/m/Y', strtotime($article->date))}}</span></p>
                                <h4 style="font-size:1.4em">{{$article->title_seo}}
                                </h4>
                            </div>
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
            <!-- / BLOQUE 1 -->

            <!-- BLOQUE 2 -->
            <div class="col-md-4 ft-cards">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="mb-3">
                            <span class="square {{$slots['slot2']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot2']->slug}}"
                                title="{{$slots['slot2']->name}}"> {{$slots['slot2']->name}}</a>
                        </div>
                    </div>
                    <div class="item_listing">
                        @foreach($articlesSlot2 as $article)
                        <div class="row item-noticias mb-3 item article">
                            <a target="_top"
                                href="/articulo/{{urlencode($article->title_seo)}}/{{$article->article_id}}">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/{{$article->cover_image}}"
                                                alt="" width="120" height="100" title=""
                                                class="coverimage ls-is-cached lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/{{$article->cover_image}}">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date mt-0"><span>{{date('d/m/Y', strtotime($article->date))}}</span></p>
                                            <h4 style="font-size:1em">{{$article->title_seo}}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div><!-- / BLOQUE 2 -->

        </div>

        <!-- PROVINCIAS -->

        <div class="col-sm-12 ft-cards bg-light mb-4 pt-5 pl-4 pr-4 pb-4"
            style="border-top: 2px solid #7eb326;border-radius: 8px;">
            <div class="row">

                <div class="col-sm-3 text-center">
                    <img src="/eloriente/images/provincias/provincias-del-oriente.svg" class="mb-4"
                        style="width:65%; max-width:250px">
                    <img src="/images/mapa_provincias.png" class="w-100">
                </div>
                <div class="col-sm-9">
                    <div class="row banners_provincias">
                        <div class="col-md-4 mb-3">
                            <a href="/section/provincia-de-sucumbios">
                                <div class="banner_provincia sucumbios">
                                    <div class="nro">1</div>
                                    <p class="headline2 shade pb-3">Sucumbíos</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="/section/provincia-de-napo">
                                <div class="banner_provincia napo">
                                    <div class="nro">2</div>
                                    <p class="headline2 shade pb-3">Napo</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="/section/provincia-de-orellana">
                                <div class="banner_provincia orellana">
                                    <div class="nro">3</div>
                                    <p class="headline2 shade pb-3">Orellana</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="/section/provincia-de-pastaza">
                                <div class="banner_provincia pastaza">
                                    <div class="nro">4</div>
                                    <p class="headline2 shade pb-3">Pastaza</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="/section/provincia-de-morona-santiago">
                                <div class="banner_provincia morona-santiago">
                                    <div class="nro">5</div>
                                    <p class="headline2 shade pb-3">Morona Santiago</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="/section/provincia-de-zamora-chinchipe">
                                <div class="banner_provincia zamora-chinchipe">
                                    <div class="nro">6</div>
                                    <p class="headline2 shade pb-3">Zamora Chinchipe</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div> <!-- /PROVINCIAS -->


        <!-- BLOQUE 3-4-5 -->
        <div class="col-sm-12">
            <div class="row ft-cards border_bottom">

                <!-- BLOQUE 3 -->
                <div class="col-sm-6 col-md-4 item-noticias item article border-right mb-5 mb-0">
                    <div class="mb-3">
                        <span class="square {{$slots['slot3']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot3']->slug}}"
                            title="{{$slots['slot3']->name}}">{{$slots['slot3']->name}}</a>
                    </div>
                    <a target="_top"
                        href="/articulo/{{urlencode($articlesSlot3[0]->title_seo)}}/{{$articlesSlot3[0]->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot3[0]->cover_image}}"
                                    alt="{{$articlesSlot3[0]->description_seo}}"
                                    width="540" height="303"
                                    title="{{$articlesSlot3[0]->description_seo}}"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot3[0]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot3[0]->date))}}</span></p>
                            <h4 style="font-size:1.6em">{{$articlesSlot3[0]->title_seo}}</h4>
                            <p class="intro">{{$articlesSlot3[0]->description_seo}}</p>
                        </div>
                    </a>
                </div><!-- /BLOQUE 3 -->

                <!-- BLOQUE 4 -->
                <div class="col-sm-6 col-md-4 item-noticias item article border-right mb-5 mb-0">
                    <div class="mb-3">
                        <span class="square {{$slots['slot4']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot4']->slug}}"
                            title="{{$slots['slot4']->name}}">{{$slots['slot4']->name}}</a>
                    </div>
                    <a target="_top" href="/articulo/{{urlencode($articlesSlot4[0]->title_seo)}}/{{$articlesSlot4[0]->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot4[0]->cover_image}}"
                                    alt="{{$articlesSlot4[0]->description_seo}}"
                                    width="540" height="303"
                                    title="{{$articlesSlot4[0]->description_seo}}"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot4[0]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot4[0]->date))}}</span></p>
                            <h4 style="font-size:1.6em">{{$articlesSlot4[0]->title_seo}}</h4>
                            <p class="intro">{{$articlesSlot4[0]->description_seo}}</p>
                        </div>
                    </a>
                </div><!-- /BLOQUE 4 -->

                <!-- BLOQUE 5 -->
                <div class="col-md-4 item">
                    <div class="item_listing">
                        <div class="mb-3">
                            <span class="square {{$slots['slot5']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot5']->slug}}"
                                title="{{$slots['slot5']->name}}">{{$slots['slot5']->name}}</a>
                        </div>
                        @foreach($articlesSlot5 as $article)
                        <div class="col-sm-12 item-noticias article">
                            <a target="_top"
                                href="/articulo/{{urlencode($article->title_seo)}}/{{$article->article_id}}">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/{{$article->cover_image}}"
                                                alt="{{$article->description_seo}}"
                                                width="120" height="100"
                                                title="{{$article->description_seo}}"
                                                class="coverimage lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/{{$article->cover_image}}">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date" style="margin-top:0"><span>{{date('d/m/Y', strtotime($article->date))}}</span></p>
                                            <h4 style="font-size:1em">{{$article->title_seo}}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div><!-- / BLOQUE 5 -->

            </div>
        </div>

        <!-- BLOQUE 6 -->
        <div class="col-sm-12 ft-cards border_bottomx mb-4">
            <div class="mb-3">
                <span class="square {{$slots['slot6']->slug}}"></span>
                <a class="section_link" href="/section/{{$slots['slot6']->slug}}"
                    title="{{$slots['slot6']->name}}">{{$slots['slot6']->name}}</a>
            </div>
            <div class="row">
                @foreach($articlesSlot6 as $article)
                <!-- ITEM -->
                <div class="col-sm-6 col-md-3 item-noticias item article">
                    <a target="_top"
                        href="/articulo/{{urlencode($article->title_seo)}}/{{$article->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$article->cover_image}}"
                                    alt="{{$article->description_seo}}"
                                    width="540" height="303"
                                    title="{{$article->description_seo}}"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$article->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($article->date))}}</span></p>
                            <h4>{{$article->title_seo}}</h4>
                            <p class="intro">{{$article->description_seo}}</p>
                        </div>
                    </a>
                </div>
                @endforeach
            </div>
        </div><!-- / BLOQUE 6 -->

        <!-- HISTORIAS -->
        <div class="row d-none">
            <div class="col-sm-12">
                <div style="border-top:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;margin-bottom: 30px;">
                    <div class="headline3"
                        style="margin: -12px auto 25px auto; display: table;background: #fff;line-height: 1em;padding: 0 15px;">
                        <a href="https://www.eloriente.com/page/historias">El Oriente / Historias</a>
                    </div>
                    <div id="carusel_historias" class="owl-carousel historias bg-light pt-3 owl-theme owl-loaded">

                        <div class="owl-stage-outer">
                            <div class="owl-stage"
                                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2328.34px;">
                                <div class="owl-item active" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/hoteles-amazonia/index.html"
                                            target="_blank">
                                            <div class="rounded-circle"><img
                                                    src="/historias/hoteles-amazonia/img/carusel.jpg" style="width:100%">
                                            </div>
                                            <p>Hoteles de Lujo en la Amazonia Ecuatoriana</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/sentencia-chevron/index.html"
                                            target="_blank">
                                            <div class="rounded-circle"><img
                                                    src="/historias/sentencia-chevron/img/carusel.jpg" style="width:100%">
                                            </div>
                                            <p>¿Por qué es fraudulenta la sentencia contra Chevron en Ecuador?</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/cueva-de-los-tayos/index.html"
                                            target="_blank">
                                            <div class="rounded-circle"><img
                                                    src="/historias/cueva-de-los-tayos/img/carusel.jpg"
                                                    style="width:100%"></div>
                                            <p>Cueva de los Tayos</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/naturaleza-y-diversidad-cultural/index.html"
                                            target="_blank">
                                            <div class="rounded-circle"><img
                                                    src="/historias/naturaleza-y-diversidad-cultural/img/carusel.jpg"
                                                    style="width:100%"></div>
                                            <p>Naturaleza y Diversidad Cultural</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/volcan-sangay/index.html"
                                            target="_blank" title="Volcán Sangay en Erupción">
                                            <div class="rounded-circle"><img
                                                    src="/historias/volcan-sangay/img/carusel.jpg" style="width:100%">
                                            </div>
                                            <p>Volcán Sangay</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/caso-chevron-ecuador/index.html"
                                            target="_blank" title="Chevron en Ecuador">
                                            <div class="rounded-circle"><img
                                                    src="/historias/caso-chevron-ecuador/img/carusel.jpg"
                                                    style="width:100%"></div>
                                            <p>Juicio Contra Chevron en Ecuador</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/covid-19/index.html" target="_blank">
                                            <div class="rounded-circle"><img src="/historias/covid-19/img/carusel.jpg"
                                                    style="width:100%"></div>
                                            <p>Coronavirus en la Amazonía ecuatoriana</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/reserva-cuyabeno/index.html"
                                            target="_blank" title="Reserva Cuyabeno, Ecuador">
                                            <div class="rounded-circle"><img
                                                    src="/historias/reserva-cuyabeno/img/carusel.jpg" style="width:100%">
                                            </div>
                                            <p>Reserva Cuyabeno</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/texaco-un-gran-socio-para-ecuador/index.html"
                                            target="_blank" title="Texaco en Ecuador">
                                            <div class="rounded-circle"><img
                                                    src="/historias/texaco-un-gran-socio-para-ecuador/img/carusel.jpg"
                                                    style="width:100%"></div>
                                            <p>Texaco en Ecuador</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/yasuni-joya-de-la-biodiversidad/index.html"
                                            target="_blank" title="Reserva Yasuní">
                                            <div class="rounded-circle"><img
                                                    src="/historias/yasuni-joya-de-la-biodiversidad/img/carusel.jpg"
                                                    style="width:100%"></div>
                                            <p>Yasuní, la joya de la biodiversidad</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 211.667px; margin-right: 0px;">
                                    <div class="item">
                                        <a href="https://www.eloriente.com/historias/tradiciones-kichwas-en-tamia-yura-ecuador/index.html"
                                            target="_blank">
                                            <div class="rounded-circle"><img
                                                    src="/historias/tradiciones-kichwas-en-tamia-yura-ecuador/img/carusel.jpg"
                                                    style="width:100%"></div>
                                            <p>Tradiciones Kichwas</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="owl-controls">
                            <div class="owl-nav">
                                <div class="owl-prev" style="">prev</div>
                                <div class="owl-next" style="">next</div>
                            </div>
                            <div class="owl-dots" style="">
                                <div class="owl-dot active"><span></span></div>
                                <div class="owl-dot"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- BLOQUE 7-8 -->
        <div class="col-sm-12 border_bottom ft-cards">
            <div class="row">

                <!-- BLOQUE 7 -->
                <div class="col-lg-8 border-right">
                    <div class="row">
                        <div class="col-sm-12 mb-3">
                            <span class="square {{$slots['slot7']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot7']->slug}}"
                                title="N{{$slots['slot7']->name}}">{{$slots['slot7']->name}}</a>
                        </div>
                        @foreach($articlesSlot7 as $article)
                        <div class="col-sm-6 col-lg-3 item-noticias item article">
                            <a class="ft-item" target="_top"
                                href="/articulo/{{urlencode($article->title_seo)}}/{{$article->article_id}}">
                                <div class="img_holder">
                                    <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$article->cover_image}}"
                                        alt="{{$article->description_seo}}"
                                        width="540" height="303"
                                        title="{{$article->description_seo}}"
                                        class="coverimage ls-is-cached lazyloaded"
                                        src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$article->cover_image}}">
                                </div> <!-- /img_holder -->
                                <p class="date"><span>{{date('d/m/Y', strtotime($article->date))}}</span></p>
                                <h4>{{$article->title_seo}}</h4>
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div><!-- / BLOQUE 7 -->

                <!-- BLOQUE 8 -->
                <div class="col-lg-4">
                    <div class="mb-3">
                        <span class="square {{$slots['slot8']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot8']->slug}}"
                            title="{{$slots['slot8']->name}}">{{$slots['slot8']->name}}</a>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 item-noticias item article">
                            <a target="_top"
                                href="/articulo/{{urlencode($articlesSlot8[0]->title_seo)}}/{{$articlesSlot8[0]->article_id}}">
                                <div class="ft-item">
                                    <div class="img_holder">
                                        <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot8[0]->cover_image}}"
                                            alt="{{$articlesSlot8[0]->description_seo}}"
                                            width="540" height="303"
                                            title="{{$articlesSlot8[0]->description_seo}}"
                                            class="coverimage lazyloaded"
                                            src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot8[0]->cover_image}}">
                                    </div> <!-- /img_holder -->
                                    <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot8[0]->date))}}</span></p>
                                    <h4>{{$articlesSlot8[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> <!-- / BLOQUE 8 -->

            </div> <!-- /.row -->
        </div>

        <div class="col-sm-12 ft-cards border_bottom">
            <div class="row">

                <!-- BLOQUE 9 -->
                <div class="col-md-3 item-noticias item article border-right">
                    <div class="mb-3">
                        <span class="square {{$slots['slot9']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot9']->slug}}"
                            title="{{$slots['slot9']->name}}">{{$slots['slot9']->name}}</a>
                    </div>
                    <a target="_top"
                        href="/articulo/{{urlencode($articlesSlot9[0]->title_seo)}}/{{$articlesSlot9[0]->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articlesSlot9[0]->cover_image}}"
                                    alt="{{$articlesSlot9[0]->description_seo}}"
                                    width="540" height="303"
                                    title="{{$articlesSlot9[0]->description_seo}}"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articlesSlot9[0]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot9[0]->date))}}</span></p>
                            <h4>{{$articlesSlot9[0]->title_seo}}</h4>
                        </div>
                    </a>
                </div> <!-- / BLOQUE 9 -->

                <!-- BLOQUE 10 -->
                <div class="col-md-3 item-noticias item article border-right">
                    <div class="mb-3">
                        <span class="square {{$slots['slot10']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot10']->slug}}"
                            title="{{$slots['slot10']->name}}">{{$slots['slot10']->name}}</a>
                    </div>
                    <a target="_top"
                        href="/articulo/{{urlencode($articlesSlot10[0]->title_seo)}}/{{$articlesSlot10[0]->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articlesSlot10[0]->cover_image}}"
                                    alt="{{$articlesSlot10[0]->description_seo}}"
                                    width="540" height="303"
                                    title="{{$articlesSlot10[0]->description_seo}}"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articlesSlot10[0]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot10[0]->date))}}</span></p>
                            <h4>{{$articlesSlot10[0]->title_seo}}</h4>
                        </div>
                    </a>
                </div> <!-- / BLOQUE 10 -->

                <!-- BLOQUE 11 -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <span class="square {{$slots['slot11']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot11']->slug}}"
                            title="{{$slots['slot11']->name}}">{{$slots['slot11']->name}}</a>
                    </div>
                    <div class="row">
                        @foreach($articlesSlot11 as $article)
                        <div class="col-sm-6 item-noticias item article">
                            <a target="_top"
                            href="/articulo/{{urlencode($article->title_seo)}}/{{$article->article_id}}">
                                <div class="ft-item">
                                    <div class="img_holder">
                                        <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$article->cover_image}}"
                                            alt="{{$article->description_seo}}"
                                            width="540" height="303"
                                            title="{{$article->description_seo}}"
                                            class="coverimage lazyloaded"
                                            src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$article->cover_image}}">
                                    </div> <!-- /img_holder -->
                                    <p class="date"><span>{{date('d/m/Y', strtotime($article->date))}}</span></p>
                                    <h4>{{$article->title_seo}}</h4>
                                </div>
                            </a>
                        </div> <!-- /item -->
                        @endforeach
                    </div>
                </div> <!-- / BLOQUE 11 -->

            </div> <!-- /.row -->
        </div>

        <div class="col-sm-12 border_bottom">
            <div class="row">

                <!-- BLOQUE 12 -->
                <div class="col-sm-4 item-noticias item article border-right">
                    <div class="mb-3">
                        <span class="square {{$slots['slot12']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot12']->slug}}"
                            title="{{$slots['slot12']->name}}">
                            {{$slots['slot12']->name}}
                        </a>
                    </div>
                    <a target="_top"
                        href="/articulo/{{urlencode($articlesSlot12[0]->title_seo)}}/{{$articlesSlot12[0]->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot12[0]->cover_image}}"
                                    alt="{{$articlesSlot12[0]->description_seo}}"
                                    width="540" height="303"
                                    title="{{$articlesSlot12[0]->description_seo}}"
                                    class="coverimage ls-is-cached lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot12[0]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot12[0]->date))}}</span></p>
                            <h4 style="font-size:1.6em">{{$articlesSlot12[0]->title_seo}}</h4>
                            <p class="intro">{{$articlesSlot12[0]->description_seo}}</p>
                        </div>
                    </a>
                </div>
                <!-- / BLOQUE 12 -->

                <!-- BLOQUE 13 -->
                <div class="col-sm-4 item-noticias item article" style="border-right:1px solid #d5d5d5">
                    <div class="mb-3">
                        <span class="square {{$slots['slot13']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot13']->slug}}"
                            title="{{$slots['slot13']->name}}">{{$slots['slot13']->name}}</a>
                    </div>
                    <a target="_top"
                        href="/articulo/{{urlencode($articlesSlot13[0]->title_seo)}}/{{$articlesSlot13[0]->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot13[0]->cover_image}}"
                                    alt="{{$articlesSlot13[0]->description_seo}}"
                                    width="540" height="303"
                                    title="{{$articlesSlot13[0]->description_seo}}"
                                    class="coverimage ls-is-cached lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot13[0]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot13[0]->date))}}</span></p>
                            <h4 style="font-size:1.6em">{{$articlesSlot13[0]->title_seo}}</h4>
                            <p class="intro">{{$articlesSlot13[0]->description_seo}}</p>
                        </div>
                    </a>
                </div>
                <!-- / BLOQUE 13 -->

                <!-- BLOQUE 14 -->
                <div class="col-sm-4 item-noticias item article">
                    <div class="mb-3">
                        <span class="square {{$slots['slot14']->slug}}"></span>
                        <a class="section_link" href="/section/{{$slots['slot14']->slug}}"
                            title="{{$slots['slot14']->name}}">
                            {{$slots['slot14']->name}}
                        </a>
                    </div>
                    <a target="_top"
                        href="/articulo/{{urlencode($articlesSlot14[0]->title_seo)}}/{{$articlesSlot14[0]->article_id}}">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot14[0]->cover_image}}"
                                    alt="{{$articlesSlot14[0]->description_seo}}"
                                    width="540" height="303"
                                    title="{{$articlesSlot14[0]->description_seo}}"
                                    class="coverimage ls-is-cached lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot14[0]->cover_image}}">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>{{date('d/m/Y', strtotime($articlesSlot14[0]->date))}}</span></p>
                            <h4 style="font-size:1.6em">{{$articlesSlot14[0]->title_seo}}</h4>
                            <p class="intro">{{$articlesSlot14[0]->description_seo}}</p>
                        </div>
                    </a>
                </div>
                <!-- / BLOQUE 14 -->

            </div>
        </div>

        <!-- CARUSEL -->
        <div class="col-sm-12 mb-5">
            <div class="row">
                <div id="carusel_footer" class="owl-carousel row mb-3 pt-3 bg-light">
    
                    <!-- BLOQUE 15 -->
                    <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="square {{$slots['slot15']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot15']->slug}}" title="{{$slots['slot15']->name}}">
                                {{$slots['slot15']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot15[0]->title_seo)}}/{{$articlesSlot15[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot15[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot15[0]->date))}}</p>
                                    <h4>{{$articlesSlot15[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot15[$i]->title_seo)}}/{{$articlesSlot15[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot15[$i]->date))}}</p>
                                    <h4>{{$articlesSlot15[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>
                    <!-- / BLOQUE 15 -->
    
                    <!-- BLOQUE 16 -->
                    <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="{{$slots['slot16']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot16']->slug}}" title="{{$slots['slot16']->name}}">
                                {{$slots['slot16']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot16[0]->title_seo)}}/{{$articlesSlot16[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot16[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot16[0]->date))}}</p>
                                    <h4>{{$articlesSlot16[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot16[$i]->title_seo)}}/{{$articlesSlot16[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot16[$i]->date))}}</p>
                                    <h4>{{$articlesSlot16[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>
    
                    <!-- BLOQUE 17 -->
                    <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="square {{$slots['slot17']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot17']->slug}}" title="{{$slots['slot17']->name}}">
                                {{$slots['slot17']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot17[0]->title_seo)}}/{{$articlesSlot17[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot17[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot17[0]->date))}}</p>
                                    <h4>{{$articlesSlot17[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot17[$i]->title_seo)}}/{{$articlesSlot17[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot17[$i]->date))}}</p>
                                    <h4>{{$articlesSlot17[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>
    
                    <!-- BLOQUE 18 -->
                    <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="square {{$slots['slot18']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot18']->slug}}" title="{{$slots['slot18']->name}}">
                                {{$slots['slot18']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot18[0]->title_seo)}}/{{$articlesSlot18[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot18[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot18[0]->date))}}</p>
                                    <h4>{{$articlesSlot18[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot18[$i]->title_seo)}}/{{$articlesSlot18[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot18[$i]->date))}}</p>
                                    <h4>{{$articlesSlot18[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>
    
                    <!-- BLOQUE 19 -->
                    <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="square {{$slots['slot19']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot19']->slug}}" title="{{$slots['slot19']->name}}">
                                {{$slots['slot19']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot19[0]->title_seo)}}/{{$articlesSlot19[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot19[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot19[0]->date))}}</p>
                                    <h4>{{$articlesSlot19[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot19[$i]->title_seo)}}/{{$articlesSlot19[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot19[$i]->date))}}</p>
                                    <h4>{{$articlesSlot19[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>
    
                    <!-- BLOQUE 20 -->
                    <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="square {{$slots['slot20']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot20']->slug}}" title="{{$slots['slot20']->name}}">
                                {{$slots['slot20']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot20[0]->title_seo)}}/{{$articlesSlot20[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot20[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot20[0]->date))}}</p>
                                    <h4>{{$articlesSlot20[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot20[$i]->title_seo)}}/{{$articlesSlot20[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot20[$i]->date))}}</p>
                                    <h4>{{$articlesSlot20[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>

                     <!-- BLOQUE 21 -->
                     <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="square {{$slots['slot21']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot21']->slug}}" title="{{$slots['slot21']->name}}">
                                {{$slots['slot21']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot21[0]->title_seo)}}/{{$articlesSlot21[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot21[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot21[0]->date))}}</p>
                                    <h4>{{$articlesSlot21[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot21[$i]->title_seo)}}/{{$articlesSlot21[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot21[$i]->date))}}</p>
                                    <h4>{{$articlesSlot21[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>

                     <!-- BLOQUE 22 -->
                     <div class="col-sm-12 col_first_featured border-right">                  
                        <div class="mb-0">
                            <span class="square {{$slots['slot22']->slug}}"></span>
                            <a class="section_link" href="/section/{{$slots['slot22']->slug}}" title="{{$slots['slot22']->name}}">
                                {{$slots['slot22']->name}}
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot22[0]->title_seo)}}/{{$articlesSlot22[0]->article_id}}">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video --> 
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$articlesSlot22[0]->cover_image}}"
                                            alt="IMAGE CAPTION"
                                            width="540" height="303"
                                            title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot22[0]->date))}}</p>
                                    <h4>{{$articlesSlot22[0]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        @for($i = 1; $i < 4; $i++)
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="/articulo/{{urlencode($articlesSlot22[$i]->title_seo)}}/{{$articlesSlot22[$i]->article_id}}">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">{{date('d/m/Y', strtotime($articlesSlot22[$i]->date))}}</p>
                                    <h4>{{$articlesSlot22[$i]->title_seo}}</h4>
                                </div>
                            </a>
                        </div>
                        @endfor
                    </div>
    
                </div>
            </div> <!-- /.row -->
        </div>

    </div> <!-- /container -->
@endsection
