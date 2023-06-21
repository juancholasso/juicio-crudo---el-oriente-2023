function lightspotslider() {

    var glob = {
        cslide: 0,
        instance: "",
        settings: {}
    };

    this.init = function(settings) {
        glob.settings = settings;
        glob.instance = "#" + glob.settings.unique;
        
        glob.settings.total_slides = jQuery(glob.instance).find(".thumb").length;
        for (var i = 1; i <= glob.settings.total_slides; i++) {
            jQuery('<div class="thumb_mini_button">' + i + '</div>').appendTo(jQuery(glob.instance).find(".thumb_mini_buttons_container"));
        }
        
        if (glob.settings.mini_thumb_vis == "0") {
            jQuery(glob.instance).find(".thumb_mini_scroll").remove();
        }
        
        if (glob.settings.mini_thumb_vis > glob.settings.total_slides) {
            glob.settings.mini_thumb_vis = glob.settings.total_slides
        }
        
        if (glob.settings.thumb_vis > glob.settings.total_slides) {
            glob.settings.thumb_vis = glob.settings.total_slides
        }
        
        slider.bindControls();
        slider.setSliderDimensions();
        slider.display();
        
        if (glob.settings.autoslide > 0) {
            slider.autoslide();
        }
        
    };

    var slider = {
        bindControls: function() {

            jQuery(document).on("click", glob.instance + " .thumb_mini_button_down", function() {
                /* If no more images do nothing */
                if (glob.cslide + 1 >= glob.settings.total_slides) return;
                glob.cslide = glob.cslide + 1;
                

                /* Normal slide no conditions */
                slider.slideThumbs();
                slider.slideMiniThumbs();
                slider.fadeToImage();
            });

            jQuery(document).on("click", glob.instance + " .thumb_mini_button_up", function() {
                /* If no previous images do nothing */
                if (glob.cslide - 1 < 0) return;
                glob.cslide = glob.cslide - 1;
                
                /* Normal slide no conditions */
                slider.slideThumbs();
                slider.slideMiniThumbs();
                slider.fadeToImage();
            });

            jQuery(document).on("click", glob.instance + " .thumb, " + glob.instance + " .thumb_mini_button", function() {

                var oslide = glob.cslide;
                glob.cslide = jQuery(this).index();

                /* Slide downward */
                if (glob.cslide < oslide) {
                    slider.slideThumbs(glob.cslide - (glob.settings.thumb_vis - 1));
                    slider.slideMiniThumbs(glob.cslide - (glob.settings.mini_thumb_vis - 1));
                    slider.fadeToImage();
                    jQuery(glob.instance + " .thumb").removeClass("r");
                    jQuery(glob.instance + " .thumb_mini_button").removeClass("r");
                    jQuery(glob.instance + " .thumb:eq(" + glob.cslide + ")").addClass("r");
                    jQuery(glob.instance + " .thumb_mini_button:eq(" + glob.cslide + ")").addClass("r");
                    return;
                }
                
                /* If active */
                if (jQuery(this).hasClass("active")) {
                    if (jQuery(this).hasClass("r")) {
                        /* Slide upward */
                        slider.slideThumbs();
                        slider.slideMiniThumbs();
                    } else {
                        /* Slide downward */
                        slider.slideThumbs(glob.cslide - (glob.settings.thumb_vis - 1));
                        slider.slideMiniThumbs(glob.cslide - (glob.settings.mini_thumb_vis - 1));
                    }

                    jQuery(glob.instance + " .thumb:eq(" + glob.cslide + ")").toggleClass("r");
                    jQuery(glob.instance + " .thumb_mini_button:eq(" + glob.cslide + ")").toggleClass("r");
                    return;
                }

                /* Remove all upward slides */
                jQuery(glob.instance + " .thumb").removeClass("r");
                jQuery(glob.instance + " .thumb_mini_button").removeClass("r");

                /* Normal slide no conditions */
                slider.slideThumbs();
                slider.slideMiniThumbs();
                slider.fadeToImage();
            });
        },
                
        slideMiniThumbs: function(slidenum) {
            if (typeof slidenum === "undefined") {
                slidenum = glob.cslide;
            }

            if (slidenum + Number(glob.settings.mini_thumb_vis) > Number(glob.settings.total_slides)) {
                slidenum = jQuery(glob.instance + " .thumb:last").index() - Number(glob.settings.mini_thumb_vis) + 1;
            }

            if (slidenum < 0) {
                slidenum = 0;
            }

            jQuery(glob.instance + " .thumb_mini_buttons_container").stop().animate({
                top: -1 * slidenum * jQuery(glob.instance).find(".thumb_mini_button").height()
            },{
                easing:"easeOutExpo",
                duration: 1000
            });
        },
                
        slideThumbs: function(slidenum) {
            if (typeof slidenum === "undefined") {
                slidenum = glob.cslide;
            }

            if (slidenum + Number(glob.settings.thumb_vis) > Number(glob.settings.total_slides)) {
                slidenum = jQuery(glob.instance + " .thumb:last").index() - Number(glob.settings.thumb_vis) + 1;
            }

            if (slidenum < 0) {
                slidenum = 0;
            }

            jQuery(glob.instance + " .thumb_container").stop().animate({
                top: -1 * slidenum * (glob.settings.height / glob.settings.thumb_vis)
            },{
                easing:"easeOutExpo",
                duration: 1000
            });
        },
        setThumbDimensions: function(elements) {
            if (!elements) {
                elements = jQuery(glob.instance).find(".thumb");
            }

            elements.css({
                width: glob.settings.thumb_width,
                height: glob.settings.height / glob.settings.thumb_vis
            });
        },
        setSliderDimensions: function() {
            jQuery(glob.instance).css({
                width: glob.settings.width,
                height: glob.settings.height
            });

            jQuery(glob.instance).find(".lightspotslider_wrapper").css({
                width: glob.settings.width,
                height: glob.settings.height
            });

            jQuery(glob.instance).find(".view").css({
                width: glob.settings.image_width,
                height: glob.settings.height
            });

            jQuery(glob.instance).find(".control").css({
                width: glob.settings.thumb_width,
                height: glob.settings.height
            });

            jQuery(glob.instance).find(".thumb_mini_scroll").css({
                height: jQuery(glob.instance).find(".thumb_mini_button_down").height() + jQuery(glob.instance).find(".thumb_mini_button_up").height() + jQuery(glob.instance).find(".thumb_mini_button").height() * (glob.settings.mini_thumb_vis)
            });

            jQuery(glob.instance).find(".thumb_mini_scroll").css({
                top: glob.settings.height / 2 - jQuery(glob.instance).find(".thumb_mini_scroll").height() / 2
            });

            jQuery(glob.instance).find(".thumb_mini_buttons").css({
                height: jQuery(glob.instance).find(".thumb_mini_button").height() * glob.settings.mini_thumb_vis
            });

            slider.setThumbDimensions();
        },
        preloadImages: function(images, callback) {
            jQuery(glob.instance).find(".preloader .progress").width(0);
            jQuery(glob.instance).find(".preloader").css({
                top: 20,
                left: jQuery(glob.instance).width() / 2 - jQuery(glob.instance).find(".preloader").width() / 2
            }).show();
            var totalImages = images.length;
            var perImage = jQuery(glob.instance).find(".preloader").width() / totalImages;
            var progressWidth = jQuery(glob.instance).find(".preloader .progress").width();

            images.each(function() {
                if (navigator.userAgent.indexOf("MSIE")>0) {
                    // Because IE is not the crappiest browser in the world we'll disable its cache for these images...
                    //jQuery(this).attr("src", jQuery(this).attr("src")+"?"+Math.random());
                }
                
                jQuery(this).waitforimages(function() {
                    totalImages--;
                    progressWidth = progressWidth + perImage;
                    jQuery(glob.instance).find(".preloader .progress").stop().animate({
                        width: progressWidth
                    }, {
                        duration: 250,
                        complete: function() {
                            if (totalImages <= 0) {
                                // All images are loaded
                                jQuery(glob.instance).find(".preloader").hide();
                                callback.call();
                            }
                        }
                    });
                });
            });
        },
        fadeToImage: function() {

            /* If image is already active do nothing */
            if (jQuery(glob.instance).find(".thumb:eq(" + glob.cslide + ")").hasClass("active")) return;

            jQuery(glob.instance + " .thumb").fadeTo(0, 1).removeClass("active");
            jQuery(glob.instance + " .thumb_mini_button").removeClass("active");

            jQuery(glob.instance).find(".thumb:eq(" + glob.cslide + ")").fadeTo(250, 0.5).addClass("active");
            jQuery(glob.instance).find(".thumb_mini_button:eq(" + glob.cslide + ")").addClass("active");

            var clone = jQuery(glob.instance).find(".thumb:eq(" + glob.cslide + ") .image_container").clone();
            clone.fadeTo(0, 0);
            clone.appendTo(jQuery(glob.instance).find(".view"));
            clone.fadeTo(500, 1, function() {
                clone.prev().remove();
            });
        },
        display: function() {
            slider.preloadImages(jQuery(glob.instance).find("img"), function() {
                jQuery(glob.instance).find(".thumb:eq(" + glob.cslide + ")").fadeTo(0, 0.5).addClass("active");
                jQuery(glob.instance).find(".thumb_mini_button:eq(" + glob.cslide + ")").addClass("active");
                jQuery(glob.instance).find(".view").children().remove();
                jQuery(glob.instance).find(".thumb:eq(" + glob.cslide + ") .image_container").clone().appendTo(jQuery(glob.instance).find(".view"));
                jQuery(glob.instance).find(".lightspotslider_wrapper").fadeTo(0, 0);
                jQuery(glob.instance).find(".lightspotslider_wrapper").fadeTo(250, 1);
            });
        },
        autoslide: function() {
            var interval = setInterval(function() {
                if (glob.cslide + 1 >= glob.settings.total_slides) {
                    glob.cslide = 0;
                } else {
                    glob.cslide++;
                }
                jQuery(glob.instance + " .thumb:eq(" + glob.cslide + ")").trigger("click");
            }, parseInt(glob.settings.autoslide, 10) + 1000);
            jQuery(glob.instance).on("mouseover", function() {
                clearInterval(interval);
            });
            jQuery(glob.instance).on("mouseout", function() {
                clearInterval(interval);
                interval = setInterval(function() {
                    if (glob.cslide + 1 >= glob.settings.total_slides) {
                        glob.cslide = 0;
                    } else {
                        glob.cslide++;
                    }
                    jQuery(glob.instance + " .thumb:eq(" + glob.cslide + ")").trigger("click");
                }, parseInt(glob.settings.autoslide, 10) + 1000);
            });
        }
    };
}

jQuery(document).ready(function() {
    var i = 0;
    if (typeof lightspotsliderinstance !== "undefined") {
        while (lightspotsliderinstance[i]) {
            new lightspotslider().init(lightspotsliderinstance[i]);
            i++;
        }
    }
});