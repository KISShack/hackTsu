$(document).ready(function () {
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 40
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $(function () {
        $('nav#main-nav li').hover(
            function () {
                $(this).addClass('s');
            },
            function () {
                $(this).removeClass('nav-item-hover');
            }
        );
    });
    $('#home').hover(
        function () {
            $(this).addClass('home-no-blur').removeClass('home-blur');
        },
        function () {
            $(this).removeClass('home-no-blur').addClass('home-blur');
        }
    );
    $('.speaker').hover(
        function () {
            $(this).find('.speaker-info').animate({
                left: '0%'
            }, 600, 'easeInOutExpo');
        }, function () {
            $(this).find('.speaker-info').animate({
                left: '-100%'
            }, 500, 'easeInOutExpo');
        });


    $('.list-hover-slide li a').click(function () {
        $('.list-hover-slide li a').removeClass('nav-item-active');
        var $this = $(this);
        if (!$this.hasClass('nav-item-active')) {
            $this.addClass('nav-item-active');
        }
    });
    $('.home-image').click(function () {
        $('.list-hover-slide li a').removeClass('nav-item-active');
    });


});


