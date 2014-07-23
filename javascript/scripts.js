/*======================================================== scripts  */

    function alternate_rows() {
      $('tr:nth-child(odd), option:nth-child(odd)').addClass('odd');
    };

    alternate_rows();

    //
    // Horizontal tabs

    $('.tabset .summary').click(function(event){
        $('.tabset .summary').removeClass('active'); // all summaries
        $('.tabset .summary').next('.details').removeClass('animate fadeIn'); // all summaries
        // $(this).siblings('.details').hide();
        $.when($(this).next('.details').fadeIn()).done(function() {
             stickyFooter();
        });
        $(this).next('.details').addClass('animate fadeIn').fadeIn();
        $(this).addClass('active');

        // alert('sup');
        
        event.preventDefault();
    });

    // accordions
    $('.accordion .summary').click(function(event) {
        $('.accordion .summary').next().slideUp();
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
        } else {
            $('.accordion .summary').removeClass('active');
            $(this).addClass('active');
            $(this).next().slideDown();
        }
        
        event.preventDefault();
    });

    // Check all from the same list
    $('.checkall').click(function() {
        var thisclass = $(this).parents('.details').attr("class").split(" ");
        var checkboxes = '.' + thisclass[thisclass.length - 1] + ' tr';
        var checkall = $(this).find('input').prop('checked');

        if(checkall === true) {
            $(checkboxes).addClass('selected');
            $(checkboxes).find('input').prop('checked', true);
        } else {
            $(checkboxes).removeClass('selected');
            $(checkboxes).find('input').prop('checked', false);
        }

        update_unoforms($(checkboxes).find('input'));
    });

    // Fix top position
    if ($('.scrollfix').length) {
        var sticker_position = $('.scrollfix').offset().top;
    };

    $(window).on('scroll', function () {
        var top_position = $(window).scrollTop();
         
        if (top_position > sticker_position) {
            $('.scrollfix').addClass('active');
        } else {
            $('.scrollfix').removeClass('active');
        }
    });

    //js-toggle
    $('header .js-navbar').click(function(event) {
        $('html').toggleClass('js-toggle');
        event.stopPropagation();
    });

    $('header, main, footer').click(function() {
        $('html').removeClass('js-toggle');
    });

    //
    //          Table Wrapper
    //
    // function wrap_table() {
    //     $('.table').each(function() {
    //       //$(this).addClass('content');
    //       $(this).wrap('<div class="scrollable">');
    //       $(this).wrap('<div>');
    //     });

    //     scroll_wrapper();
    // };
    //
    //          Graphs Wrapper
    //
    function wrap_elements() {
        $('.graph, .b-viewmodify table').each(function() {
          $(this).wrap('<div class="scrollable">');
        });
    };

    function scroll_wrapper() {
        $('table, .graph').each(function() {
            var parentDiv = $(this).parent();
            var parentWidth = parentDiv.width();

            if ($(this).width() > parentWidth) {
                parentDiv.parent().addClass('has-scroll');
            } else {
                parentDiv.parent().removeClass('has-scroll');
            }
        });
    };

    wrap_table();
    wrap_elements();

    $(window).on('resize orientationchange', function () {
        scroll_wrapper();
    });

    //
    // Close Button

    function add_close() {
        $('.js-close').append('<button class="button close">Close</button>');
    };
    function close_button() {
        $(".button.close").click(function() {
           $(this).parent().hide();
        });
    };

    add_close();
    close_button();

    //
    // Disable Click '[href^=#]'

    $('.disabled').click(function(event) {
          event.preventDefault();
    });


/*    var magnificPopupEnabled = myFunction($('#any'));

    function myFunction(obj) {
        if(obj.hasClass=="disabled"){
            return true;
        } else {
            return false;
        }
    }*/

    // Magnific popup
    if ($('.magnific').length) {
        
        $('.magnific').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in' /* associate with main class */
/*            disableOn: function() {
                if(magnificPopupEnabled) { return true; } 
                return false;
            }*/
        }); 
    };

    //close popup
    if ($('.magnific').length) {
        $('.actions .close-popup, .btn-close').click(function() {
              var magnificPopup = $.magnificPopup.instance;
              magnificPopup.close();
        });
    }

    // Datetime
    Date.prototype.today = function() {
        return (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+this.getFullYear() 
    };

    Date.prototype.timeNow = function() {
         return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    };

    // Sticky footer
    function stickyFooter() {
        var windHeight  = $(window).height();
        var mainHeight  = $('main').height();
        var footHeight  = $('footer').height();
        var mainTop     = $('main').offset().top;
        var mainsHeight = $('main > section').height();
        var bodyHeight  = mainsHeight + mainTop + footHeight;
        var newmHeight  = windHeight - mainTop - footHeight;
    
        if (windHeight >= bodyHeight) {
            $("main section").css("min-height", newmHeight + "px");
        }
    }

    stickyFooter();

    $(window).resize(stickyFooter);
    $(window).on('scroll', function () {
        stickyFooter();
    });

    // Fixed table head
    function fixed_thead(current) {
        $(current + ".details table").clone().removeAttr('id').appendTo(current + " .toolbar").wrap('<div class="scrollable nomargin"><div>');

        $(current + ' .scrollable div').scroll(function() {
            var length = $(this).scrollLeft();
            var tablen = $(this).find('table').width();
            var parlen = $(this).parent().width();

            $(current + ' .scrollable div').scrollLeft(length);
            //$(this).find('table tbody tr:nth-child(2) td').html(length);
            //$(this).find('table tbody tr:nth-child(3) td').html(diflen);

            if (length >= tablen - parlen) {
                $(this).parent('.scrollable').removeClass('has-scroll');
            } else {
                $(this).parent('.scrollable').addClass('has-scroll');
            }
        });
    }

    // Short table urls
    function short_urls() {
        $('table .urls').each(function() {
          var tdContent = $(this).html();

          $(this).html('<span class="overflow" title="' + tdContent + '">' + tdContent + '</span>');
        });
    };

    short_urls();