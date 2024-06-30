
/*

  headerFixed
  showsearch
  btnmenu
  dropdown
  accordion
  goTop
  counter
  tabs
  ranger
  dropOptionForm
  retinaLogos
  preload

*/

;(function($) {

  'use strict'

  var headerFixed = function() {
    if ( $('header').hasClass('header-fixed') ) {
        var nav = $('.sticky-area-wrap');
        if ( nav.length ) {
            var
            offsetTop = nav.offset().top,
            headerHeight = nav.height(),
            injectSpace = $('<div>', {
              height: headerHeight,
            }).hide().insertAfter(nav);
            $(window).on('load scroll', function(){
                if ( $(window).scrollTop() > offsetTop + headerHeight ) {
                    nav.addClass('fixed-hide');
                    injectSpace.show();
                } else {
                    nav.removeClass('fixed-hide');
                    injectSpace.hide();
                }

                if ( $(window).scrollTop() > 500 ) {
                    nav.addClass('fixed-show');
                } else {
                    nav.removeClass('fixed-show');
                }
            })
        }
    }     
  };

  var showsearch = function() {
      $(".icon-show-search").click(function(){
        $(".top-search").slideToggle("show");
      });
  }

  var btnmenu = function() {
    $('.btn-menu').on('click', function () {
      $(this).closest('#header-mobile').find('.canvas-nav-wrap').toggleClass('active');
    });
    
    $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function (e) {
      $(this).closest('#header-mobile').find('.canvas-nav-wrap').toggleClass('active');
    });


    $('.canvas').on('click', function () {
      $(this).closest('#header').find('.canvas-nav-wrap').toggleClass('active');
    });
    
    $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function (e) {
      $(this).closest('#header').find('.canvas-nav-wrap').toggleClass('active');
    });

    
    $(document).on('click', '#mainnav_canvas li.menu-item-has-children', function (e) {
      $(this).toggleClass('active').next('ul').slideToggle(1000);
      e.stopImmediatePropagation();
    });
  }

  var dropdown =function() {
    $('.dropdown-toggle').on('click', function () {
      $(".dropdown-menu").slideToggle("show")
    });
  }

  var accordion = function() {
    if ( $('div').hasClass('widget-accordion') ) {
      $(".accordion-items").on("click", ".accordion-heading", function () {
        $(this).toggleClass("active").next().slideToggle();
    
        $(".accordion-content").not($(this).next()).slideUp(300);
    
        $(this).siblings().removeClass("active");
      });
    }
    if ( $('div').hasClass('widget-accordion-1') ) {
      $(".accordion-items-1").on("click", ".accordion-heading-1", function () {
        $(this).toggleClass("active").next().slideToggle();
    
        $(".accordion-content-1").not($(this).next()).slideUp(300);
    
        $(this).siblings().removeClass("active");
      });
    }
    if ( $('div').hasClass('widget-accordion-2') ) {
      $(".accordion-items-2").on("click", ".accordion-heading-2", function () {
        $(this).toggleClass("active").next().slideToggle();
    
        $(".accordion-content-2").not($(this).next()).slideUp(300);
    
        $(this).siblings().removeClass("active");
      });
    }
  }

  var goTop = function() {
    $(window).scroll(function() {
      if ( $(window).scrollTop() > 500 ) {
          $('.go-top').addClass('show');
      } else {
          $('.go-top').removeClass('show');
      }
    }); 

    $('.go-top').on('click', function(e) {            
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 1000);
    });
  }

  var counter = function () {
    if ($('div').hasClass("widget-counter")) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".widget-counter-item").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".widget-counter-item")
              .find(".counter-number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed"),
                  formatter = $(this).data('formatter');
                $(this).countTo({
                  to: to,
                  speed: speed,
                  formatter: formatter,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  var tabs = function() {
    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent =document.querySelectorAll(".tabcontent");

    tabLinks.forEach(function(el) {
    el.addEventListener("click", openTabs);
    });

    function openTabs(el) {
        var btn = el.currentTarget; 
        var electronic = btn.dataset.electronic; 
        
        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + electronic).classList.add("active");
        
        btn.classList.add("active");
    }
  }

  var ranger = function () {
    if ($('div').hasClass("range-container")) {
    const range = document.getElementById('range')

    range.addEventListener('input', (e) => {
      const value = +e.target.value
      const label = e.target.nextElementSibling

      const range_width = getComputedStyle(e.target).getPropertyValue('width')
      const label_width = getComputedStyle(label).getPropertyValue('width')

      const num_width = +range_width.substring(0, range_width.length - 2)
      const num_label_width = +label_width.substring(0, label_width.length - 2)

      const max = +e.target.max
      const min = +e.target.min

      const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
      label.style.left = `${left}px`

      
      label.innerHTML = value
    })

    const scale = (num, in_min, in_max, out_min, out_max) => {
      return  (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
  }
  }

  var dropOptionForm = function () {
    if ($("select").length > 0) {
      $("select").niceSelect();
    }
  };

  var retinaLogos = function() {
    var retina = window.devicePixelRatio > 1 ? true : false;
      if(retina) {
          $('.header-mobile .logo').find('img').attr({src:'images/logox2.png',width:'137px',height:'50px'});
          $('.footer .footer-bottom .logo-bottom').find('img').attr({src:'images/logo-footerx2.png',width:'136px',height:'51px'});
      }
  };  

  var preload = function() {        
    $('#preload').fadeOut(2000,function () {
        $(this).remove();
    });
  };

  // Dom Ready
    $(function() { 
      headerFixed();
      showsearch();
      btnmenu();
      dropdown();
      accordion();
      goTop();
      counter();
      tabs();
      ranger();
      dropOptionForm();
      retinaLogos();
      preload();
    });
})(jQuery);


