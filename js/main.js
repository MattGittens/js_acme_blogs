//function 1
//creates element with text content and an optional class name
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createElemWithText (elem = "p", textCont ="", className){
const htmlElem = document.createElement(elem);
htmlElem.textContent = textCont;
if(className) htmlElem.classList.add(className);
return htmlElem;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//function 2
function createSelectOptions(JSONData){
if(!JSONData) return;

}

//function 3
function toggleCommentSection (){

}