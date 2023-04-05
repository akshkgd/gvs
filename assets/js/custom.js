(function($) {

    'use strict';
    // Mean Menu
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Header Sticky, Go To Top JS
    $(window).on('scroll', function() {
        // Header Sticky JS
        if ($(this).scrollTop() > 150) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        };

        // Go To Top JS
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    // Language-switcher
    $(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

    // Partner Slider JS
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1200: {
                items: 6,
            },
        },
    });

    // Causes Slider JS
    $('.causes-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-line'></i>",
            "<i class='ri-arrow-right-line'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    // Causes Slider Two JS
    $('.causes-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-line'></i>",
            "<i class='ri-arrow-right-line'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    // Testimonial Slider JS
    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-line'></i>",
            "<i class='ri-arrow-right-line'></i>",
        ],
    });

    // Related Causes Slider JS
    $('.related-causes-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
    });

    // Click Event JS
    $('.go-top').on('click', function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 50);
    });

    // Count Time JS
    function makeTimer() {
        var endTime = new Date("november  30, 2021 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() {
        makeTimer();
    }, 300);

    // Preloader
    $(window).on('load', function() {
        $('.preloader').addClass('preloader-deactivate');
    })

    // Subscribe form JS
    $(".newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter, #validator-newsletter-2").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
    }

    // AJAX MailChimp JS
    $(".newsletter-form").ajaxChimp({
        url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // WOW JS
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }

    // Tabs 
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li').on('click', function(g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').fadeOut();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();
        g.preventDefault();

    });

    // Popup Video JS
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    // Gallery Popup JS
    $('.gallery-popup').each(function() {
        $(this).magnificPopup({
            delegate: '.img-view',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // Others Option For Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function() {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // FAQ Accordion JS
    $('.accordion').find('.accordion-title').on('click', function() {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    $(".bar").each(function() {
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
        }, 2000)
    });

})(jQuery);