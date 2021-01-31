function next(e){
    let obj = e.target;
    if(obj.value.length == obj.maxLength){
        do{
            obj = obj.nextSibling;
        }while(obj.nodeName != "INPUT");
        obj.focus();
    }
};
function init(){
    var creditCardNumbers = document.getElementsByName("creditCardNumber");
    for(var i=0 ; i<creditCardNumbers.length ; i++){
        creditCardNumbers[i].onkeyup = next;
    }
    var back1 = document.getElementById('back');
    back1.onclick = function(){
        window.history.back();
    }

    // 預設
    $('#payerName')[0].value = "Jane";
    $('#cellphone')[0].value = "0912345678";
    $('#mail')[0].value = "abcde@gmail.com";
};
window.addEventListener("load",init,false);