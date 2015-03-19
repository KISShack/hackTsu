$(function () {
    $('a.page-scroll').bind('click', function(event){
        var $anchor = $(this);
        $('html,body').animate({
            scrollTop: $($anchor.attr('href').offset().top)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});