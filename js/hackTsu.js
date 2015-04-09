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

    //$(function () {
    //    $('.speaker').hover(
    //        function () {
    //            $(this).addClass('speaker-over');
    //
    //        },
    //        function () {
    //            $(this).removeClass('speaker-over');
    //        }
    //    );
    //});

    $(function () {
        $('nav#main-nav li').hover(
            function () {
                $(this).addClass('nav-item-hover');
            },
            function () {
                $(this).removeClass('nav-item-hover');
            }
        );
    });
    var mouseX;
    var mouseY;
    var $homeunblur = $('.home-unblur');
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });
    $(".home-blur").mousemove(function () {
        $homeunblur.css({top: (mouseY - ($homeunblur.height() / 2)), left: ( mouseX-($homeunblur.width() / 2))});
    });
    $('.home-blur').mouseout(function () {
        $('#mask').fadeOut("slow");
    })
    $('.home-blur').hover(function () {
        $('svg').fadeIn("slow");
    })


});