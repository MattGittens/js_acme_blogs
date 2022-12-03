//function 1
//creates element with text content and an optional class name
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createElemWithText (elem = "p", textCont ='', className){
const htmlElem = document.createElement(elem);
htmlElem.textContent = textCont;
if(className) htmlElem.classList.add(className);
return htmlElem;
}
//completed



//function 2
//creates select options for JSON data
function createSelectOptions(JSONData){
if(JSONData){
const obj = JSON.parse(JSONData);
obj.forEach(element => document.createElement(Option(element.user.name,element.user.id)));
}
 return;

}

//function 3
function toggleCommentSection (){

}