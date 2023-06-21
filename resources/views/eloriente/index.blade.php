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
                            <span class="tag {{$articles[0]->micrositeSection[0]?->slug}} mt-3 ml-3 position-absolute">{{$articles[0]->micrositeSection[0]?->name}}</span>
                            <!-- BTN PLAY SI ARTICULO TIENE VIDEO -->
                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/829x465/{{$articles[0]->cover_image}}"
                                alt="El secretario general de la organización, Haitham Al Ghais, se reunió con Fernando Santos, ministro de Energía y Mina / Foto: EFE"
                                width="540" height="303"
                                title="El secretario general de la organización, Haitham Al Ghais, se reunió con Fernando Santos, ministro de Energía y Mina / Foto: EFE"
                                class="coverimage lazyloaded"
                                src="https://www.juiciocrudo.com/pics/nocrop/829x465/{{$articles[0]->cover_image}}">
                        </div>
                        <p class="date d-none"><span>16/05/2023</span></p>
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
                            <span class="tag {{$articles[1]->micrositeSection[0]?->slug}} mt-3 ml-3 position-absolute">{{$articles[1]->micrositeSection[0]?->name}}</span>
                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articles[1]->cover_image}}"
                                alt="Subrayó que los términos y plazos presidenciales deben cumplirse sin presiones ni amenazas / Foto: cortesía Presidencia "
                                width="540" height="303"
                                title="Subrayó que los términos y plazos presidenciales deben cumplirse sin presiones ni amenazas / Foto: cortesía Presidencia "
                                class="coverimage lazyloaded"
                                src="https://www.juiciocrudo.com/pics/nocrop/500x400/{{$articles[1]->cover_image}}">
                        </div>
                        <p class="date d-none"><span>16/05/2023</span></p>
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
                            <span class="square {{$articles[2]->micrositeSection[0]?->slug}}"></span>
                            <a class="section_link" href="/section/{{$articles[2]->micrositeSection[0]?->slug}}"
                                title="Medio Ambiente - El Oriente, Ecuador">
                                {{$articles[2]->micrositeSection[0]?->name}}
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
                            <span class="square {{$articles[3]->micrositeSection[0]?->slug}}"></span>
                            <a class="section_link" href="/section/{{$articles[3]->micrositeSection[0]?->slug}}"
                                title="Medio Ambiente - El Oriente, Ecuador">
                                {{$articles[3]->micrositeSection[0]?->name}}
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
                    <span class="square caso-chevron-ecuador"></span>
                    <a class="section_link" href="https://www.eloriente.com/section/caso-chevron-ecuador"
                        title="Caso Chevron Ecuador - El Oriente, Ecuador">
                        Caso Chevron ecuador
                    </a>
                </div>
                <div class="row">
                    @foreach($articlesSlotOne as $article)
                    <div class="col-md-4 item-noticias item article">
                        <a target="_top"
                            href="{{$article->url_generated}}">
                            <div class="ft-item" data-wow-duration="1s">
                                <div class="img_holder">
                                    <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$article->cover_image}}"
                                        alt="{{$article->description_seo}}"
                                        width="540" height="303"
                                        title="{{$article->description_seo}}"
                                        class="coverimage lazyloaded"
                                        src="https://www.juiciocrudo.com/pics/nocrop/540x303/{{$article->cover_image}}">
                                </div> <!-- /img_holder -->
                                <p class="date"><span>15/05/2023</span></p>
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
                            <span class="square podcasts"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/podcasts"
                                title="Podcasts - El Oriente, Ecuador">Podcasts</a>
                        </div>
                    </div>
                    <div class="item_listing">
                        <div class="row item-noticias mb-3 item article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/podcast-el-dinero-del-petroleo-del-yasuni-casi-equivale-al-presupuesto-de-las-universidades/39988">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/498ceebc103be434f489a381f6e518acb63dd60e.jpg"
                                                alt="" width="120" height="100" title=""
                                                class="coverimage ls-is-cached lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/498ceebc103be434f489a381f6e518acb63dd60e.jpg">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date mt-0"><span>15/05/2023</span></p>
                                            <h4 style="font-size:1em">Podcast: El dinero del petróleo del Yasuní casi
                                                equivale al presupuesto de las universidades</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="row item-noticias mb-3 item article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/podcast-sacha-lodge-salio-en-national-geographic/39969">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/3aae63e7dcecbc9f43d9d90f6392f132b8365fa8.jpg"
                                                alt="" width="120" height="100" title=""
                                                class="coverimage ls-is-cached lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/3aae63e7dcecbc9f43d9d90f6392f132b8365fa8.jpg">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date mt-0"><span>12/05/2023</span></p>
                                            <h4 style="font-size:1em">Podcast: Sacha Lodge salió en National Geographic
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="row item-noticias mb-3 item article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/podcast-ecuador-acomete-con-galapagos-la-mayor-conversion-de-deuda-por-naturaleza-de-la-historia/39933">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/3ba1d1675af3559e2d676479edcc170475f31196.jpg"
                                                alt="" width="120" height="100" title=""
                                                class="coverimage lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/3ba1d1675af3559e2d676479edcc170475f31196.jpg">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date mt-0"><span>10/05/2023</span></p>
                                            <h4 style="font-size:1em">Podcast: Ecuador acomete con Galápagos la mayor
                                                conversión de deuda por naturaleza de la historia</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div><!-- / BLOQUE 2 -->

        </div>

        <!-- PROVINCIAS -->

        <div class="col-sm-12 ft-cards bg-light mb-4 pt-5 pl-4 pr-4 pb-4"
            style="border-top: 2px solid #7eb326;border-radius: 8px;">
            <div class="row">

                <div class="col-sm-3 text-center">
                    <img src="/images/provincias/provincias-del-oriente.svg" class="mb-4"
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
                        <span class="square medio-ambiente"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/medio-ambiente"
                            title="Medio Ambiente - El Oriente, Ecuador">Medio Ambiente</a>
                    </div>
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/ecuador-integra-la-reserva-ponce-paluguillo-a-su-sistema-de-areas-protegidas/39998">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/565c8f0c6140b6f1ed6e86178a727dbcee1fa572.jpg"
                                    alt="Ese espacio es el área protegida número 75 de Ecuador y es también una zona conocida como Refugio de Vida Silvestre / Foto: cortesía Ministerio de Ambiente"
                                    width="540" height="303"
                                    title="Ese espacio es el área protegida número 75 de Ecuador y es también una zona conocida como Refugio de Vida Silvestre / Foto: cortesía Ministerio de Ambiente"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/565c8f0c6140b6f1ed6e86178a727dbcee1fa572.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>16/05/2023</span></p>
                            <h4 style="font-size:1.6em">Ecuador integra la reserva Ponce Paluguillo a su sistema de áreas
                                protegidas</h4>
                            <p class="intro">Ese espacio es el área protegida número 75 de Ecuador y es también una zona
                                conocida como Refugio de Vida Silvestre</p>
                        </div>
                    </a>
                </div><!-- /BLOQUE 3 -->

                <!-- BLOQUE 4 -->
                <div class="col-sm-6 col-md-4 item-noticias item article border-right mb-5 mb-0">
                    <div class="mb-3">
                        <span class="square energia"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/energia"
                            title="Energía - El Oriente, Ecuador">Energía</a>
                    </div>
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/ecuador-fue-invitado-a-formar-parte-nuevamente-de-la-opep/40003">
                        <div class="ft-item" data-wow-duration="1s">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/23c78ac15db0f6c9f9f82c1b734c0df16ba59e2e.jpg"
                                    alt="El secretario general de la organización, Haitham Al Ghais, se reunió con Fernando Santos, ministro de Energía y Mina / Foto: EFE"
                                    width="540" height="303"
                                    title="El secretario general de la organización, Haitham Al Ghais, se reunió con Fernando Santos, ministro de Energía y Mina / Foto: EFE"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/23c78ac15db0f6c9f9f82c1b734c0df16ba59e2e.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>16/05/2023</span></p>
                            <h4 style="font-size:1.6em">Ecuador fue invitado a formar parte nuevamente de la OPEP</h4>
                            <p class="intro">El secretario general de la organización, Haitham Al Ghais, se reunió con
                                Fernando Santos, ministro de Energía y Minas</p>
                        </div>
                    </a>
                </div><!-- /BLOQUE 4 -->

                <!-- BLOQUE 5 -->
                <div class="col-md-4 item">
                    <div class="item_listing">
                        <div class="mb-3">
                            <span class="square politica-y-economia"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/politica-y-economia"
                                title="Politica y Economía - El Oriente, Ecuador">Politica y Economía</a>
                        </div>
                        <div class="col-sm-12 item-noticias article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/la-oea-pide-todas-las-garantias-en-el-juicio-politico-contra-lasso/39999">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/c1507df2f65c96b0386296792f89d92385ac68bd.jpg"
                                                alt="Subrayó que los términos y plazos presidenciales deben cumplirse sin presiones ni amenazas / Foto: cortesía Presidencia "
                                                width="120" height="100"
                                                title="Subrayó que los términos y plazos presidenciales deben cumplirse sin presiones ni amenazas / Foto: cortesía Presidencia "
                                                class="coverimage lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/c1507df2f65c96b0386296792f89d92385ac68bd.jpg">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date" style="margin-top:0"><span>16/05/2023</span></p>
                                            <h4 style="font-size:1em">La OEA pide "todas las garantías" en el juicio
                                                político contra Lasso</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/xavier-vera-exministro-de-energia-fue-detenido/39997">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/c44928f25a83a3a0ffcb724685ca13ba77ae2832.jpg"
                                                alt="La Fiscalía realizó registros a varios inmuebles relacionados con Vera, en el marco de la investigación por presunto cohecho / Foto: cortesía Fiscalía"
                                                width="120" height="100"
                                                title="La Fiscalía realizó registros a varios inmuebles relacionados con Vera, en el marco de la investigación por presunto cohecho / Foto: cortesía Fiscalía"
                                                class="coverimage lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/c44928f25a83a3a0ffcb724685ca13ba77ae2832.jpg">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date" style="margin-top:0"><span>16/05/2023</span></p>
                                            <h4 style="font-size:1em">Xavier Vera, exministro de Energía, fue detenido</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/tribunal-ordena-prision-preventiva-contra-asambleista-peter-calo/39994">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/78e72e659eb4f3ae319544703337de7719ebcd8c.jpg"
                                                alt="Sobre Calo pesaban medidas sustitutivas a la prisión preventiva como el uso de grillete electrónico, presentación periódica y prohibición de salida del país/ Foto: cortesía"
                                                width="120" height="100"
                                                title="Sobre Calo pesaban medidas sustitutivas a la prisión preventiva como el uso de grillete electrónico, presentación periódica y prohibición de salida del país/ Foto: cortesía"
                                                class="coverimage ls-is-cached lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/78e72e659eb4f3ae319544703337de7719ebcd8c.jpg">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date" style="margin-top:0"><span>15/05/2023</span></p>
                                            <h4 style="font-size:1em">Tribunal ordena prisión preventiva contra asambleísta
                                                Peter Calo</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/el-consejo-de-la-judicatura-otra-vez-en-el-ojo-del-huracan/39990">
                                <div class="ft-item" style="min-height:initial">
                                    <div class="row">
                                        <div class="img_holder col-4 pl-0">
                                            <img data-src="https://www.juiciocrudo.com/pics/nocrop/120x100/33ca4aa2f90cb08688a9d167244f135d57f14f77.jpg"
                                                alt="En 2011, el presidente del CJ apoyó al juez que emitió la fraudulenta sentencia contra Chevron/ Foto: cortesía Fiscalía General"
                                                width="120" height="100"
                                                title="En 2011, el presidente del CJ apoyó al juez que emitió la fraudulenta sentencia contra Chevron/ Foto: cortesía Fiscalía General"
                                                class="coverimage ls-is-cached lazyloaded"
                                                src="https://www.juiciocrudo.com/pics/nocrop/120x100/33ca4aa2f90cb08688a9d167244f135d57f14f77.jpg">
                                        </div> <!-- /img_holder -->
                                        <div class="col-8 pl-0">
                                            <p class="date" style="margin-top:0"><span>15/05/2023</span></p>
                                            <h4 style="font-size:1em">El Consejo de la Judicatura, otra vez en el ojo del
                                                huracán</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div><!-- / BLOQUE 5 -->

            </div>
        </div>

        <!-- BLOQUE 6 -->
        <div class="col-sm-12 ft-cards border_bottomx mb-4">
            <div class="mb-3">
                <span class="square seguridad-y-fronteras"></span>
                <a class="section_link" href="https://www.eloriente.com/section/seguridad-y-fronteras"
                    title="Seguridad y Fronteras - El Oriente, Ecuador">
                    Seguridad y Fronteras</a>
            </div>
            <div class="row">
                <!-- ITEM -->
                <div class="col-sm-6 col-md-3 item-noticias item article">
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/2-734-kilos-de-cocaina-procedentes-de-ecuador-fueron-incautados-en-italia/40001">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/ab7f69cd354909c4ac9ebc70848fde2dfd4e7813.jpg"
                                    alt="La cocaína resultó ser de calidad muy pura y estar en perfecto estado por lo que podría haber reportado a los traficantes unos ingresos de más de 800 millones de euros / Foto: cortesía  Guardia de Finanza"
                                    width="540" height="303"
                                    title="La cocaína resultó ser de calidad muy pura y estar en perfecto estado por lo que podría haber reportado a los traficantes unos ingresos de más de 800 millones de euros / Foto: cortesía  Guardia de Finanza"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/ab7f69cd354909c4ac9ebc70848fde2dfd4e7813.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>16/05/2023</span></p>
                            <h4>2.734 kilos de cocaína procedentes de Ecuador fueron incautados en Italia</h4>
                            <p class="intro">La cocaína resultó ser de calidad muy pura y estar en perfecto estado por lo
                                que podría haber...</p>
                        </div>
                    </a>
                </div>
                <!-- ITEM -->
                <div class="col-sm-6 col-md-3 item-noticias item article">
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/atentado-en-contra-del-alcalde-de-duran-dejo-5-heridos/40000">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/446887781eb995b1b3a369ed49521a694d105a49.jpg"
                                    alt="La Policía informó que se registró un atentado criminal contra el vehículo en el que circulaba Chonillo / Foto: cortesía Policía Nacional "
                                    width="540" height="303"
                                    title="La Policía informó que se registró un atentado criminal contra el vehículo en el que circulaba Chonillo / Foto: cortesía Policía Nacional "
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/446887781eb995b1b3a369ed49521a694d105a49.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>16/05/2023</span></p>
                            <h4>Atentado en contra del alcalde de Durán dejó 5 heridos</h4>
                            <p class="intro">La Policía informó que se registró "un atentado criminal contra el vehículo
                                en el que circulaba"...</p>
                        </div>
                    </a>
                </div>
                <!-- ITEM -->
                <div class="col-sm-6 col-md-3 item-noticias item article">
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/como-evitar-ser-victima-de-un-secuestro/39992">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/b63c2dca63350e69620a3cd32a0ca624debc6e30.jpg"
                                    alt="Durante los últimos años, Ecuador ha visto cómo la delincuencia organizada gana espacios. Uno de los crímenes que se realiza con frecuencia son los secuestros/ Foto: cortesía"
                                    width="540" height="303"
                                    title="Durante los últimos años, Ecuador ha visto cómo la delincuencia organizada gana espacios. Uno de los crímenes que se realiza con frecuencia son los secuestros/ Foto: cortesía"
                                    class="coverimage ls-is-cached lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/b63c2dca63350e69620a3cd32a0ca624debc6e30.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>15/05/2023</span></p>
                            <h4>¿Cómo evitar ser víctima de un secuestro?</h4>
                            <p class="intro">Durante los últimos años, Ecuador ha visto cómo la delincuencia organizada
                                gana espacios. Uno de los...</p>
                        </div>
                    </a>
                </div>
                <!-- ITEM -->
                <div class="col-sm-6 col-md-3 item-noticias item article">
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/la-policia-decomiso-mas-de-1-5-toneladas-de-cocaina-que-iban-a-espana/39976">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/03e2bdbb42eacd4df3074b2341e113cf1ff11931.jpg"
                                    alt="Según la Policía, se pretendía enviar la cocaína en un contenedor que contenía harina de banano de exportación/ Foto: cortesía Policía Nacional"
                                    width="540" height="303"
                                    title="Según la Policía, se pretendía enviar la cocaína en un contenedor que contenía harina de banano de exportación/ Foto: cortesía Policía Nacional"
                                    class="coverimage ls-is-cached lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/03e2bdbb42eacd4df3074b2341e113cf1ff11931.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>12/05/2023</span></p>
                            <h4>La Policía decomisó más de 1,5 toneladas de cocaína que iban a España</h4>
                            <p class="intro">Según la Policía, se pretendía enviar la cocaína en un contenedor que
                                contenía harina de banano de...</p>
                        </div>
                    </a>
                </div>
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
                            <span class="square noticias-nacionales"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/noticias-nacionales"
                                title="Noticias Nacionales - El Oriente, Ecuador">
                                Noticias Nacionales</a>
                        </div>
                        <div class="col-sm-6 col-lg-3 item-noticias item article">
                            <a class="ft-item" target="_top"
                                href="https://www.eloriente.com/articulo/petroecuador-avanza-con-la-remediacion-ambiental-en-sucumbios-y-orellana/39752">
                                <div class="img_holder">
                                    <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/7ba6e3b4ba7faf1d218a5e54f2fdec6021c59257.jpg"
                                        alt="En enero, Fernando Santos, ministro de Energía, anunció que la empresa estatal va a remediar las piscinas de crudo que aún siguen abiertas en las 2 provincias/ Foto: Cortesía Petroecuador"
                                        width="540" height="303"
                                        title="En enero, Fernando Santos, ministro de Energía, anunció que la empresa estatal va a remediar las piscinas de crudo que aún siguen abiertas en las 2 provincias/ Foto: Cortesía Petroecuador"
                                        class="coverimage ls-is-cached lazyloaded"
                                        src="https://www.juiciocrudo.com/pics/nocrop/500x400/7ba6e3b4ba7faf1d218a5e54f2fdec6021c59257.jpg">
                                </div> <!-- /img_holder -->
                                <p class="date"><span>25/04/2023</span></p>
                                <h4>Petroecuador avanza con la remediación ambiental en Sucumbíos y Orellana</h4>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-3 item-noticias item article">
                            <a class="ft-item" target="_top"
                                href="https://www.eloriente.com/articulo/ecuador-cierra-el-primer-trimestre-con-16-3-millones-de-barriles-refinados/39745">
                                <div class="img_holder">
                                    <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/8926c902842e892332cb9f7b9212e055c0482741.jpg"
                                        alt="La refinería de Esmeraldas, refinó 10,7 millones de barriles de crudo, mientras que La Libertad procesó cerca de 3,4 millones de barriles y la de Shushufindi hizo con 2,2 millones de barriles / Foto: cortesía Petroecuador"
                                        width="540" height="303"
                                        title="La refinería de Esmeraldas, refinó 10,7 millones de barriles de crudo, mientras que La Libertad procesó cerca de 3,4 millones de barriles y la de Shushufindi hizo con 2,2 millones de barriles / Foto: cortesía Petroecuador"
                                        class="coverimage ls-is-cached lazyloaded"
                                        src="https://www.juiciocrudo.com/pics/nocrop/500x400/8926c902842e892332cb9f7b9212e055c0482741.jpg">
                                </div> <!-- /img_holder -->
                                <p class="date"><span>25/04/2023</span></p>
                                <h4>Ecuador cierra el primer trimestre con 16,3 millones de barriles refinados</h4>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-3 item-noticias item article">
                            <a class="ft-item" target="_top"
                                href="https://www.eloriente.com/articulo/santiago-gangotena-sera-recordado-por-haber-fundado-la-primera-universidad-privada-del-ecuador/39732">
                                <div class="img_holder">
                                    <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/cf826f0e94acfcf556de2d9d78ccaf25ca83c4b3.jpg"
                                        alt="La noche del 21 de abril falleció atropellado por un bus a pocos metros de la Universidad San Francisco de Quito / Foto: cortesía USFQ"
                                        width="540" height="303"
                                        title="La noche del 21 de abril falleció atropellado por un bus a pocos metros de la Universidad San Francisco de Quito / Foto: cortesía USFQ"
                                        class="coverimage ls-is-cached lazyloaded"
                                        src="https://www.juiciocrudo.com/pics/nocrop/500x400/cf826f0e94acfcf556de2d9d78ccaf25ca83c4b3.jpg">
                                </div> <!-- /img_holder -->
                                <p class="date"><span>24/04/2023</span></p>
                                <h4>Santiago Gangotena será recordado por haber fundado la primera universidad privada del
                                    Ecuador</h4>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-3 item-noticias item article">
                            <a class="ft-item" target="_top"
                                href="https://www.eloriente.com/articulo/consejo-de-la-judicatura-pide-a-cidh-constatar-problemas-en-ecuador/39714">
                                <div class="img_holder">
                                    <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/d7db74aa2e9c193b338e6b7194421366c9faedcc.jpg"
                                        alt=" Los problemas en el sistema judicial ponen en riesgo los derechos al trabajo, a la protección judicial, a las garantías judiciales y a la igualdad ante la ley / Foto: EFE"
                                        width="540" height="303"
                                        title=" Los problemas en el sistema judicial ponen en riesgo los derechos al trabajo, a la protección judicial, a las garantías judiciales y a la igualdad ante la ley / Foto: EFE"
                                        class="coverimage lazyloaded"
                                        src="https://www.juiciocrudo.com/pics/nocrop/500x400/d7db74aa2e9c193b338e6b7194421366c9faedcc.jpg">
                                </div> <!-- /img_holder -->
                                <p class="date"><span>21/04/2023</span></p>
                                <h4>Consejo de la Judicatura pide a CIDH constatar problemas en Ecuador</h4>
                            </a>
                        </div>
                    </div>
                </div><!-- / BLOQUE 7 -->

                <!-- BLOQUE 8 -->
                <div class="col-lg-4">
                    <div class="mb-3">
                        <span class="square pueblos-indigenas"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/pueblos-indigenas"
                            title="Pueblos Indígenas - El Oriente, Ecuador">
                            Pueblos Indígenas</a>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 item-noticias item article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/6-400-achuar-viven-en-84-comunidades-a-lo-largo-del-rio-pastaza/39936">
                                <div class="ft-item">
                                    <div class="img_holder">
                                        <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/e57af8682da9184aaf51d84952aa0330f229171d.jpg"
                                            alt="Habitan en un territorio de 679,000 hectáreas en las provincias de Pastaza y Morona Santiago/ Foto: cortesía"
                                            width="540" height="303"
                                            title="Habitan en un territorio de 679,000 hectáreas en las provincias de Pastaza y Morona Santiago/ Foto: cortesía"
                                            class="coverimage lazyloaded"
                                            src="https://www.juiciocrudo.com/pics/nocrop/540x303/e57af8682da9184aaf51d84952aa0330f229171d.jpg">
                                    </div> <!-- /img_holder -->
                                    <p class="date"><span>10/05/2023</span></p>
                                    <h4>6.400 achuar viven en 84 comunidades a lo largo del río Pastaza</h4>
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
                        <span class="square actualidad"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/actualidad"
                            title="Actualidad - El Oriente, Ecuador">
                            Actualidad</a>
                    </div>
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/noticias-del-ecuador-medios-nacionales-16-de-mayo-de-2023/39996">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/d69043f05cde852538e4f0f1b20578281ee6520d.jpg"
                                    alt="Noticias del Ecuador Medios Nacionales - 16 de Mayo de 2023 / Foto: cortesía Asamblea Nacional "
                                    width="540" height="303"
                                    title="Noticias del Ecuador Medios Nacionales - 16 de Mayo de 2023 / Foto: cortesía Asamblea Nacional "
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/d69043f05cde852538e4f0f1b20578281ee6520d.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>16/05/2023</span></p>
                            <h4>Noticias del Ecuador Medios Nacionales - 16 de Mayo de 2023</h4>
                        </div>
                    </a>
                </div> <!-- / BLOQUE 9 -->

                <!-- BLOQUE 10 -->
                <div class="col-md-3 item-noticias item article border-right">
                    <div class="mb-3">
                        <span class="square opinion"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/opinion"
                            title="Opinion - El Oriente, Ecuador">
                            Opinion</a>
                    </div>
                    <a target="_top" href="https://www.eloriente.com/articulo/juicio-politico-semana-crucial/39913">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/a6d1b0b105678cb65366598e92d15dc134e08c66.jpg"
                                    alt="Actualmente, los 70 votos para que el Pleno apruebe el juicio político es un número posible de conseguir para la oposición/ Foto: cortesía Cristian Bravo Gallardo"
                                    width="540" height="303"
                                    title="Actualmente, los 70 votos para que el Pleno apruebe el juicio político es un número posible de conseguir para la oposición/ Foto: cortesía Cristian Bravo Gallardo"
                                    class="coverimage ls-is-cached lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/500x400/a6d1b0b105678cb65366598e92d15dc134e08c66.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>09/05/2023</span></p>
                            <h4>Juicio Político: Semana Crucial</h4>
                        </div> <!-- /ft-item -->
                    </a>
                </div> <!-- / BLOQUE 10 -->

                <!-- BLOQUE 11 -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <span class="square cultura-y-turismo"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/cultura-y-turismo"
                            title="Cultura y Turismo - El Oriente, Ecuador">Cultura y Turismo</a>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 item-noticias item article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/el-director-ecuatoriano-alvarez-munoz-dirigira-carmina-burana-en-madrid/40002">
                                <div class="ft-item">
                                    <div class="img_holder">
                                        <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/3e1a416e723ebace8aeaedffb9a847a3dce9bfdc.jpg"
                                            alt="Álvarez Muñoz es profesor Superior de Dirección de Orquesta, Coro y Ópera por el Conservatorio Superior Tchaikovsky de Moscú  / Foto: cortesía Universidad Autónoma de Madrid"
                                            width="540" height="303"
                                            title="Álvarez Muñoz es profesor Superior de Dirección de Orquesta, Coro y Ópera por el Conservatorio Superior Tchaikovsky de Moscú  / Foto: cortesía Universidad Autónoma de Madrid"
                                            class="coverimage lazyloaded"
                                            src="https://www.juiciocrudo.com/pics/nocrop/500x400/3e1a416e723ebace8aeaedffb9a847a3dce9bfdc.jpg">
                                    </div> <!-- /img_holder -->
                                    <p class="date"><span>16/05/2023</span></p>
                                    <h4>El director ecuatoriano Álvarez Muñoz dirigirá "Carmina Burana" en Madrid</h4>
                                </div>
                            </a>
                        </div> <!-- /item -->
                        <div class="col-sm-6 item-noticias item article">
                            <a target="_top"
                                href="https://www.eloriente.com/articulo/la-utpl-creo-una-serie-documental-sobre-el-cafe-de-loja/39983">
                                <div class="ft-item">
                                    <div class="img_holder">
                                        <img data-src="https://www.juiciocrudo.com/pics/nocrop/500x400/3d5966d99afb0037e2bd8e94b710a1462a3e2e6a.jpg"
                                            alt="El café es parte esencial de la identidad e historia de Ecuador y desde hace 200 años, este producto ha permitido el desarrollo económico y productivo del país / Foto: cortesía UTPL"
                                            width="540" height="303"
                                            title="El café es parte esencial de la identidad e historia de Ecuador y desde hace 200 años, este producto ha permitido el desarrollo económico y productivo del país / Foto: cortesía UTPL"
                                            class="coverimage ls-is-cached lazyloaded"
                                            src="https://www.juiciocrudo.com/pics/nocrop/500x400/3d5966d99afb0037e2bd8e94b710a1462a3e2e6a.jpg">
                                    </div> <!-- /img_holder -->
                                    <p class="date"><span>15/05/2023</span></p>
                                    <h4>La UTPL creó una serie documental sobre el café de Loja</h4>
                                </div>
                            </a>
                        </div> <!-- /item -->
                    </div>
                </div> <!-- / BLOQUE 11 -->

            </div> <!-- /.row -->
        </div>

        <div class="col-sm-12 border_bottom">
            <div class="row">

                <!-- BLOQUE 12 -->
                <div class="col-sm-4 item-noticias item article border-right">
                    <div class="mb-3">
                        <span class="square salud"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/salud"
                            title="Salud - El Oriente, Ecuador">
                            Salud
                        </a>
                    </div>
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/la-oms-dice-que-los-edulcorantes-no-ayudan-a-bajar-de-peso-y-pueden-aumentar-la-mortalidad/39984">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/5b97798f18685da83b9a880bfbbfee609df867b0.jpg"
                                    alt="Reemplazar los azúcares libres por edulcorantes no ofrece ningún beneficio a largo plazo en términos de reducción de grasa en el cuerpo en adultos o niños / Foto: EFE"
                                    width="540" height="303"
                                    title="Reemplazar los azúcares libres por edulcorantes no ofrece ningún beneficio a largo plazo en términos de reducción de grasa en el cuerpo en adultos o niños / Foto: EFE"
                                    class="coverimage ls-is-cached lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/5b97798f18685da83b9a880bfbbfee609df867b0.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>15/05/2023</span></p>
                            <h4 style="font-size:1.6em">La OMS dice que los edulcorantes no ayudan a bajar de peso y pueden
                                aumentar la mortalidad</h4>
                            <p class="intro">Reemplazar los azúcares libres por edulcorantes no ofrece ningún beneficio a
                                largo plazo en términos de reducción de grasa en el cuerpo en adultos o niños</p>
                        </div>
                    </a>
                </div>
                <!-- / BLOQUE 12 -->

                <!-- BLOQUE 13 -->
                <div class="col-sm-4 item-noticias item article" style="border-right:1px solid #d5d5d5">
                    <div class="mb-3">
                        <span class="square internacional"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/internacional"
                            title="Internacional - El Oriente, Ecuador">Internacional</a>
                    </div>
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/el-aumento-de-casos-de-covid-hace-retomar-las-medidas-en-el-sudeste-asiatico/39858">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/2dfd966b620e5c6ac2c46913409c39c263d6328e.jpg"
                                    alt="La situación más preocupante parece darse en Malasia, donde se registraron casi 5.000 nuevos casos el pasado sábado / Foto: EFE"
                                    width="540" height="303"
                                    title="La situación más preocupante parece darse en Malasia, donde se registraron casi 5.000 nuevos casos el pasado sábado / Foto: EFE"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/2dfd966b620e5c6ac2c46913409c39c263d6328e.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>04/05/2023</span></p>
                            <h4 style="font-size:1.6em">El aumento de casos de covid hace retomar las medidas en el Sudeste
                                Asiático</h4>
                            <p class="intro">La situación más preocupante parece darse en Malasia, donde se registraron
                                casi 5.000 nuevos casos el pasado sábado</p>
                        </div>
                    </a>
                </div>
                <!-- / BLOQUE 13 -->

                <!-- BLOQUE 14 -->
                <div class="col-sm-4 item-noticias item article">
                    <div class="mb-3">
                        <span class="square ciencia-y-tecnologia"></span>
                        <a class="section_link" href="https://www.eloriente.com/section/ciencia-y-tecnologia"
                            title="Ciencia y Tecnología - El Oriente, Ecuador">
                            Ciencia y Tecnología
                        </a>
                    </div>
                    <a target="_top"
                        href="https://www.eloriente.com/articulo/automatizacion-de-sistemas-de-secado-solar-en-comunidades-agricolas-del-ecuador/39968">
                        <div class="ft-item">
                            <div class="img_holder">
                                <img data-src="https://www.juiciocrudo.com/pics/nocrop/540x303/bfb956da5998e8524dd64f4588d2c266c61ee97d.jpg"
                                    alt="El uso de energía térmica para secar granos es ineficiente y se puede mejorar utilizando colectores solares o acumuladores solares / Foto: IIGE"
                                    width="540" height="303"
                                    title="El uso de energía térmica para secar granos es ineficiente y se puede mejorar utilizando colectores solares o acumuladores solares / Foto: IIGE"
                                    class="coverimage lazyloaded"
                                    src="https://www.juiciocrudo.com/pics/nocrop/540x303/bfb956da5998e8524dd64f4588d2c266c61ee97d.jpg">
                            </div> <!-- /img_holder -->
                            <p class="date"><span>12/05/2023</span></p>
                            <h4 style="font-size:1.6em">Automatización de sistemas de secado solar, en comunidades
                                agrícolas del Ecuador</h4>
                            <p class="intro">El uso de energía térmica para secar granos es ineficiente y se puede mejorar
                                utilizando colectores solares o acumuladores solares</p>
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
                            <span class="square deportes"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/deportes"
                                title="Deportes - El Oriente, Ecuador">
                                Deportes
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video -->
                                        <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i>
                                        </div>
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/500x400/c3ab20908d86e7d14ed036c9996ae714515d74b1.jpg"
                                            alt="IMAGE CAPTION" width="540" height="303" title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">00/00/00</p>
                                    <h4>Laila Gordillo conquistó 1 medalla de oro en Estados Unidos</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- / BLOQUE 15 -->

                    <!-- BLOQUE 16 -->
                    <div class="col-sm-12 col_first_featured border-right">
                        <div class="mb-0">
                            <span class="square deportes"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/deportes"
                                title="Deportes - El Oriente, Ecuador">
                                Deportes
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video >> <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div> -->
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/500x400/c3ab20908d86e7d14ed036c9996ae714515d74b1.jpg"
                                            alt="IMAGE CAPTION" width="540" height="303" title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">00/00/00</p>
                                    <h4>Laila Gordillo conquistó 1 medalla de oro en Estados Unidos</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- BLOQUE 17 -->
                    <div class="col-sm-12 col_first_featured border-right">
                        <div class="mb-0">
                            <span class="square deportes"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/deportes"
                                title="Deportes - El Oriente, Ecuador">
                                Deportes
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video >> <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div> -->
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/500x400/c3ab20908d86e7d14ed036c9996ae714515d74b1.jpg"
                                            alt="IMAGE CAPTION" width="540" height="303" title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">00/00/00</p>
                                    <h4>Laila Gordillo conquistó 1 medalla de oro en Estados Unidos</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- BLOQUE 18 -->
                    <div class="col-sm-12 col_first_featured border-right">
                        <div class="mb-0">
                            <span class="square deportes"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/deportes"
                                title="Deportes - El Oriente, Ecuador">
                                Deportes
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video >> <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div> -->
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/500x400/c3ab20908d86e7d14ed036c9996ae714515d74b1.jpg"
                                            alt="IMAGE CAPTION" width="540" height="303" title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">00/00/00</p>
                                    <h4>Laila Gordillo conquistó 1 medalla de oro en Estados Unidos</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- BLOQUE 19 -->
                    <div class="col-sm-12 col_first_featured border-right">
                        <div class="mb-0">
                            <span class="square deportes"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/deportes"
                                title="Deportes - El Oriente, Ecuador">
                                Deportes
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video >> <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div> -->
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/500x400/c3ab20908d86e7d14ed036c9996ae714515d74b1.jpg"
                                            alt="IMAGE CAPTION" width="540" height="303" title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">00/00/00</p>
                                    <h4>Laila Gordillo conquistó 1 medalla de oro en Estados Unidos</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- BLOQUE 20 -->
                    <div class="col-sm-12 col_first_featured border-right">
                        <div class="mb-0">
                            <span class="square deportes"></span>
                            <a class="section_link" href="https://www.eloriente.com/section/deportes"
                                title="Deportes - El Oriente, Ecuador">
                                Deportes
                            </a>
                        </div>
                        <!-- PRIMER NOTICIA -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item" style="min-height:auto">
                                    <div class="img_holder">
                                        <!-- Si articulo contiene video >> <div class="icon_type_grid linea-music-play-button"><i class="fas fa-play"></i></div> -->
                                        <img src="https://www.juiciocrudo.com/pics/nocrop/500x400/c3ab20908d86e7d14ed036c9996ae714515d74b1.jpg"
                                            alt="IMAGE CAPTION" width="540" height="303" title="IMAGE CAPTION"
                                            class="coverimage lazyload">
                                    </div>
                                    <p class="date">00/00/00</p>
                                    <h4>Laila Gordillo conquistó 1 medalla de oro en Estados Unidos</h4>
                                </div>
                            </a>
                        </div>
                        <!-- RESTO DE NOTICAS -->
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 item-noticias item">
                            <a target="" href="#">
                                <div class="ft-item border-top pt-3">
                                    <p class="date">00/00/00</p>
                                    <h4>El Barcelona se coronó campeón de España</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div> <!-- /.row -->
        </div>

    </div> <!-- /container -->
@endsection
