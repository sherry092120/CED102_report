$('document').ready(function(){
    $('.closeGame').click(function(){
        TweenMax.to('div.bg', 1 , {
            opacity: 0,
            display: 'none',
        })
    });
    $('div.close').click(function(){
        TweenMax.to('div.beerImg', 1 , {
            opacity: 0,
            display: 'none',
        })
    });
    $('#beerAnimation').click(function(){
        TweenMax.to('div.bg', 2 , {
            opacity: 1,
            display: 'block',
        })
        TweenMax.to('div.beerImg', 1 , {
            opacity: 0,
            display: 'none',
        })
        starBtnAnimation = new TimelineMax({
            delay:2,
            repeat:-1,
            repeatDelay:0.5,
        });
        starBtnAnimation.to('#start',0.2,{
            y:-5
        }).to('#start',0.2,{
            y:0
        }).to('#start',0.2,{
            y:-5
        }).to('#start',0.2,{
            y:0
        });
        $('#start').mouseover(function(){
            starBtnAnimation.stop();
        });
        $('#start').mouseout(function(){
            starBtnAnimation.play();
        })
    })
    $('div.waitBtn').click(function(){
        TweenMax.to('div.guideBlock',1,{
            opacity:0,
            display:'none',
        });
        starBtnAnimation.play();
    });
    $('div.startBtn').click(function(){
        TweenMax.to('div.guideBlock',1,{
            opacity:0,
            display:'none',
        });
        startGame();
    });
    $('#firstPage >div.prizeBlock >div.closeBtn').click(function(){
            starBtnAnimation.play();
            TweenMax.to('#firstPage >div.prizeBlock',1,{
                display: 'none',
                opacity: 0,
            })
        })
    TweenMax.to('#beerAnimation',0.3,{
        delay: 1,
        y: -10,
        repeat: -1,
        yoyo: true,
    });

    $('#start').click(function(){startGame();});
    $('#guide').click(function(){
        starBtnAnimation.stop();
        $('div.guideBlock').css('display','block');
        TweenMax.to('div.guideBlock',1,{
            opacity:1,
        })
        $('div.guideAnimationBlock').animate({bottom: '0'},500);
        var tlGuide = new TimelineMax();
        tlGuide.to('#guideButtle',0.1,{
            delay: 1.5,
            y:-20,
        }).to('div.waitBtn',0.7,{
            opacity: 1,
            delay: 4.4,
            display:'inline-block',
        }).to('div.startBtn',0.7,{
            opacity: 1,
            display:'inline-block',
        });

        TweenMax.to('#guideCork',1,{
            delay:1.45,
            y: -1000,
        });
        TweenMax.to('#guideSprayBeer',0.7,{
            delay:1.5,
            opacity:1,
            y:-20,
        });
        TweenMax.staggerTo('ul.guideText li',3.5,{
            opacity: 1,
            delay: 2.4,
        },0.7);
    });
    $('#prize').click(function(){
        starBtnAnimation.stop();
        tlPrize = new TimelineMax();
        tlPrize.to('#firstPage >div.prizeBlock',1,{
            display: 'block',
            opacity: 1,
        }).to('#redGift',0.8,{
            y: '92vh',
            rotation:-30,
            ease:SlowMo.ease.config(0.7,0.7,false),
            transformOrigin: 'bottom left',
        }).to('#redGift',0.1,{
            y: '92vh',
            rotation:-50,
            transformOrigin: 'bottom left',
        }).to('#redGift',0.5,{
            y: '92vh',
            rotation:0,
            transformOrigin: 'bottom left',
            ease: Bounce.easeOut,
        }).to('#orangeGift',0.8,{
            y: '92vh',
            rotation:30,
            ease:SlowMo.ease.config(0.7,0.7,false),
            transformOrigin: 'bottom right',
        }).to('#orangeGift',0.1,{
            y: '92vh',
            rotation:50,
            transformOrigin: 'bottom right',
        }).to('#orangeGift',0.5,{
            y: '92vh',
            rotation:0,
            transformOrigin: 'bottom right',
            ease: Bounce.easeOut,
        }).staggerTo('ul.prizeText li',0.7,{
            opacity:1,
        },0.7).to('#firstPage >div.prizeBlock >div.closeBtn',0.3,{
            opacity:1,
        });
        // .to('#blueGift',0.3,{
        //     y: 955,
        //     rotation:0,
        //     ease: Power4.easeOut,
        //     // ease: Power0.easeNone,
        //     transformOrigin: 'bottom left',
        // }).to('#blueGift',0.1,{
        //     rotation:-87,
        //     transformOrigin: 'bottom left',
        // })
    })
    
    function startGame(){
        TweenMax.to('#firstPage',1,{
            opacity: 0,
            display:'none',
        });
        TweenMax.to('div.buttle',1,{
            delay: 1,
            x:50,
            y:90,
        });
        TweenMax.to('div.readyText',0.2,{
            // delay: 1,
            y: -25,
            repeat: 13,
            yoyo: true,
        });
        TweenMax.to('div.readyText',0.5,{
            delay: 3,
            opacity: 0,
            display:'none',
        });
        setTimeout(function(){
            $('div.readyText')[0].innerText = 'Go';
            if($('div.readyText')[0].innerText == 'Go'){
                $('div.readyText')[0].style.fontSize = '60px';
            }
            TweenMax.to('div.readyText',0.3,{
                opacity: 1,
                display:'block',
            });
            TweenMax.to('div.readyText',0,{
                delay:0.5,
                opacity: 0,
                display:'none',
            });
        },3500);

        setTimeout(function(){
            var gameTime = 9;
            var timerId;
            timerId = setInterval(countDown,1000);
            function countDown(){
                if(gameTime == 0){
                    clearInterval(timerId);
                    $('#yourGrade')[0].innerText = $('#gameGrade')[0].innerText;
                    var yourGrade = $('#yourGrade')[0].innerText
                    TweenMax.to('#result',2,{
                        delay: 1,
                        opacity: 1,
                        display: 'block',
                    });
                    if(yourGrade >= 6){

                    }else{
                        $('div.yourPrize').css('display','none');
                        $('div.prizeBlock')[0].innerHTML = `別難過，再接再厲<br>明天再來~`
                    }
                }
                document.getElementById("gameTime").innerText = gameTime;
                gameTime--;
            }; 
        },4000)
        setTimeout(function(){
            var gameTime = 8;
            var timerId2;
            timerId2 = setInterval(random,2000);
            function random(){
                if(gameTime <= 2){
                    clearInterval(timerId2);
                }
                randomNum1 = Math.floor(Math.random()*4+1);
                randomNum2 = Math.floor(Math.random()*4+1);
                while(randomNum2 == randomNum1 ){
                    randomNum2 = Math.floor(Math.random()*4+1)
                }
                // console.log(randomNum1);

                $(`li.beerBlock:nth-child(${randomNum1})`).append(`<img class="empty" src="./img/game/beer_gray.png">`);
                $(`li.beerBlock:nth-child(${randomNum2})`).append(`<img class="empty" src="./img/game/beer_gray.png">`);
                setTimeout(function(){
                    $(`li.beerBlock >img`).remove();
                },1500);
                $('li.beerBlock > img').click(function(){
                    if($(this).attr('src') == './img/game/beer_gray.png'){
                        var grade = parseInt(document.getElementById('gameGrade').innerText);
                        document.getElementById('gameGrade').innerText = grade+1;
                        $(this).attr("src","./img/game/beer_full.png").removeClass('empty');
                        TweenMax.to('#sprayBeer',0.1,{
                            display: 'block',
                        })
                        TweenMax.to('#sprayBeer',0.1,{
                            delay:0.1,
                            display: 'none',
                        })
                    }
                });
                gameTime = gameTime - 2;
           
            }
        },3000);
    }
    
});