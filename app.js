//input
//var userName = prompt("give me your name");
//processing
//var welcomeMessage = "this script is works" + userName;
//output
//alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

// console.log(txtInput);

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(){

    console.log("error occuored", error);
    alert("someting wrong with server! try again after some time")
}

function clickHandler() {
    
    var inputText = txtInput.value;     //Taking Input


    //Calling server for Proccessing
    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated; 
        outputDiv.innerText = translatedText;    //Output Text
})        
    .catch(errorHandler)

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


