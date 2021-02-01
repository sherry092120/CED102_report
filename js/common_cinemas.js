$('document').ready(function(){

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement:'#trigger01',
        triggerHook: 0,
    }).setClassToggle('.mainGradient','backgroundColor2').addIndicators().addTo(controller);


    var height1 = $('#height1').height();
    var height2 = $('#height2').height();
    var height3 = $('#height3').height();
    $('#theme1').css({opacity:1});
    $('#theme2').css({opacity:0.3});
    $('#theme3').css({opacity:0.3});
    $('#theme4').css({opacity:0.3});
    scroll();

    $(window).resize(function(){
        height1 = $('#height1').height();
        height2 = $('#height2').height();
        height3 = $('#height3').height();
        scroll();
    })

    function scroll(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 200 && $(window).scrollTop() < 200+height1){
                $('#theme1').css({opacity:1});
                $('#theme2').css({opacity:0.3});
                $('#theme3').css({opacity:0.3});
                $('#theme4').css({opacity:0.3});
            }else if($(window).scrollTop() > 200+height1 && $(window).scrollTop() < 200+height1+height2){
                $('#theme1').css({opacity:0.3});
                $('#theme2').css({opacity:1});
                $('#theme3').css({opacity:0.3});
                $('#theme4').css({opacity:0.3});
            }else if($(window).scrollTop() > 200+height1+height2 && $(window).scrollTop() < 200+height1+height2+height3){
                $('#theme1').css({opacity:0.3});
                $('#theme2').css({opacity:0.3});
                $('#theme3').css({opacity:1});
                $('#theme4').css({opacity:0.3});
            }else if($(window).scrollTop() > 200+height1+height2+height3){
                $('#theme1').css({opacity:0.3});
                $('#theme2').css({opacity:0.3});
                $('#theme3').css({opacity:0.3});
                $('#theme4').css({opacity:1});
            }else{
            }
            
        })
    }

    $('#theme1').click(function(){
        $(window).scrollTop() = 100;
    })


})