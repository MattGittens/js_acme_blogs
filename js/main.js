//function 1
function createElemWithText (elem = "p", textCont ="", className){
const htmlElem = document.createElement(elem);
htmlElem.textContext = textCont;
if (!className) return htmlElem;
htmlElem.classList.add(className);
return htmlElem;
}

//function 2
function createSelectOptions(JSONData){
if(!JSONData) return;

}

//function 3
function toggleCommentSection (){

}