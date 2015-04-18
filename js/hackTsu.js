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
        function(){
            $(this).addClass('home-blur').removeClass('home-no-blur');
        },
        function(){
            $(this).removeClass('home-blur').addClass('home-no-blur');
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

});