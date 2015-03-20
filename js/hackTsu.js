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
        $('#main-nav a').bind('click', function (event) {
            var $navtab = $('.tab-attr');
            if($navtab.hasClass('active')) {
                $navtab.removeClass('active')
            }
            $(this).addClass('active');
        });
    });
});