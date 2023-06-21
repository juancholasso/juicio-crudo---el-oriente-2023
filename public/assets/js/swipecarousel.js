    /**
     * requestAnimationFrame and cancel polyfill
     */
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
                    window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                        timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());


    /**
    * super simple carousel
    * animation between panes happens with css transitions
    */
    function Carousel(element, options)
    {

        // Default options:
        default_options = {
          browseWithKeys: true,
          browsePrev: 37,
          browseNext: 39,
          thumbs: false,
          onBeforeShowPane: false,
          onAfterShowPane: false
        }

        this.options = jQuery.extend(default_options , options);
        // End of default options

        var that = this;
        var $ = jQuery;
        element = $(element);

        var containers = $(".swipecarousel-viewport", element);
        
        var container_panes = {};
        var container_pane_width = {};
        var container_pane_count = {};
        
        var $ref_container = false;
        var ref_container_index = false;

        containers.each(function(i){
          container_panes[i] = $(".swipecarousel-item", this); 
          container_pane_width[i] = 0;
          container_pane_count[i] = container_panes[i].length;
          var $this = $(this);
          if(!$this.data('parallax_factor')) {
            $ref_container = $this;
            ref_container_index = i;
          }
        });

        var current_pane = 0;

        var setPaneDimensionsTimeout = false;
        /**
         * initial
         */
        this.init = function() {
            setPaneDimensions();

            $(window).on("load resize orientationchange", function() {
                if(setPaneDimensionsTimeout) clearTimeout(setPaneDimensionsTimeout);
                setPaneDimensionsTimeout = setTimeout(setPaneDimensions, 0);
                that.showPane();
                //updateOffset();
            });

            // Look for prev/next 
            that.nextBtn = element.find(".swipecarousel-next");
            that.prevBtn = element.find(".swipecarousel-prev");
            that.nextBtn.click(function(){ that.next(); });
            that.prevBtn.click(function(){ that.prev(); }).fadeOut();

            if(container_pane_count[0] < 2){
              element.find(".swipecarousel-next").hide();
              element.find(".swipecarousel-prev").hide();
              if(that.options.thumbs_container && that.options.thumbs_container.hide){
                that.options.thumbs_container.hide();
              }
              if(that.options.thumbs && that.options.thumbs.hide){
                that.options.thumbs.hide();
              }
            }

            if(this.options.browseWithKeys){
              $(document).bind('keydown', function(ev) {
                if(!that.keypressed && ev.which == that.options.browsePrev) that.prev(); 
                if(!that.keypressed && ev.which == that.options.browseNext) that.next();
                that.keypressed = true; 
              });

              $(document).bind('keyup', function(ev) {
                that.keypressed = false; 
              });
            }

            if(this.options.thumbs){
              $(this.options.thumbs[0]).addClass('active');

              this.options.thumbs.each(function(i){
                var $thumb = $(this);
                $thumb.data("swipe-index", i);
                $thumb.click(function(ev){ that.showPane($(this).data("swipe-index")); });
              }); 
            }

            if(this.options.oninitialize){
              this.options.oninitialize(element);
            }
        };

        function adaptContainerHeight() {
            containers.each(function(i){
                $(containers[i]).height(   $(container_panes[i][current_pane]).height()   );
            });
        }

        /**
         * set the pane dimensions and scale the containers
         */
        function setPaneDimensions() {
          var elem = element;
          containers.each(function(i){
            var $cont = $(containers[i]);

            $cont.hide();

            var parallax_factor = $cont.data('parallax-factor');
            parallax_factor = parallax_factor ? parallax_factor : 1;
            //console.log("parallax-factor: ", parallax_factor);

            container_pane_width[i] = element.width() * parallax_factor;
            
            var pane_width = container_pane_width[i];

            container_panes[i].each(function() {
                $(this).width(pane_width);
                //console.log("width: " + pane_width);
            });

            $cont.width(pane_width * container_pane_count[i]);
            
            //finally, apply window width to given elements:
            var resizeme = $(".swipecarousel-window-width").width($('body').width());

            //Force Chrome to redraw, refer to: 
            //http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes/3485654#3485654
            elem[0].style.display='none';
            elem[0].offsetHeight;
            elem[0].style.display='block';
            
            $cont.show();
            
            $(containers[i]).height(   $(container_panes[i][current_pane]).height()   );

          });
        };


        /**
         * show pane by index
         * @param   {Number}    index
         */
        this.showPane = function( index ) {
            if(that.options.onBeforeShowPane){
              that.options.onBeforeShowPane(index, that);
            }
            
            if(index == undefined) {
              index = current_pane;
            }

            // between the bounds
            index = Math.max(0, Math.min(index, container_pane_count[ref_container_index]-1));
            current_pane = index;

            var offset = -((100/container_pane_count[ref_container_index])*current_pane);
            setContainerOffset(offset, true);
            if(that.options.thumbs){
              //console.log(index);
              that.options.thumbs.removeClass('active');
              $(that.options.thumbs[index]).addClass('active');
            }

            containers.each(function(i){
                $(containers[i]).height(   $(container_panes[i][index]).height()   );
            });

            if(that.options.onAfterShowPane){
              that.options.onAfterShowPane(index, that);
            }
            if(container_pane_count[0] == current_pane+1){
              that.nextBtn.fadeOut();
            } else {
              that.nextBtn.fadeIn();
            }
            if(0 == current_pane){
              that.prevBtn.fadeOut();
            } else {
              that.prevBtn.fadeIn();
            }
        };


        function setContainerOffset(percent, animate) {

          if(animate) {
            containers.addClass("animate");
          } else {
            containers.removeClass("animate");
          }
          
          //console.log(containers);
          containers.each(function(i){
            var $cont = $(this);

            if(Modernizr.csstransforms3d) {
              console.log("Using translate3d");
              $cont.css("transform", "translate3d("+ percent +"%,0,0) scale3d(1,1,1)");
            }
            else if(Modernizr.csstransforms) {
              console.log("Using translate");
              $cont.css("transform", "translate("+ percent +"%,0)");
            }
            else {
              console.log("Using animate");
              var px = ((container_pane_width[i]*container_pane_count[i]) / 100) * percent;
              if(animate) {
                $cont.animate({"left": px});
              } else {
                $cont.css({"left": px});
              }
            }
          })
        }

        this.next = function() { return this.showPane(current_pane+1, true); };
        this.prev = function() { return this.showPane(current_pane-1, true); };

        this.preventClick = function(ev) {
          if(that.preventClickBinded){
            console.log("Click Prevented");
            ev.preventDefault();
          } else {
            console.log("Click Not Prevented");
          }
        }

        this.preventClickBinded = false;

        element.click(this.preventClick);

        element.bind("dragstart", function(e) {
            if (e.target.nodeName.toUpperCase() == "IMG") {
                return false;
            }
        });

        element.css({'MozUserSelect':"none"});

        function handleHammer(ev) {
          //console.log("handleHammer");
            // disable browser scrolling
            //ev.gesture.preventDefault();

            //console.log(that);
            
            //console.log(ev.type);
            

            switch(ev.type) {
                case 'dragup':
                case 'dragdown':
                     window.scrollTo(0,window.scrollY-ev.gesture.deltaY);
                     break;
                case 'dragright':
                case 'dragleft':
                    if(!that.preventClickBinded) that.preventClickBinded = true;
                    ev.gesture.preventDefault();
                    // stick to the finger
                    var pane_offset = -(100/container_pane_count[ref_container_index])*current_pane;
                    var drag_offset = ((100/container_pane_width[ref_container_index])*ev.gesture.deltaX) / container_pane_count[ref_container_index];

                    // slow down at the first and last pane
                    if((current_pane == 0 && ev.gesture.direction == Hammer.DIRECTION_RIGHT) ||
                        (current_pane == container_pane_count[ref_container_index]-1 && ev.gesture.direction == Hammer.DIRECTION_LEFT)) {
                        drag_offset *= .4;
                    }

                    setContainerOffset(drag_offset + pane_offset, false);
                    break;

                case 'swipeleft':
                    if(!that.preventClickBinded) that.preventClickBinded = true;
                    that.next();
                    ev.gesture.stopDetect();
                    that.timeout = setTimeout(function() { that.preventClickBinded = false; }, 200);
                    break;

                case 'swiperight':
                    if(!that.preventClickBinded) that.preventClickBinded = true;
                    that.prev();
                    ev.gesture.stopDetect();
                    that.timeout = setTimeout(function() { that.preventClickBinded = false; }, 200);
                    break;

                case 'release':
                    // more then 50% moved, navigate
                    if(Math.abs(ev.gesture.deltaX) > container_pane_width[ref_container_index]/2) {
                        if(ev.gesture.direction == 'right') {
                            that.prev();
                        } else {
                            that.next();
                        }
                    }
                    else {
                        that.showPane(current_pane, true);
                    }
                    that.timeout = setTimeout(function() { that.preventClickBinded = false; }, 200);
                    break;
            }
        }

        element.hammer({ prevent_default: false, prevent_mouseevents: false, drag_lock_to_axis: false })
            .on("release dragleft dragright dragup dragdown swipeleft swiperight", handleHammer);
    }
