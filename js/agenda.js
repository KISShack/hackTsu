$(document).ready(function(){
    $('.has-events div').hover(
        function(){
            $(this).addClass('addborder');
        },
        function(){
            $(this).removeClass('addborder');
        });
    $('.has-events div').blurjs({
        source: 'has-events div',
        radius: 10
    });
});