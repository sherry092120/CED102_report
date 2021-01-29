function ticketCalculations(){
    var ticketPrices = document.getElementsByClassName("ticketPrice");
    var amounts = document.getElementsByName("amount");
    var totals = document.getElementsByClassName("total");
    for(var i=0 ; i<amounts.length ; i++){
        totals[i].innerText =  parseInt(ticketPrices[i].innerText) *  parseInt(amounts[i].value);
    };
    var colaPrices = document.getElementsByClassName("colaPrice");
    var colaAmounts = document.getElementsByName("colaAmount");
    var colatotal;
    var colatotals = 0;
    for(var j=0 ; j<colaAmounts.length ; j++){
        colatotal= parseInt(colaPrices[j].innerText) * parseInt(colaAmounts[j].value);
        colatotals = colatotals + colatotal;
    }
    var sum = 0 ;
    for(var i=0 ; i<totals.length ; i++){
        sum = sum + parseInt(totals[i].innerText);
    }
    sum = sum + colatotals;
    document.getElementById("sum").innerText = sum;

    var shoppingList = document.getElementById("shoppingList");
    var arr = [];
    for(var i=0 ; i<amounts.length ;i++){
        if(parseInt(amounts[i].value)>0){
            arr.push(document.getElementsByClassName("ticketName")[i].innerText+"*"+amounts[i].value);
        };
    }
    for(var i=0 ; i<colaAmounts.length ;i++){
        if(parseInt(colaAmounts[i].value)>0){
            arr.push(document.getElementsByClassName("colaName")[i].innerText+"*"+colaAmounts[i].value);
        };
    }
    shoppingList.innerHTML = arr.join("<br>");
};

function checkForm(e){
    var amounts = document.getElementsByName("amount");
    var sum = 0;
    for(var i=0 ;i<amounts.length ; i++){
        sum = sum + amounts[i].value;
    }
    if(sum == 0){
        alert("您尚未選擇票種。");
        e.preventDefault();
        return;
    }
}
function init(){
    ticketCalculations;
    var amounts = document.getElementsByName("amount");
    for(var i = 0 ; i<amounts.length ; i++){
        amounts[i].onchange = ticketCalculations;
    }
    var colaAmounts = document.getElementsByName("colaAmount");
    for(var i = 0 ; i<colaAmounts.length ; i++){
        colaAmounts[i].onchange = ticketCalculations;
    }
    var ticketType = document.getElementById("ticketType");
    ticketType.onsubmit = checkForm;

    $('#popcornBlock').hide();
    $('#beverageTab').click(function(){
        $('#beverageBlock').show();
        $('#popcornBlock').hide();
        $('ul.tabList > li').removeClass('currentTab');
        $('ul.tabList > li:first').addClass('currentTab');
    });
    $('#popcornTab').click(function(){
        $('#beverageBlock').hide();
        $('#popcornBlock').show();
        $('ul.tabList > li').removeClass('currentTab');
        $('ul.tabList > li:nth-child(2)').addClass('currentTab');
    });
}
window.addEventListener("load" , init , false);