$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

     /* mob button */
    $('.wrap-1 .mob').click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".wrap-1 .show").slideToggle();

    });
    $('.wrap-1 .mob').focusout(function (e) {
        e.preventDefault();
        $(".wrap-1 .show").slideUp();
        $(this).removeClass("active");

    });

    /* scroll to bottom*/

    $(window).scroll(function () {
        if (scrollY >= 2548) {
            $(".wrap-10 button").fadeIn();
        }
        else {
            $(".wrap-10 button").fadeOut();

        }


        $(".wrap-10 button").click(function (e) {
            e.preventDefault();
            $("  html , body").animate({ scrollTop: 0 })

        });
    });
    

     /* log-in form */

    $('.log-in').click(function (e) {
        e.preventDefault();
        $('body').append('<div class=overlay></div>');
        $('body').append('<div class=model></div>');
        $(".model").append('<button class="close">&times;</button>');

        var account = $(".account").html();
        $('.model').append(account);

        $(window).keydown(function (e) {
            if (e.which == 27) {
                $(".overlay ,.model").remove();
            }
        });
        $('.model .close, .overlay').click(function () {

            $(".overlay ,.model").remove();

        });

        /* signup */

        $(".signUp").click(function (e) {
            e.preventDefault();
            $('.model').remove();
            $('body').append('<div class=model></div>');
            $(".model").append('<button class="close">&times;</button>');
            var sign = $(".account-1").html();
            $('.model').append(sign);
            $(window).keydown(function (e) {
                if (e.which == 27) {
                    $(".overlay ,.model").remove();
                }
            });
            $('.model .close, .overlay').click(function () {
    
                $(".overlay ,.model").remove();
    
            });
            
        });

    });

})
