//input
//var userName = prompt("give me your name");
//processing
//var welcomeMessage = "this script is works" + userName;
//output
//alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);


function clickHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler);

// const btnTranslate = document.querySelector("#btn-translate");
// const txtInput = document.querySelector("#txt-input");
// console.log(txtInput);

// const clickHandler = () => {
// console.log("clicked");
// console.log("input", txtInput.value);
// }

// btnTranslate.addEventListener("click", clickHandler);