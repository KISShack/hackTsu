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
   /* var mouseX;
    var mouseY;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        //$('.circle').animate({top:mouseY,left:mouseX},1);
    });
    $(".home").mousemove(function () {
        console.log(mouseY, mouseX)
        $('.circle').css({top: mouseY, left: mouseX});
    });
    $('.home').mouseout(function () {
        $('.circle').fadeOut("slow");
    })
    $('.home').hover(function () {
        $('.circle').fadeIn("slow");
    })*/


});