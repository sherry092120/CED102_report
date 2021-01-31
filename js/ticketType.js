function ticketCalculations(){
    // 計算票種區的合計
    ticketPrices = document.getElementsByClassName("ticketPrice");
    generalTicketAmount = document.getElementsByName("generalTicketAmount")[0];
    DoublePackageAmount = document.getElementsByName("DoublePackageAmount")[0];
    singlePackageAmount = document.getElementsByName("singlePackageAmount")[0];
    totals = document.getElementsByClassName("total");
    totals[0].innerText =  parseInt(ticketPrices[0].innerText) *  parseInt(generalTicketAmount.value);
    totals[1].innerText =  parseInt(ticketPrices[1].innerText) *  parseInt(DoublePackageAmount.value);
    totals[2].innerText =  parseInt(ticketPrices[2].innerText) *  parseInt(singlePackageAmount.value);

    //可樂加總
    colaPrices = document.getElementsByClassName("colaPrice");
    colaAmountL = document.getElementsByName("colaAmount-L")[0];
    colaAmountM = document.getElementsByName("colaAmount-M")[0];
    colaAmountS = document.getElementsByName("colaAmount-S")[0];
    colatotals = 0;
    colatotals = parseInt(colaPrices[0].innerText) * parseInt(colaAmountL.value)+
                 parseInt(colaPrices[1].innerText) * parseInt(colaAmountM.value)+
                 parseInt(colaPrices[2].innerText) * parseInt(colaAmountS.value);

    //爆米花加總
    popcornPrices = document.getElementsByClassName("popcornPrice");
    popcornAmountL = document.getElementsByName("popcornAmount-L")[0];
    popcornAmountS = document.getElementsByName("popcornAmount-S")[0];
    popcorntotals = 0;
    popcorntotals= parseInt(popcornPrices[0].innerText) * parseInt(popcornAmountL.value)+
                   parseInt(popcornPrices[1].innerText) * parseInt(popcornAmountS.value);

    // 總額
    var sum = 0 ;
    for(var i=0 ; i<totals.length ; i++){
        sum = sum + parseInt(totals[i].innerText);
    }
    sum = sum + colatotals + popcorntotals;
    document.getElementById("sum").innerText = sum;

    // 購物清單區
    var shoppingList = document.getElementById("shoppingList");
    var arr = [];
    if(parseInt(generalTicketAmount.value)>0){
        arr.push(document.getElementsByClassName("ticketName")[0].innerText+"*"+generalTicketAmount.value);
    };
    if(parseInt(DoublePackageAmount.value)>0){
        arr.push(document.getElementsByClassName("ticketName")[1].innerText+"*"+DoublePackageAmount.value);
    };
    if(parseInt(singlePackageAmount.value)>0){
        arr.push(document.getElementsByClassName("ticketName")[2].innerText+"*"+singlePackageAmount.value);
    };


    if(parseInt(colaAmountL.value)>0){
        arr.push(document.getElementsByClassName("colaName")[0].innerText+"*"+colaAmountL.value);
    };
    if(parseInt(colaAmountM.value)>0){
        arr.push(document.getElementsByClassName("colaName")[1].innerText+"*"+colaAmountM.value);
    };
    if(parseInt(colaAmountS.value)>0){
        arr.push(document.getElementsByClassName("colaName")[2].innerText+"*"+colaAmountS.value);
    };

    if(parseInt(popcornAmountL.value)>0){
        arr.push(document.getElementsByClassName("popcornName")[0].innerText+"*"+popcornAmountL.value);
    };
    if(parseInt(popcornAmountS.value)>0){
        arr.push(document.getElementsByClassName("popcornName")[1].innerText+"*"+popcornAmountS.value);
    };

    shoppingList.innerHTML = arr.join("<br>");
};

function checkForm(e){
    if($('#sum')[0].innerText == 0){
        alert("您尚未選擇票種。");
        e.preventDefault();
        return;
    }
}

function init(){
    generalTicketAmount = document.getElementsByName("generalTicketAmount")[0];
    DoublePackageAmount = document.getElementsByName("DoublePackageAmount")[0];
    singlePackageAmount = document.getElementsByName("singlePackageAmount")[0];
    colaAmountL = document.getElementsByName("colaAmount-L")[0];
    colaAmountM = document.getElementsByName("colaAmount-M")[0];
    colaAmountS = document.getElementsByName("colaAmount-S")[0];
    popcornAmountL = document.getElementsByName("popcornAmount-L")[0];
    popcornAmountS = document.getElementsByName("popcornAmount-S")[0];
    
    ticketCalculations;
    generalTicketAmount.onchange = ticketCalculations;
    DoublePackageAmount.onchange = ticketCalculations;
    singlePackageAmount.onchange = ticketCalculations;

    colaAmountL.onchange = ticketCalculations;
    colaAmountM.onchange = ticketCalculations;
    colaAmountS.onchange = ticketCalculations;

    popcornAmountL.onchange = ticketCalculations;
    popcornAmountS.onchange = ticketCalculations;


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

// 舊的: name未唯一，僅加票種跟可樂
// function ticketCalculations(){
//     var ticketPrices = document.getElementsByClassName("ticketPrice");
//     var amounts = document.getElementsByName("amount");
//     var totals = document.getElementsByClassName("total");
//     for(var i=0 ; i<amounts.length ; i++){
//         totals[i].innerText =  parseInt(ticketPrices[i].innerText) *  parseInt(amounts[i].value);
//     };
//     var colaPrices = document.getElementsByClassName("colaPrice");
//     var colaAmounts = document.getElementsByName("colaAmount");
//     var colatotal;
//     var colatotals = 0;
//     for(var j=0 ; j<colaAmounts.length ; j++){
//         colatotal= parseInt(colaPrices[j].innerText) * parseInt(colaAmounts[j].value);
//         colatotals = colatotals + colatotal;
//     }
//     var sum = 0 ;
//     for(var i=0 ; i<totals.length ; i++){
//         sum = sum + parseInt(totals[i].innerText);
//     }
//     sum = sum + colatotals;
//     document.getElementById("sum").innerText = sum;

//     var shoppingList = document.getElementById("shoppingList");
//     var arr = [];
//     for(var i=0 ; i<amounts.length ;i++){
//         if(parseInt(amounts[i].value)>0){
//             arr.push(document.getElementsByClassName("ticketName")[i].innerText+"*"+amounts[i].value);
//         };
//     }
//     for(var i=0 ; i<colaAmounts.length ;i++){
//         if(parseInt(colaAmounts[i].value)>0){
//             arr.push(document.getElementsByClassName("colaName")[i].innerText+"*"+colaAmounts[i].value);
//         };
//     }
//     shoppingList.innerHTML = arr.join("<br>");
// };

// function checkForm(e){
//     var amounts = document.getElementsByName("amount");
//     var sum = 0;
//     for(var i=0 ;i<amounts.length ; i++){
//         sum = sum + amounts[i].value;
//     }
//     if(sum == 0){
//         alert("您尚未選擇票種。");
//         e.preventDefault();
//         return;
//     }
// }
// function init(){
//     ticketCalculations;
//     var amounts = document.getElementsByName("amount");
//     for(var i = 0 ; i<amounts.length ; i++){
//         amounts[i].onchange = ticketCalculations;
//     }
//     var colaAmounts = document.getElementsByName("colaAmount");
//     for(var i = 0 ; i<colaAmounts.length ; i++){
//         colaAmounts[i].onchange = ticketCalculations;
//     }
//     var ticketType = document.getElementById("ticketType");
//     ticketType.onsubmit = checkForm;

//     $('#popcornBlock').hide();
//     $('#beverageTab').click(function(){
//         $('#beverageBlock').show();
//         $('#popcornBlock').hide();
//         $('ul.tabList > li').removeClass('currentTab');
//         $('ul.tabList > li:first').addClass('currentTab');
//     });
//     $('#popcornTab').click(function(){
//         $('#beverageBlock').hide();
//         $('#popcornBlock').show();
//         $('ul.tabList > li').removeClass('currentTab');
//         $('ul.tabList > li:nth-child(2)').addClass('currentTab');
//     });

// }

// function init(){
//     ticketCalculations;
//     var amounts = document.getElementsByName("amount");
//     for(var i = 0 ; i<amounts.length ; i++){
//         amounts[i].onchange = ticketCalculations;
//     }
//     var colaAmounts = document.getElementsByName("colaAmount");
//     for(var i = 0 ; i<colaAmounts.length ; i++){
//         colaAmounts[i].onchange = ticketCalculations;
//     }
//     var ticketType = document.getElementById("ticketType");
//     ticketType.onsubmit = checkForm;

// };

// function checkForm(e){
//     var amounts = document.getElementsByName("amount");
//     var sum = 0;
//     for(var i=0 ;i<amounts.length ; i++){
//         sum = sum + amounts[i].value;
//     }
//     if(sum == 0){
//         alert("您尚未選擇票種。");
//         e.preventDefault();
//         return;
//     }
// };