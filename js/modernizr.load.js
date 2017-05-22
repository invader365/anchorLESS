
$(function () {
    Modernizr.load([
        // Css3pie
        // {
        //     test: Modernizr.borderradius && Modernizr.boxshadow && Modernizr.cssgradients,
        //     nope: ['../js/ie/pie.js'],
        //     callback: function() {
        //         if (window.PIE) {
        //             $('.button, select, textarea').each(function() {
        //                 PIE.attach(this);
        //             });
        //         }
        //     }
        // },
        
        // Media queries for ie
        {
            test: Modernizr.mq('only all'),
            nope: ['../javascript/ie/respond.js']
        },

        // Fastclick
        {
            test: Modernizr.touch,
            yep: ['../javascript/libs/fastclick.js'],
            callback: function() {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $('a, button, .summary, table').addClass('fastclick');
                }

                window.addEventListener('load', function() {
                    new FastClick(document.getElementByClassName('fastclick'));
                }, false)
            }
        },
        
        // Touchswipe
        // {
        //     test: Modernizr.touch,
        //     yep: ['../js/libs/touchswipe.js'],
        //     callback: function() {
        //         $("header").swipe({
        //             swipeStatus:function(event, phase, direction, distance, duration, fingers) {
        //                 if (phase=="move" && direction =="right") {
        //                      $('html').addClass('js-toggle');
        //                      return false;
        //                 }
        //                 if (phase=="move" && direction =="left") {
        //                      $('html').removeClass('js-toggle');
        //                      return false;
        //                 }
        //             }
        //         });
        //     }
        // }
    ]);
});