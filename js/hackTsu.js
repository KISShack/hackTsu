$(document).ready(function() {
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
        $('.speaker').hover(
            function(){
                $(this).addClass('speaker-over');
            },
            function(){
                $(this).removeClass('speaker-over');
            }
        );
    });

});