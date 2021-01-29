$('document').ready(function(){
    // 訂票
    // var tl = new TimelineMax();
    // tl.to('#inner' , 1 , {
    //     y:-300,
    //     boxShadow: '0px 0px 20px #fff',
    // }).to('#inner' , .5 , {
    //     rotation: 360,
    //     z: 200,
    //     x: -100,
    //     y: -190,
    // }).to('#inner' , 1 , {
    //     width: '100%',
    //     height: '100%',
    // })
    // tl.stop();

    // var tl0 = new TimelineMax({
    //     repeat: -1, //無限重複打-1
    // });
    // tl0.to('.cube',1,{
    //     rotationY: 0,      
    // }).to('.cube',3,{
    //     rotationY: 90,
    // }).to('.cube',3,{
    //     rotationY:180,
    // }).to('.cube',3,{
    //     rotationY:270,
    // }).to('.cube',2,{
    //     rotationY:360,
    // });
    // // 點擊立方體
    // $('div.cube > div > img').click(function(){
    //     $('#inner >img').remove();
    //     var src = $(this).attr('src')
    //     $('#inner').append(`<img src='${src}'>`)  
    //     tl0.stop();
    //     TweenMax.to('.cube',3,{
    //         rotationY: 0,      
    //     });
    //     tl.play();

    // })
    // $('div.cube > div.inner').click(function(){
    //     tl.reverse();
    //     tl0.restart();
    // })

    var tl = new TimelineMax();
    tl.to('#inner' , 1 , {
        y:-320,
    }).to('#inner' , .5 , {
        rotation: 360,
        x: -100,
        y: -300,
    }).to('#inner' , 1 , {
        width: '100%',
        height: '260px',
        boxShadow: '0px 0px 20px #fff',
    })
    tl.stop();

    var tl0 = new TimelineMax({
        repeat: -1, 
    });
    tl0.to('.cube',1,{
        rotationY: 0,      
    }).to('.cube',3,{
        rotationY: 90,
    }).to('.cube',3,{
        rotationY:180,
    }).to('.cube',3,{
        rotationY:270,
    }).to('.cube',2,{
        rotationY:360,
    });
    var tl2 = new TimelineMax({
        repeat: -1, 
    });
    tl2.to('#inner',1,{
        rotationY: 0,      
    }).to('#inner',3,{
        rotationY: -90,
    }).to('#inner',3,{
        rotationY:-180,
    }).to('#inner',3,{
        rotationY:-270,
    }).to('#inner',2,{
        rotationY:-360,
    });

    $('div.cube > div > img').click(function(){
        $('#inner >img').remove();
        var src = $(this).attr('src')
        $('#inner').append(`<img src='${src}'>`)  
        tl0.stop();
        tl.play();
        tl2.stop();
        TweenMax.to('.cube',1,{
            height:10,
            top:'100%',
        })
        TweenMax.to('.bottom',1,{
            top:'-280px',
        })
        TweenMax.to('.cube .front img',1,{
            opacity: 0,
        })
        TweenMax.to('.cube .back img',1,{
            opacity: 0,
        })
        TweenMax.to('.cube .right img',1,{
            opacity: 0,
        })
        TweenMax.to('.cube .left img',1,{
            opacity: 0,
        })

    })
    $('div.cube > div.inner').click(function(){
        tl.reverse();
        tl0.play();
        tl2.play();
        TweenMax.to('.cube',1,{
            height:280,
            top:'0',
            delay:1.5,
        })
        TweenMax.to('.bottom',1,{
            top:'0px',
            delay:1.5,
        })
        TweenMax.to('.cube .front img',3,{
            opacity: 1,
            delay:1.5,
        })
        TweenMax.to('.cube .back img',3,{
            opacity: 1,
            delay:1.5,
        })
        TweenMax.to('.cube .right img',3,{
            opacity: 1,
            delay:1.5,
        })
        TweenMax.to('.cube .left img',3,{
            opacity: 1,
            delay:1.5,
        })
    })

    // 電影
    $('.comingSoon').hide();

    $('section.movies .rightTitle').click(function(){
        $('section.movies .rightTitle').css({
            color: '#fff',
            borderBottom: '3px solid #6d81ff',
        });
        $('section.movies .leftTitle').css({
            color: '#4a61a3',
            borderBottom: '3px solid #374f96c0',
        });
        $('.comingSoon').show();
        $('.hotNow').hide();
    })

    $('section.movies .leftTitle').click(function(){
        $('section.movies .leftTitle').css({
            color: '#fff',
            borderBottom: '3px solid #6d81ff',
        });
        $('section.movies .rightTitle').css({
            color: '#4a61a3',
            borderBottom: '3px solid #374f96c0',
        });
        $('.comingSoon').hide();
        $('.hotNow').show();
    });

    var isclick = true;
    $('section.movies div.hotNow > button.right').click(function(){
        if(isclick){
            isclick = false;
            var cardsBlockLeft = parseFloat($('section.movies > div.hotNow > div.cardsBlock').css('left'));
            var cardWidth = parseFloat($('section.movies > div.hotNow > div.cardsBlock > a').css('width'));
            var cardsBlockWidth = parseFloat($('section.movies > div.hotNow > div.cardsBlock').css('width'));
            // alert(cardsBlockWidth)
            var index = $('section.movies > div.hotNow > div.cardsBlock > a:last').index();
            // alert(index)
            var leftMax = (-1) * (cardWidth + 20) * (index+1) + cardsBlockWidth;
            if(cardsBlockLeft > leftMax){
                $('section.movies > div.hotNow > div.cardsBlock').animate({left: cardsBlockLeft - cardWidth -25});
                $('section.movies div.hotNow > button.right').animate({opacity: 0.5}).animate({opacity: 1});
            };
            setTimeout(function(){
                isclick = true;
            },500);
        }
    })
    $('section.movies div.hotNow > button.left').click(function(){
        if(isclick){
            isclick = false;
            var cardsBlockLeft = parseFloat($('section.movies > div.hotNow > div.cardsBlock').css('left'));
            var cardWidth = parseFloat($('section.movies > div.hotNow > div.cardsBlock > a').css('width'));
            if(cardsBlockLeft < -3){
                $('section.movies > div.hotNow > div.cardsBlock').animate({left: cardsBlockLeft + cardWidth +25});
                $('section.movies div.hotNow > button.left').animate({opacity: 0.5}).animate({opacity: 1});
            };
            setTimeout(function(){
                isclick = true;
            },500);
        }
    })

    $('section.movies div.comingSoon > button.right').click(function(){
        if(isclick){
            isclick = false;
            var cardsBlockLeft = parseFloat($('section.movies > div.comingSoon > div.cardsBlock').css('left'));
            var cardWidth = parseFloat($('section.movies > div.comingSoon > div.cardsBlock > a').css('width'));
            var cardsBlockWidth = parseFloat($('section.movies > div.comingSoon > div.cardsBlock').css('width'));
            // alert(cardsBlockWidth)
            var index = $('section.movies > div.hotNow > div.cardsBlock > a:last').index();
            // alert(index)
            var leftMax = (-1) * (cardWidth + 20) * (index+1) + cardsBlockWidth;
            if(cardsBlockLeft > leftMax){
                $('section.movies > div.comingSoon > div.cardsBlock').animate({left: cardsBlockLeft - cardWidth -25});
                $('section.movies div.comingSoon > button.right').animate({opacity: 0.5}).animate({opacity: 1});
            };
            setTimeout(function(){
                isclick = true;
            },500);
        }
    })
    $('section.movies div.comingSoon > button.left').click(function(){
        if(isclick){
            isclick = false;
            var cardsBlockLeft = parseFloat($('section.movies > div.comingSoon > div.cardsBlock').css('left'));
            var cardWidth = parseFloat($('section.movies > div.comingSoon > div.cardsBlock > a').css('width'));
            if(cardsBlockLeft < -3){
                $('section.movies > div.comingSoon > div.cardsBlock').animate({left: cardsBlockLeft + cardWidth +25});
                $('section.movies div.comingSoon > button.left').animate({opacity: 0.5}).animate({opacity: 1});
            };
            setTimeout(function(){
                isclick = true;
            },500);
        }
    })
    function resizeMovies(){
        $('section.movies > div.hotNow > div.cardsBlock').css('left','0px');
        $('section.movies > div.comingSoon > div.cardsBlock').css('left','0px');
    };
    $(window).resize(function(){
        resizeMovies();
    });
    //影城
    var cardRight = document.getElementsByClassName("cardRight")[0];
    var cardLeft = document.getElementsByClassName("cardLeft")[0];
    var cinemasCardLeft = document.getElementById("cinemasCardLeft");
    var cinemasCardRight = document.getElementById("cinemasCardRight");

    // alert(document.body.clientWidth);
    function hover(){
        if(document.body.clientWidth < (768+20)){
            cinemasCardLeft.classList.remove("-on");
            cinemasCardRight.classList.remove("-on");
            cinemasCardLeft.classList.add("-on");
            cinemasCardRight.classList.add("-on");
        }else{
            cardRight.addEventListener("mouseover", function(){
               cinemasCardLeft.classList.remove("-on");
               cinemasCardRight.classList.remove("-on");
               cinemasCardRight.classList.add("-on");
            });
            cardLeft.addEventListener("mouseover", function(){
               cinemasCardLeft.classList.remove("-on");
               cinemasCardRight.classList.remove("-on");
               cinemasCardLeft.classList.add("-on");
            });
        }
    }
    hover();
    $(window).resize(function(){
        hover();
    });

    // 公告與活動
    $('.announcement').hide();

    $('section.events .rightTitle').click(function(){
        $('section.events .rightTitle').css({
            color: '#fff',
            borderBottom: '3px solid #6d81ff',
        });
        $('section.events .leftTitle').css({
            color: '#4a61a3',
            borderBottom: '3px solid #374f96c0',
        });
        $('.announcement').show();
        $('.activity').hide();
    })

    $('section.events .leftTitle').click(function(){
        $('section.events .leftTitle').css({
            color: '#fff',
            borderBottom: '3px solid #6d81ff',
        });
        $('section.events .rightTitle').css({
            color: '#4a61a3',
            borderBottom: '3px solid #374f96c0',
        });
        $('.announcement').hide();
        $('.activity').show();
    });

    //套件flexslider
    $(function() {
        $(".flexslider").flexslider({
            animation: "slide",
            touch: true, //是否支持觸屏滑動
            slideshowSpeed: 7000,
        });
    });
});
