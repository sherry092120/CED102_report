// // Can also be used with $(document).ready()
// $(window).load(function() {
//     $('.flexslider').flexslider({
//       animation: "slide"
//     });
//   });

  $(function() {
    $(".flexslider").flexslider({
        animation: "slide",
        touch: true, //是否支持触屏滑动
        // directionNav: false,
	});
});	



    // var tl_front = new TimelineMax({
    //     repeat: -1, //無限重複打-1
    // });
    // tl_front.to('.front',2,{
    //     x:150,
    //     z:50,
    //     rotationY: 45,
    // }).to('.front',2,{
    //     x:100,
    //     z:0,
    //     rotationY: 90,
    // }).to('.front',2,{
    //     x:50,
    //     z:-50,
    //     rotationY: 135,
    // }).to('.front',2,{
    //     x:0,
    //     z:-100,
    //     rotationY: 180,
    // }).to('.front',2,{
    //     x:-50,
    //     z:-50,
    //     rotationY: 225,
    // }).to('.front',2,{
    //     x:-100,
    //     z:0,
    //     rotationY:270,
    // }).to('.front',2,{
    //     x:-50,
    //     z:50,
    //     rotationY: 315,
    // }).to('.front',2,{
    //     x:0,
    //     z:100,
    //     rotationY:360,
    // });

    // var tl_left = new TimelineMax({
    //     repeat: -1, //無限重複打-1
    // });
    // tl_left.to('.left',2,{
    //     rotationY:-45,
    //     z:50,
    //     x:-50,
    // }).to('.left',2,{
    //     rotationY: 0,
    //     z:100,
    //     x:0,
    // }).to('.left',2,{
    //     rotationY: 45,
    //     z:50,
    //     x:50,
    // }).to('.left',2,{
    //     rotationY: 90,
    //     z:0,
    //     x:100,
    // }).to('.left',2,{
    //     rotationY: 135,
    //     z:-50,
    //     x:50,
    // }).to('.left',2,{
    //     rotationY:180,
    //     z:-100,
    //     x:0,
    // }).to('.left',2,{
    //     rotationY: 225,
    //     z:-50,
    //     x:-50,
    // }).to('.left',2,{
    //     rotationY:270,
    //     z:0,
    //     x:-100,
    // });

    // var tl_right = new TimelineMax({
    //     repeat: -1, //無限重複打-1
    // });
    // tl_right.to('.right',2,{
    //     rotationY: 135,
    //     z:-50,
    //     x:50,
    // }).to('.right',2,{
    //     rotationY: 180,
    //     z:-100,
    //     x:0,
    // }).to('.right',2,{
    //     rotationY: 225,
    //     z:-50,
    //     x:-50,
    // }).to('.right',2,{
    //     rotationY: 270,
    //     z:0,
    //     x:-100,
    // }).to('.right',2,{
    //     rotationY: 315,
    //     z:50,
    //     x:-50,
    // }).to('.right',2,{
    //     rotationY:360,
    //     z:100,
    //     x:0,
    // }).to('.right',2,{
    //     rotationY: 405,
    //     z:50,
    //     x:50,
    // }).to('.right',2,{
    //     rotationY:450,
    //     z:0,
    //     x:100,
    // });

    // var tl_back = new TimelineMax({
    //     repeat: -1, //無限重複打-1
    // });
    // tl_back.to('.back',2,{
    //     rotationY: 225,
    //     z:-50,
    //     x:-50,
    // }).to('.back',2,{
    //     rotationY: 270,
    //     z:0,
    //     x:-100,
    // }).to('.back',2,{
    //     rotationY: 315,
    //     z:50,
    //     x:-50,
    // }).to('.back',2,{
    //     rotationY: 360,
    //     z:100,
    //     x:0,
    // }).to('.back',2,{
    //     rotationY: 405,
    //     z:50,
    //     x:50,
    // }).to('.back',2,{
    //     rotationY:450,
    //     z:0,
    //     x:100,
    // }).to('.back',2,{
    //     rotationY: 495,
    //     z:-50,
    //     x:50,
    // }).to('.back',2,{
    //     rotationY:540,
    //     z:-100,
    //     x:0,
    // });

    // var tl_top = new TimelineMax({
    //     repeat: -1, //無限重複打-1
    // });
    // tl_top.to('.top',3,{
    //     rotationY: 90,

    // }).to('.top',3,{
    //     rotationY: 180,

    // }).to('.top',3,{
    //     rotationY:270,

    // }).to('.top',3,{
    //     rotationY:360,
    // });

    // var tl_bottom = new TimelineMax({
    //     repeat: -1, //無限重複打-1
    // });
    // tl_bottom.to('.bottom',3,{
    //     rotationY: 90,

    // }).to('.bottom',3,{
    //     rotationY: 180,

    // }).to('.bottom',3,{
    //     rotationY:270,

    // }).to('.bottom',3,{
    //     rotationY:360,
    // });

    var tl2 = new TimelineMax({
      repeat: -1, //無限重複打-1
  });
  tl2.to('#inner',3,{
      rotationY: -90,      

  }).to('#inner',3,{
      rotationY: -180,

  }).to('#inner',3,{
      rotationY:-270,

  }).to('#inner',3,{
      rotationY:-360,
  }); 