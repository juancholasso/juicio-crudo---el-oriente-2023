  $(document).ready(function() {
    var $owl = $("#carusel_single");
    $owl.owlCarousel({
      items: 1,
      navigation : true,
      slideSpeed : 300,
      autoHeight: true,
      paginationSpeed : 400,
      rewindNav: true,
      nav: true,
      dots: true,
      responsiveClass: false,
      singleItem: true,
      lazyLoad:true,
    });
setTimeout(function() {
  console.log($('.owl_image:first').css('height'));
      $('.owl-height').css('height', $('.owl_image:first').css('height'));
    }, 1000);

  });
