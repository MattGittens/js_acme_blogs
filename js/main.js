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
function toggleCommentButton (postID) {

    // if postID is not received, return
    if (!postID) {
      return;
    }
  
    // select button having its value of "data-post-id" attribute = value of "postId"
    const btnSelectedEl = document.querySelector(`button[data-post-id = "${postID}"`);
  
    if (btnSelectedEl != null) {
      // if the textContent of button is 'Show Comments', change it to "Hide Comments", otherwise change to "Show Comments" by making use of ternary operator
      btnSelectedEl.textContent === "Show Comments" ? (btnSelectedEl.textContent = "Hide Comments") : (btnSelectedEl.textContent = "Show Comments");
    }
  
    // returning the selected button element
    return btnSelectedEl;
  };
  
  
  // check for function
  console.log(toggleCommentButton("btnToTest"));