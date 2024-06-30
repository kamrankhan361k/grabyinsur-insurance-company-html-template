/**
* portfolioIsotope
*/

;(function($) {

    'use strict'    

    var portfolioIsotope = function() { 
        if ( $( '.portfolio-container' ).hasClass('show_filter_portfolio') ) {
            if ( $().isotope ) {           
                var $container = $('.portfolio-container');
                $container.imagesLoaded(function(){
                    $container.isotope({
                        itemSelector: '.item',
                        transitionDuration: '1s'
                    });
                });

                $('.portfolio-filter li').on('click',function() {                           
                    var selector = $(this).find("a").attr('data-filter');
                    $('.portfolio-filter li').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({ filter: selector });
                    return false;
                });            
            };
        };        
    };    
        
    // Dom Ready
    $(function() {            
        portfolioIsotope();   
    });

})(jQuery);