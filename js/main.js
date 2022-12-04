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
function createSelectOptions(jsonData){
    const obj = JSON.parse(jsonData)


}

//function 3
function toggleCommentSection(postId) {
    if (!postId) {
        return undefined;
        //returns undefined if no post id


    } else {
        const comments = document.querySelectorAll('[data-post-id]');
        //selects all posts


        for (let i = 0; i < commentSections.length; i++) {
            const commentSection = comments[i];
            // If Post Id Attribut Of Comment Section Is Equal To Post Id Passed Arg
            if (commentSection.getAttribute('data-post-id') !== postId) {
            return null;
               
            }
            else {
            commentSection.classList.toggle('hide');
            return commentSection;
            }
        }

        
        
    }   
}
