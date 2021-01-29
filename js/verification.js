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
    var verificationCodes = document.getElementsByName("verificationCode");
    verificationCodes[0].focus();
    for(var i=0 ; i<verificationCodes.length ; i++){
        verificationCodes[i].onkeyup = next;
    }
};
window.addEventListener("load",init,false);