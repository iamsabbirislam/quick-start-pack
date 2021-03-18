(function ($) {
    "use strict";

    // Preloader
    $(window).load(function() {
        $(".preloader").fadeOut(500);
    });

    // Meanmenu
	$('.mainmenu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu'
    });
    
    // Slick Nav
    $('.mainmenu').slicknav({
        prependTo: '.mobile-menu'
    });

    //Slider
    $(".hero-area").owlCarousel({
        loop:true,
        margin:0,
        autoplay: false,
        nav:true,
        dots: false,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //Style With Animate CSS
    $(".hero-area").on("translate.owl.carousel", function() {
        $('.slider-content h1').removeClass("animate__animated animate__bounceInDown").css("opacity", "0");
        $('.slider-content p').removeClass("animate__animated animate__bounceInUp").css("opacity", "0");
    });
    $(".hero-area").on("translated.owl.carousel", function() {
        $('.slider-content h1').addClass("animate__animated animate__bounceInDown").css("opacity", "1");
        $('.slider-content p').addClass("animate__animated animate__bounceInUp").css("opacity", "1");
    });

    //Nice Select
    $('select').niceSelect();

    //Date Picker
    var example = flatpickr('#flatpickr');

    // Contact form validation
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 10
            },
            email: "required",
            subject: {
                required: true,
                minlength: 20
            },
            message: {
                required: true,
                minlength: 40
            },
        }
    });


    // Mailchimp
    if ($('.mailchimp').length > 0) {
        /*  MAILCHIMP  */
        $('.mailchimp').ajaxChimp({
        language: 'es',
        callback: mailchimpCallback,
        url: "https://gmail.us5.list-manage.com/subscribe/post?u=abf6471b8d5d6292f42b8f826&amp;id=5941ad763f" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
        $('.subscription-error').fadeOut(500);

        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Please Wait...',
        0: 'Thank you for subscribing!',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

    //  Scrollup
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300', 
        topSpeed: 300, 
        animation: 'fade',
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fas fa-angle-up"></i>', 
        activeOverlay: false, 
    });
    
}) (jQuery);