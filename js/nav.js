$('document').ready(function(){
    $('#menuButton').click(function(e){
        if($('#menu').css('top') == "-1000px"){
            $('#menu').css('top','60px');
        }else if($('#menu').css('top') == "60px"){
            $('#menu').css('top','-1000px');
        };
        e.stopPropagation();
    });

    $('body').not('#menuButton').click(function(){
        if($('#menu').css('top') == "60px"){
            $('#menu').css('top','-1000px');
        }; 
    });

});