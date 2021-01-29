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
};
window.addEventListener("load",init,false);