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
            $(this).addClass('home-blur').removeClass('home-no-blur');
        },
        function () {
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


    ////GEAR EFFECT
    var containerPos = 100
    var scrollPos = $(window).scrollTop();
    var degreeRotate = 0;

    var gear1Rotate = 0;
    var gear2Rotate = 0;
    var gear3Rotate = 0;

    $('#gears').css('display', 'block');
    $('#gears').css('left', containerPos + "px");
    browser_transform('#gear2', 11);
    browser_transform('#gear3', 90);

    $(document).scroll(function () {
        // Are we moving up or down?
        var newScroll = $(window).scrollTop();

        if (scrollPos > newScroll) {
            degreeRotate -= 5;
        } else {
            degreeRotate += 5;
        }

        // Calculate rotations. These will be slightly different for each gear, even
        // for the ones spinning the same direction, in order to line up the teeth of
        // the gears.
        gear1Rotate = degreeRotate;
        gear2Rotate = ((degreeRotate + 11) * -1);
        gear3Rotate = ((degreeRotate + 90) * -1);

        // Store the current scroll for comparison next scroll event.
        scrollPos = newScroll;

        browser_transform('#gear1', gear1Rotate);
        browser_transform('#gear2', gear2Rotate);
        browser_transform('#gear3', gear3Rotate);
    });
});


function browser_transform(transTarget, transValue) {
    $(transTarget).css('-ms-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('-moz-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('-webkit-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('-o-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('transform', 'rotate(' + transValue + 'deg)');
}