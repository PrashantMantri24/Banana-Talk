var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput)

function clickhandler(){

    console.log("clicked!");
    console.log("input", txtInput.Value);
    
};

btnTranslate.addEventListener("click", clickhandler)
