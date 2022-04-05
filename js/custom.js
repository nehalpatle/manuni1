$(document).ready(function() {
    $('.mainbanner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.banner-accomodation').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
    });

    $('.banner-spOffr').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3100,
        dots: true,
    });
    if (screen.width > 767) {
        var wheight = $(window).height();
        $(".jssorouter").css({
            "height": wheight
        });
        $(".jssorinner").css({
            "height": wheight
        });
        $("#jssor_1").css({
            "height": wheight
        });
        $(".jssorinner img").css({
            "height": wheight
        });
        $(".banner").css({
            "height": wheight
        });

        $(".map").css({
            "height": wheight + 120
        });
    }
    $(".quickContactBtn").click(function() {
        $(".toggle-main").fadeIn();
        $(".toggle-contact").fadeOut();
        $(".toggle-contact-message").fadeOut();
    });
    $(".toggle-main-close").click(function() {
        $(".toggle-main").fadeOut()
    });
    $("#showmessageDetails").click(function() {
        $(".toggle-contact").fadeIn();
        $(".toggle-main").fadeOut()
    });
    $(".contact-close").click(function() {
        $(".toggle-contact").fadeOut();
        $(".toggle-contact-message").fadeOut();
    });
    $("#showPhoneDetails").click(function() {
        $(".toggle-contact-message").fadeIn();
        $(".toggle-contact").fadeOut();
        $(".toggle-main").fadeOut()
    });

    $(".main-menu-toggleBtn").click(function() {
        $(".header-bottom .navbar-nav").slideToggle();
        $(".reservation").fadeOut();

    });
    if (screen.width > 767) {
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 80) {
                $("header").addClass("bgfff");
                $(".reverse-logo").fadeIn();


            } else {
                $("header").removeClass("bgfff");
                $(".reverse-logo").fadeOut();
                // $(".reservation").hide();

            }
        });
    }
    $(".reservationOnScrollMobile").click(function() {
        $(".reservation").slideToggle();
    });
    window.onscroll = function() {
        myFunction()
    };

    var header = document.getElementById("headerId");
    var bgfixed_mob = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= bgfixed_mob) {
            header.classList.add("bgfixed-mob");
            $(".main-menu").addClass("inner-head");

        } else {
            header.classList.remove("bgfixed-mob");
            $(".main-menu").removeClass("inner-head");
        }
    }
    if (screen.width > 767) {
        $(window).on("scroll", function() {
            var windowheight = $(window).height() - 68;
            if ($(window).scrollTop() > windowheight) {
                $(".book-stay").removeClass("pointer-eventnone");
                $("#headerId").addClass("iconMenu");
                $("#headerId.bgfff").addClass("iconMenu");
                $(".reservation-banner").addClass("fixedTop");
                $(".inner #headerId").addClass("iconMenu");
                $(".menuIcon").click(function() {
                    $(".iconMenu .menu-IconClick").fadeIn();
                    $(this).fadeOut();
                    $(".cancelMenu").fadeIn();
                    $("body").addClass("overflowhide");
                });
                $(".cancelMenu").click(function() {
                    $(".iconMenu .menu-IconClick").fadeOut();
                    $(".menuIcon").fadeIn();
                    $(this).fadeOut();
                    $("body").removeClass("overflowhide");
                });
            } else {
                $(".book-stay").addClass("pointer-eventnone");
                $("#headerId").removeClass("iconMenu");
                $("#headerId.bgfff").removeClass("iconMenu");
                $(".menu-IconClick").hide();
                $(".cancelMenu").hide();
                $(".reservation-banner").removeClass("fixedTop");
                $(".inner #headerId").removeClass("iconMenu");
            }
        });
    }
    if (screen.width > 767) {
        $(".inner #headerId").addClass("iconMenu");
        $(".inner").addClass("iconMenu");
        $(".inner .menuIcon").click(function() {
            $(this).fadeOut();
            $(".iconMenu .menu-IconClick").fadeIn();
            $(".cancelMenu").fadeIn();
            $("body").addClass("overflowhide");
        });
        $(".inner .cancelMenu").click(function() {
            $(".iconMenu .menu-IconClick").fadeOut();
            $(".menuIcon").fadeIn();
            $(this).fadeOut();
            $("body").removeClass("overflowhide");
        });
    }
    $(".inner").addClass("iconMenu");
    $('.testimonial-desk').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: false
    });
    $("#di").datepicker({
        dateFormat: 'dd/mm/yy',
    });
    $("#do").datepicker({
        dateFormat: 'dd/mm/yy',
    });
    $("#DateIn").datepicker({
        defaultDate: "+0d",
        dateFormat: 'mm/dd/yy',
    });
    $("#DateOut").datepicker({
        defaultDate: "+0d",
        dateFormat: 'mm/dd/yy',
    });
    $("#DateIndummy").datepicker({
        defaultDate: "+0d",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: 'dd/mm/yy',
        onSelect: function() {
            //$("#DateOut").focus();
            var date = $(this).datepicker('getDate');
            if (date) {
                $("#di").datepicker("setDate", date);
                $("#DateIn").datepicker("setDate", date);
                date.setDate(date.getDate() + 1);
                $("#DateOutdummy").datepicker("setDate", date);
                $("#DateOutdummy").datepicker("option", "minDate", date);
                $("#DateOut").datepicker("setDate", date);
            }
        }
    });
    $("#DateIndummy").datepicker("option", "minDate", '+0');
    $('#DateIndummy').datepicker('setDate', '+0');
    $("#DateIn").datepicker("option", "minDate", '+0');
    $('#DateIn').datepicker('setDate', '+0');
    $('#DateIn').datepicker("setDate", new Date());

    $("#DateOutdummy").datepicker({
        defaultDate: "+1d",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: 'dd/mm/yy',
        onSelect: function() {
            var date = $(this).datepicker('getDate');
            if (date) {
                $("#DateOut").datepicker("setDate", date);
            }
        }
    });
    $("#checkin").datepicker({
        defaultDate: "+0d",
        dateFormat: 'mm/dd/yy',
    });
    $("#checkindummy").datepicker({
        defaultDate: "+0d",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: 'dd/mm/yy',
        onSelect: function() {
            var date = $(this).datepicker('getDate');
            if (date) {
                $("#di1").datepicker("setDate", date);
                $("#checkin").datepicker("setDate", date);
                date.setDate(date.getDate() + 1);
                $("#checkoutdummy").datepicker("setDate", date);
                $("#checkoutdummy").datepicker("option", "minDate", date);
            }
        }
    });
    $("#di1").datepicker({
        dateFormat: 'dd/mm/yy',
    });
    $("#do1").datepicker({
        dateFormat: 'dd/mm/yy',
    });
    $("#checkin").datepicker("option", "minDate", '+0');
    $('#checkin').datepicker('setDate', '+0');
    $("#checkindummy").datepicker("option", "minDate", '+0');
    $('#checkindummy').datepicker('setDate', '+0');


    $("#checkout").datepicker({
        defaultDate: "+1d",
        dateFormat: 'mm/dd/yy',
    });
    $("#checkoutdummy").datepicker({
        defaultDate: "+1d",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: 'dd/mm/yy',
        onSelect: function() {
            var date = $(this).datepicker('getDate');
            if (date) {
                $("#do1").datepicker("setDate", date);
                $("#checkout").datepicker("setDate", date);
            }
        }
    });

    $(".fancybox").fancybox({
        afterLoad: function(curr, prev) {
            if (!jQuery('a.fancybox-close').length) {
                jQuery('.fancybox-outer').after('<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>');
                jQuery('.fancybox-close').css('background-image', 'url(../images/fancybox_sprite.png)');

            }
        }
    });
});


$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });

    $("#getQuote").click(function() {
        $("#getQuoteForm").toggleClass("displayform1")
    });
    $("#getQuoteNow").click(function() {
        $("#getQuoteNowForm").toggleClass("displayform1")
    });

    $('.getQuoteForm .datepicker1').datepicker({
        // format: "dd/mm/yyyy"
    });

    $('.form1').captcha();
    $('.form2').captcha();
});


if (screen.width > 767) {
    (function($) {
        $.fn.equalHeights = function() {
            var maxHeight = 0,
                $this = $(this);
            $this.each(function() {
                var height = $(this).innerHeight();
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            return $this.css('height', maxHeight);
        };
        // auto-initialize plugin
        $('[data-equal]').each(function() {
            var $this = $(this),
                target = $this.data('equal');
            $this.find(target).equalHeights();
        });
    })(jQuery);

    $(document).ready(function() {
        $('.equalheight').equalHeights();
        $('.equalheight2').equalHeights();
        $('.equalheight3').equalHeights();
        $('.equalheight4').equalHeights();
    });
}


$(document).ready(function() {

    $(".confirmsubmit").click(function() {
        var confirmnumber = $(".confirmnumber").val();
        if (confirmnumber == "") {
            alert("Please enter your confirmation number ");
            return false;
        }

        var actionUrl = "";

        var actionUrl = "https://reservations.travelclick.com/105894?confirmid=" + confirmnumber

        if (actionUrl != "") {
            window.open(actionUrl, '_blank');
            return true;
        } else {
            return false;
        }
    });
    $('#confirmnumberform').on('submit', function() {
        var value = $('#confirmnumber').val();
        return $.isNumeric(value);
    });
});