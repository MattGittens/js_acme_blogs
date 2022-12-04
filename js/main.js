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
    // If Post Id Is Passed, Return Undefined
    if (!postId) {
        return undefined;
    } else {
        // Else, Get All Comment Sections
        const commentSections = document.querySelectorAll('[data-post-id]');
        // Loop Through Each Comment Section
        for (let i = 0; i < commentSections.length; i++) {
            const commentSection = commentSections[i];
            // If Post Id Attribut Of Comment Section Is Equal To Post Id Passed Arg
            if (commentSection.getAttribute('data-post-id') === postId) {
                // Toggle Hide Class
                commentSection.classList.toggle('hide');
                // Return Comment Section Element
                return commentSection;
            }
        }

        // If We Are Here, No Matching Post Id Is Found
        // Return NULL
        return null;
    }   
}
        
//function 4
//toggles comment button
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function toggleCommentButton (postID) {
    if (!postID) {
      return;
    }
 
    const btnSelectedEl = document.querySelector(`button[data-post-id = "${postID}"`);
  
    if (btnSelectedEl != null) {
        btnSelectedEl.textContent === "Show Comments" ? (btnSelectedEl.textContent = "Hide Comments") : (btnSelectedEl.textContent = "Show Comments");
    }
  
   
    return btnSelectedEl;
  };
  //completed
  
 

  //function 5
  function deleteChildElements(parentElement) {
    if(typeof(parentElement) === undefined){
    return undefined;
    }
    else{
    let child = parentElement.lastElementChild;
    while (child) {
      parentElement.removeChild(child);
      child = parentElement.lastElementChild;
    }
    return parentElement;
  }
}