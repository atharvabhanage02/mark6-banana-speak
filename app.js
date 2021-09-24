var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn");
var output = document.querySelector("#txt-output");

var mainURL = "https://api.funtranslations.com/translate/minion.json";

function translationURL(text){
    return mainURL+ "?" + "text="+ text;
}
 
function errorHandler(error){
    console.log("Error Occured",error);
    alert("There is something wrong.Please try again after some time")
}

function clickHandler(){
    var read = txtInput.value;
    fetch(translationURL(read))
        .then(response=>response.json())
        .then(json=>{
            var translatedTxt = json.contents.translated;
            output.innerText = translatedTxt;
            })
        .catch(errorHandler);    
};

btnTranslate.addEventListener("click" , clickHandler);