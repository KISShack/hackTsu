$(document).ready(function(){
    //$('#3_3').remove();
        $('.has-events div').hover(
            function(){
                $(this).addClass('addborder');
            },
            function(){
                $(this).removeClass('addborder');
            })

});