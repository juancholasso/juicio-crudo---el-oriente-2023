new WOW().init();

$(window).scroll(function() {
	  if ($(this).scrollTop() > 200){
		  $('.nav_holder').addClass("sticky");
		  $('.menu_container').addClass("sticky");
	  }
	  else{
		  $('.nav_holder').removeClass("sticky");
		  $('.menu_container').removeClass("sticky");
	  }
  });
  
  $(window).scroll(function() {
	  if ($(this).scrollTop() > 700){
		  $('.scroller_back').addClass("sticky");
	  }
	  else{
		  $('.scroller_back').removeClass("sticky");
	  }
  });

$('[data-toggle="tooltip"]').tooltip()

function scrollNav() {
  $('.scroller').click(function(){  
    //Toggle Class
    //$(".active").removeClass("active");      
    //$(this).closest('li').addClass("active");
    //var theClass = $(this).attr("class");
    //$('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 20
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

scrollNav();

$('.toggle').click(function() {
   $('.toggle').toggleClass('active');
   $('#overlay').toggleClass('open');
  });

		$('.lightbox').click(function () {
		   var _this_=$(this);
		   $.fancybox([{
						href : '#'+_this_.attr("rel"),
						maxWidth    : 800,
						maxHeight   : 600,
						helpers: {
						  overlay: {
							locked: false
						  }
						}
					  }
			]);
		});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200){
			$('.stickylink').addClass("sticky");
			$('.navbar').addClass("sticky");
		}
		else{
			$('.stickylink').removeClass("sticky");
			$('.navbar').removeClass("sticky");
		}
	});

	$(".a_youtube").fancybox({
    type:"iframe",
      maxWidth    : 1360,
      maxHeight   : 780,
      fitToView   : false,
      width       : '90%',
      height      : '90%',
	  transitionIn : 'fade',
	  speedIn	  : 300,
	  transitionOut : 'fade',
      autoSize    : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none',
      helpers: {
        overlay: {
          locked: false
        }
      },
      /*beforeClose: function() {
         vid.autoplay = true;
         vid.load();
         console.log('onclosed');
      }*/
    });
	
	

	/*jQuery(function(){
			$('.counter').counterUp({
			  delay: 30,
			  time: 1500
			});
	
		 });*/

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
	  var autoplay1 = true;
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	  
      // 3. This function creates an <iframe> (and YouTube player)
		//    after the API code downloads.
		var player1;
		var player2;
      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
          height: '560',
          width: '315',
		  videoId: 'Bz-UExXn9uI',
		  playerVars: {rel: 0, showinfo: 0, ecver: 2},
          events: {
            'onReady': onPlayerReady1,
          }
        });
		  player2 = new YT.Player('player2', {
			height: '100%',
			width: '100%',
			videoId: '66vstRsBzlw',
			playerVars: {rel: 0, showinfo: 0, ecver: 2},
			events: {
			  'onReady': onPlayerReady2,
			}
		  });
      }

      // 4. The API will call this function when the video player is ready. 
      function onPlayerReady1(event) {
		$(window).scroll(function(){
			if (isInView($('.after-video-1'))){
				player1.pauseVideo();
			}
			if (isInView($('.before-video-1'))){
				player1.pauseVideo();
			}
			/*
			if (autoplay1){
				if (isInView($('.before-video-1'))){
					player1.playVideo();
				}
				autoplay1 = false;
			}
			*/
      		//fire whatever you what 
		})
	  }
	  

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady2(event) {
		$(window).scroll(function(){
			if (isInView($('.after-video-2'))){
				player2.pauseVideo();
			}
			
			if (isInView($('.before-video-2'))){
				player2.pauseVideo();
			}
			
		})
      }