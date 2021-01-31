$('document').ready(function(){
    var start = new TimelineMax();
    start.to('div.more',1,{
        delay:0.5,
        opacity: 0,
    }).to('div.more',1,{
        opacity: 1,
    });

    $('div.block:nth-child(2)').mouseover(function(){
        $('#cover1').stop(true).animate({opacity:0});
        $('div.block:nth-child(2)').css({backgroundColor: 'black'});
    });
    $('div.block:nth-child(2)').mouseout(function(){
        $('#cover1').stop(true).animate({opacity:1});
        $('div.block:nth-child(2)').css({backgroundColor: '#1a1a1a'});
    });
    $('div.block:nth-child(3)').mouseover(function(){
        $('#cover2').stop(true).animate({opacity:0});
        $('div.block:nth-child(3)').css({backgroundColor: 'black'});
    });
    $('div.block:nth-child(3)').mouseout(function(){
        $('#cover2').stop(true).animate({opacity:1});
        $('div.block:nth-child(3)').css({backgroundColor: '#1a1a1a'});
    });

    $('#cover1').mouseover(function(){
        $('#cover1').stop(true).animate({opacity:0});
        $('div.block:nth-child(2)').css({backgroundColor: 'black'});
    });
    $('#cover1').mouseout(function(){
        $('#cover1').stop(true).animate({opacity:1});
        $('div.block:nth-child(2)').css({backgroundColor: '#1a1a1a'});
    });
    $('#cover2').mouseover(function(){
        $('#cover2').stop(true).animate({opacity:0});
        $('div.block:nth-child(3)').css({backgroundColor: 'black'});
    });
    $('#cover2').mouseout(function(){
        $('#cover2').stop(true).animate({opacity:1});
        $('div.block:nth-child(3)').css({backgroundColor: '#1a1a1a'});
    });

    var tl = new TimelineMax({
        repeat:-1,
    });
    tl.to('#more1',0.3,{
        y:-5,
    }).to('#more1',0.3,{
        y:0,
    }).to('#more1',0.3,{
        y:-5,
    }).to('#more1',0.3,{
        y:0,
    }).to('#more2',0.3,{
        y:-5,
    }).to('#more2',0.3,{
        y:0,
    }).to('#more2',0.3,{
        y:-5,
    }).to('#more2',0.3,{
        y:0,
    });
    $('#more1').mouseover(function(){
        tl.stop();
    });
    $('#more1').mouseout(function(){
        tl.play();
    });
    $('#more2').mouseover(function(){
        tl.stop();
    });
    $('#more2').mouseout(function(){
        tl.play();
    });
});