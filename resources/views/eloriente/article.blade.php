@extends('eloriente.layouts.master')

@section('content')
<div class="container content">
    <div class="row pt-3 article_container">

        <div class="col-12 col-lg-1" style="overflow:auto">
            <p class="mb-1 d-sm-none">Compartir</p>
            <div class="share_icons mb-3">
                <a onclick="share.Mail();" class="mail"><i class="fas fa-envelope-square"></i></a>
                <a onclick="share.Facebook();" class="facebook"><i class="fab fa-facebook-square"></i></a>
                <a onclick="share.Twitter();" class="twitter"><i class="fab fa-twitter-square"></i></a>
                <a onclick="share.LinkedIn();" class="linkedin"><i class="fab fa-linkedin"></i></a>
                <a onclick="share.Tumblr();" class="tumblr"><i class="fab fa-tumblr-square"></i></a>
                <a class="whatsapp" href="whatsapp://send?text=Laila Gordillo conquistó 1 medalla de oro en Estados Unidos - https://www.eloriente.com/articulo/laila-gordillo-conquisto-1-medalla-de-oro-en-estados-unidos/39993" data-action="share/whatsapp/share"><i class="fab fa-whatsapp-square"></i></a>
                <a class="telegram" href="https://t.me/share/url?url=https%3A%2F%2Fwww.eloriente.com%2Farticulo%2Flaila-gordillo-conquisto-1-medalla-de-oro-en-estados-unidos%2F39993&amp;text=Laila Gordillo conquistó 1 medalla de oro en Estados Unidos"><i class="fab fa-telegram"></i></a>
            </div>
        </div>

        <div class="col-lg-7 article">
            <!--SECCIONES RELACIONADAS-->
            <a class="breadcrums tag deportes" href="/section/deportes" title="Deportes">
                <p style="color:#fff">Deportes</p>
            </a>
            <!--TITULO-->
            <h1>{{$article->title_seo}}</h1>
            <div class="date_source" style="margin:1em 0">
                <span class="mr-2">15/05/2023</span>
                <span class="text-muted">El Oriente</span>
                <span class="author"> - Redacción</span>
            </div>
            <!--TITULO-->
            <h2>{{$article->description_seo}}</h2>
            <div class="image_holder w-100 mb-3 d-table">
                <a title="{{$article->cover_image_caption}}" class="fancybox" target="_blank" href="https://www.juiciocrudo.com/pics/nocrop/1280x960/db52d3c6bd4201ab6551a5ba6167ee86b26c04d3.jpg">
                    <!-- IMAGEN RESAMPLEADA -->
                    <img src="https://www.juiciocrudo.com/pics/540x303/{{$article->cover_image}}" alt="{{$article->cover_image_caption}}" class="coverimage">
                </a>
                <div class="epigrafe"><p>{{$article->cover_image_caption}}</p></div>
            </div>

            <!-- BODY TEXT -->
            {!! $article->body !!}
            
            <!-- ARTICLE TYPE > PHOTOS -->
            <div class="row">
                <!-- FOR EACH - ITEM -->
                <div class="col-sm-4 item" style="padding:15px ">
                    <a data-fancybox="gallery" data-caption="Volcán Cotopaxi: El volcán Cotopaxi, con una altitud de 5.897 metros, se encuentra en la zona denominada “Avenida de los Volcanes”" title="Volcán Cotopaxi: El volcán Cotopaxi, con una altitud de 5.897 metros, se encuentra en la zona denominada “Avenida de los Volcanes”" target="_blank" href="https://www.juiciocrudo.com/pics/nocrop/1280x960/bfc2b50897.jpg">
                        <img class="owl_image" src="https://www.juiciocrudo.com/pics/nocrop/540x303/bfc2b50897.jpg" width="100%" style="width:100%; margin-bottom:0">
                    </a>
                </div>
                <!-- END FOR EACH --> 
                <div class="col-sm-4 item" style="padding:15px ">
                    <a data-fancybox="gallery" data-caption="El Aeropuerto Internacional Mariscal Sucre, también llamado Aeropuerto de Tababela, es el aeropuerto internacional de la ciudad de Quito, el de mayor movimiento de pasajeros en general en Ecuador y el segundo del país en tráfico internacional" title="El Aeropuerto Internacional Mariscal Sucre, también llamado Aeropuerto de Tababela, es el aeropuerto internacional de la ciudad de Quito, el de mayor movimiento de pasajeros en general en Ecuador y el segundo del país en tráfico internacional" target="_blank" href="https://www.juiciocrudo.com/pics/nocrop/1280x960/161419f8ee.jpg">
                        <img class="owl_image" src="https://www.juiciocrudo.com/pics/nocrop/540x303/161419f8ee.jpg" width="100%" style="width:100%; margin-bottom:0">
                    </a>
                </div>
                <div class="col-sm-4 item" style="padding:15px ">
                    <a data-fancybox="gallery" data-caption="Yasuní, el área protegida más grande del Ecuador continental, resguarda una impresionante biodiversidad en el corazón del bosque húmedo tropical amazónico" title="Yasuní, el área protegida más grande del Ecuador continental, resguarda una impresionante biodiversidad en el corazón del bosque húmedo tropical amazónico" target="_blank" href="https://www.juiciocrudo.com/pics/nocrop/1280x960/ea427aa1f9.jpg">
                        <img class="owl_image" src="https://www.juiciocrudo.com/pics/nocrop/540x303/ea427aa1f9.jpg" width="100%" style="width:100%; margin-bottom:0">
                    </a>
                </div>
                  
            </div>

        </div>

        <div class="col-lg-3 offset-lg-1 article_sidebar">
            <h4 class="mb-3">Notas relacionadas</h4>
            <div class="row">
                <!--ITEM-->
                <div class="col-sm-12 mt-3 pb-3 border-bottom">
                    <a href="https://www.eloriente.com/articulo/ecuador-logr-oacute-el-tercer-lugar-en-el-panamericano-de-levantamiento-de-pesas/39498" title="Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas">
                        <div class="row">
                            <div class="col-3" style="padding-right:0"><img src="https://www.juiciocrudo.com/pics/nocrop/100x100/6f5ae6e44656ab42c048217625b40f2d247caf65.jpg" style="width:100%; height:auto"></div>
                            <div class="col-9"><p style="line-height:1.4em; font-size:0.9em; color:#222">Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas</p></div>
                        </div>
                    </a>
                </div>
                <!--ITEM-->
                <div class="col-sm-12 mt-3 pb-3 border-bottom">
                    <a href="https://www.eloriente.com/articulo/ecuador-logr-oacute-el-tercer-lugar-en-el-panamericano-de-levantamiento-de-pesas/39498" title="Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas">
                        <div class="row">
                            <div class="col-3" style="padding-right:0"><img src="https://www.juiciocrudo.com/pics/nocrop/100x100/6f5ae6e44656ab42c048217625b40f2d247caf65.jpg" style="width:100%; height:auto"></div>
                            <div class="col-9"><p style="line-height:1.4em; font-size:0.9em; color:#222">Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas</p></div>
                        </div>
                    </a>
                </div>
                <!--ITEM-->
                <div class="col-sm-12 mt-3 pb-3 border-bottom">
                    <a href="https://www.eloriente.com/articulo/ecuador-logr-oacute-el-tercer-lugar-en-el-panamericano-de-levantamiento-de-pesas/39498" title="Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas">
                        <div class="row">
                            <div class="col-3" style="padding-right:0"><img src="https://www.juiciocrudo.com/pics/nocrop/100x100/6f5ae6e44656ab42c048217625b40f2d247caf65.jpg" style="width:100%; height:auto"></div>
                            <div class="col-9"><p style="line-height:1.4em; font-size:0.9em; color:#222">Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas</p></div>
                        </div>
                    </a>
                </div>
                <!--ITEM-->
                <div class="col-sm-12 mt-3 pb-3 border-bottom">
                    <a href="https://www.eloriente.com/articulo/ecuador-logr-oacute-el-tercer-lugar-en-el-panamericano-de-levantamiento-de-pesas/39498" title="Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas">
                        <div class="row">
                            <div class="col-3" style="padding-right:0"><img src="https://www.juiciocrudo.com/pics/nocrop/100x100/6f5ae6e44656ab42c048217625b40f2d247caf65.jpg" style="width:100%; height:auto"></div>
                            <div class="col-9"><p style="line-height:1.4em; font-size:0.9em; color:#222">Ecuador logró el tercer lugar en el Panamericano de Levantamiento de Pesas</p></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center" style="color:#333; background:#eee; padding:30px 15px; line-height:1.6em; margin-bottom:15px;">
                    <img src="/images/icons/whatsapp2.svg" style="width:48px; margin:0 auto 10px auto">
                    <p class="headline3">Comunícate con El Oriente a través de WhatsApp</p>
                    <p>Conviértete en reportero. Envíanos tú material al <strong>5939 8016 3921</strong> (No recibimos llamadas)</p>
                    <a href="https://wa.me/593980163921" target="_blank" class="btn btn-success" style="margin:15px">Envianos tu Mensaje</a>
                </div>
            </div>
            <a href="https://news.google.com/publications/CAAqBwgKMPfClQswuKerAw/sections/CAQqEAgAKgcICjD3wpULMLinqwMwn9nJBg?hl=en-US&amp;gl=US&amp;ceid=US%3Aen" target="_blank">
                <img src="/eloriente/images/google-news.png" alt="Síguenos en Google News" style="width:100%;">
            </a>
        </div>

    </div>
</div>
@endsection
