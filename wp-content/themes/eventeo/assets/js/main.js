/**
*
* --------------------------------------------------------------------
*
* Template : eventeo - Event & Conference  WordPress Theme
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* --------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    var headerinnerHeight = $(".header-inner").innerHeight();

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < headerinnerHeight) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    }); 

    $(".widget_nav_menu li a").filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();

    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".sidenav").toggleClass("nav-active-menu-container");
    });
    
    $(".nav-close-menu-li > a").on('click', function(event){
        $(".sidenav").toggleClass("nav-active-menu-container");
        $(".content").toggleClass("inactive-body");
    });

    // Smooth About
    if ($('.smoothAbout').length){
        $(".smoothAbout").on(' click ', function() {
            $('html, body').animate({
                scrollTop: $("#rs-about").offset().top
            }, 1000);
        });
    }

    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
        });
     });


	// video 
	if ($('.player').length) {
		$(".player").YTPlayer();
	}
    if ($('ul#rsflicker').length) { 
        $('ul#rsflicker').jflickrfeed({        
            limit: flicker_data.limit_f,
            qstrings: {
                id: flicker_data.flicker_id
            },
            itemTemplate: '<li><a href=\"http://www.flickr.com/photos/'+flicker_data.flicker_id+'"\"><img src=\"{{image_s}}\" alt=\"{{title}}\" /></a></li>'
        });
    }
    //Feature Left
    $('.image-carousel').owlCarousel({
        loop: true,
        items: 1,
        mouseDrag: true,
        dotsContainer: '#item-thumb',  
    });

    //search 

     $('.sticky_search').on('click', function(event) {

        $('.sticky_form').toggle('show');

    });


   $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
    });

     //woocommerce quantity style
    if ( ! String.prototype.getDecimals ) {
          String.prototype.getDecimals = function() {
              var num = this,
                  match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              if ( ! match ) {
                  return 0;
              }
              return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
          }
      }
    // Quantity "plus" and "minus" buttons
    $( document.body ).on( 'click', '.plus, .minus', function() {
        var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
            currentVal  = parseFloat( $qty.val() ),
            max         = parseFloat( $qty.attr( 'max' ) ),
            min         = parseFloat( $qty.attr( 'min' ) ),
            step        = $qty.attr( 'step' );

        // Format values
        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
        if ( max === '' || max === 'NaN' ) max = '';
        if ( min === '' || min === 'NaN' ) min = 0;
        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

        // Change the value
        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( currentVal >= max ) ) {
                $qty.val( max );
            } else {
                $qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        } else {
            if ( min && ( currentVal <= min ) ) {
                $qty.val( min );
            } else if ( currentVal > 0 ) {
                $qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        }

        // Trigger change event
        $qty.trigger( 'change' );
    }); 

    //show hide floating bar
    $('.floating-icons').on('click', function(event) {       

        $('.floating-area').toggleClass('hidebar');
        $(this).toggleClass('icon-change');

    });
    var windowHeight = $( window ).height();
    var floatingIcon = (windowHeight - 100);
    var floatingPosition = (windowHeight/2);
    $('.menu-sticky .floating-area').css('top', (floatingPosition));
    $('.menu-sticky .floating-icons').css('top', (floatingIcon));

    // Get a quote popup

    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, //delay removal by X to allow out-animation
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });


    $(".rs-heading h3").each(function() {
  
	  // Some Vars
	  var elText,
	      openSpan = '<span class="first-word">',
	      closeSpan = '</span>';
	  
	  // Make the text into array
	  elText = $(this).text().split(" ");
	  
	  // Adding the open span to the beginning of the array
	  elText.unshift(openSpan);
	  
	  // Adding span closing after the first word in each sentence
	  elText.splice(2, 0, closeSpan);
	  
	  // Make the array into string 
	  elText = elText.join(" ");
	  
	  // Change the html of each element to style it
	  $(this).html(elText);
	});
	


	 // team init
    $(".team-carousel").each(function() {
            var options = $(this).data('carousel-options');
            $(this).owlCarousel(options); 
    });
	
	 // partner init

       $('.gallery-slider').slick({
       slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        centerPadding: '228px',
        arrows: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerPadding: '188px',
            }
        }, {
            breakpoint: 970,
            settings: {
                arrows: true,
                centerPadding: '144px',
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerPadding: '0px',
            }
        }, {
            breakpoint: 350,
            settings: {
                arrows: false,
                centerPadding: '0px',
                dots: true,
                slidesToShow: 1,
            }
        }, ]
    });


    // partner init

    $('.client-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        centerPadding: '228px',
        arrows: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                centerPadding: '188px',
            }
        }, 
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 3,
                centerPadding: '144px',
            }
        }, 
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerPadding: '0px',
            }
        }, 
        {
            breakpoint: 450,
            settings: {
                arrows: false,
                centerPadding: '0px',
                dots: true,
                slidesToShow: 1,
            }
        },]
    });

    // testimonial init   
    $('.testi-carousel').slick({
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          focusOnSelect: true,
          prevArrow: '<div class="prev"><i class="icofont icofont-bubble-left"></i></div>',
          nextArrow: '<div class="next"><i class="icofont icofont-bubble-right"></i></div>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]
        });
		
    
    $(".testi-item  a.tab").on('click', function(e){
          e.preventDefault();
          slideIndex = $(this).index();
          $( '.testi-carousel' ).slickGoTo( parseInt(slideIndex) );
        });

  
    
    // Portfolio Single Carousel
    if ($('.portfolio-carousel').length) {
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            nav:true,
            autoHeight:true,
            items:1
        })
    }
    
    // blog init

     $(".blog-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });
    
     //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    }); 
    //type writer
        $(".rs-banner .cd-words-wrapper p:first-child").addClass("is-visible");


    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });

     });

  //preloader
    $(window).on( 'load', function() {
        $("#loading").delay(1500).fadeOut(500);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(500);
    })

    if($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on( 'click', function(){
         $('.rs-menu').css('opacity', '1');
         $('.rs-menu').css('z-index', '1');
     });
    }
    })

    // image loaded portfolio init
    if ($('.grid').length) {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    }
            
    // portfolio Filter
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // image loaded sponsor init
     if ($('.parter-grid').length) {
        $('.sponsor-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.parter-grid').isotope({
            itemSelector: '.single-sponsor',
            percentPosition: true,
            masonry: {
                columnWidth: '.single-sponsor',
            }
        });
    }

            
    // sponsor Filter
    $('.sponsor-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

     // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });
		
    // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });

    //CountDown Timer
    var CountTimer = $('.CountDownTimer');
    if(CountTimer.length){ 
        $(".CountDownTimer").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: "#ffffff",
            circle_fg_color: "#ffffff",
            time: {
                Days:{
                    color: "#fff"
                },
                Hours:{
                    color: "#fff"
                },
                Minutes:{
                    color: "#fff"
                },
                Seconds:{
                    color: "#fff"
                }
            }
        }); 


    }

   //CountDown Timer
    var CountTimer = $('.CountDownTimer3');
    if(CountTimer.length){ 
        $(".CountDownTimer3").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: events_data.ev_circle_bg_color,
            time: {
                Days:{
                    color: events_data.ev_days_color
                },
                Hours:{
                    color: events_data.ev_hours_color
                },
                Minutes:{
                    color: events_data.ev_min_color
                },
                Seconds:{
                    color: events_data.ev_sec_color
                }
            }
        }); 
       
    } 


    //CountDown Timer
    var CountTimer = $('.CountDownTimer4');
    if(CountTimer.length){ 
        $(".CountDownTimer4").TimeCircles({
            
        }); 
    }

    //Single Menu Scroll Css
    if ($('.page-template-page-single-php .nav').length) {
        $('#onepage_menu li:first-child').addClass('active');
        $('ul#onepage_menu a').on('click', function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              $('#onepage_menu li').removeClass('active');
              $(this).parent('li').addClass('active');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 100)
                }, 1000, "easeInOutExpo");
                return false;
              }
            }
        });

        var navChildren = $("#onepage_menu li.menu-item").children("a");
        var aArray = [];
        for (var i = 0; i < navChildren.length; i++) {
            var aChild = navChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }

        $(window).on("scroll", function(){
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var secPosition = $(theID).offset().top;
                secPosition = secPosition - 135;
                var divHeight = $(theID).height();
                divHeight = divHeight + 90;
                if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                    $("#onepage_menu a[href='" + theID + "']").parent().addClass("active");
                } else {
                    $("#onepage_menu a[href='" + theID + "']").parent().removeClass("active");
                }
            }
        });
    }


	
    // scrollTop init
	var win=$(window);
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });	

    $(".skew-style2, .skew-style3").prepend('<div class="sppb-row-overlay"></div>');
    $(".skew-style2, .skew-style3").append('<div class="vc_clearfix"></div>');
    
    $(".skew-style-curve").prepend('<div class="sppb-row-overlay"></div>');

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".sidenav .menu li").on('click', function() {
        $(this).children("ul.sub-menu").slideToggle();
    }); 
    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" ); 


    // Vertical Timeline 

    function VerticalTimeline( element ) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("js-cd-block");
        this.images = this.element.getElementsByClassName("js-cd-img");
        this.contents = this.element.getElementsByClassName("js-cd-content");
        this.offset = 0.8;
        this.hideBlocks();
    };

    VerticalTimeline.prototype.hideBlocks = function() {
        //hide timeline blocks which are outside the viewport
        if ( !"classList" in document.documentElement ) {
            return;
        }
        var self = this;
        for( var i = 0; i < this.blocks.length; i++) {
            (function(i){
                if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
                    self.images[i].classList.add("cd-is-hidden"); 
                    self.contents[i].classList.add("cd-is-hidden"); 
                }
            })(i);
        }
    };

    VerticalTimeline.prototype.showBlocks = function() {
        if ( ! "classList" in document.documentElement ) {
            return;
        }
        var self = this;
        for( var i = 0; i < this.blocks.length; i++) {
            (function(i){
                if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
                    // add bounce-in animation
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-is-hidden");
                    self.contents[i].classList.remove("cd-is-hidden");
                }
            })(i);
        }
    };

    var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
        verticalTimelinesArray = [],
        scrolling = false;
    if( verticalTimelines.length > 0 ) {
        for( var i = 0; i < verticalTimelines.length; i++) {
            (function(i){
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            })(i);
        }

        //show timeline blocks on scrolling
        window.addEventListener("scroll", function(event) {
            if( !scrolling ) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }

    

    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function(timeline){
            timeline.showBlocks();
        });
        scrolling = false;
    };
   
   // Vertical Timeline End
})(jQuery);