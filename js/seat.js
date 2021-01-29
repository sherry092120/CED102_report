$(document).ready(function(){
    $('div.seat.vacancy').click(function(){
        $('div.seat.selected').removeClass('selected').addClass('vacancy');
        $(this).removeClass('vacancy');
        $(this).addClass('selected');
    });
    $('div.seat.vacancy').mouseover(function(){
        $(this).css('cursor','pointer');
    });
    $('div.seat.sold').mouseover(function(){
        $(this).css('cursor','not-allowed');
    });

    var back1 = document.getElementById('back');
    back1.onclick = function(){
        window.history.back();
    }
});