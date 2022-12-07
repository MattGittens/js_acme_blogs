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
  if(!jsonData){
    return undefined;
  }else{
    const obj = JSON.parse(jsonData);


}
}

//function 3

function toggleCommentSection(postId) {
    // If Post Id Is Passed, Return Undefined
    if (!postId) {
        return undefined;
    } else {
        // Else, Get All Comment Sections
        const commentSections = document.querySelectorAll('data-post-id');
        // Loop Through Each Comment Section
        for (let i = 0; i < commentSections.length; i++) {
            const commentSection = commentSections[i];
            // If Post Id Attribut Of Comment Section Is Equal To Post Id Passed Arg
            if (commentSection.getAttribute('[data-post-id]') === postId) {
                // Toggle Hide Class
                commentSection.classList.toggle('hide');
                // Return Comment Section Element
                return commentSection;
                console.log(commentSection)
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
    if (!parentElement || !parentElement.nodeType) {
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
//completed


//function 6
const addButtonListeners = () => {
  let myMainElem = document.querySelector('main')
  let buttonsList = myMainElem.querySelectorAll('button')
  if(buttonsList){
      for(let i = 0; i < buttonsList.length; i++){
          let myButton = buttonsList[i]
          let postId = myButton.dataset.postId
          myButton.addEventListener('click', function(event){
              toggleComments(postId), false
          })
      }
      return buttonsList
  }

}



//function 7
const removeButtonListeners = () => {
  let myMainElem = document.querySelector('main')
  let buttonsList = myMainElem.querySelectorAll('button')
  console.log(buttonsList)
  if(buttonsList){
      for(let i = 0; i < buttonsList.length; i++){
          let myButton = buttonsList[i]
          postId = myButton.dataset.postId
          myButton.removeEventListener('click', function(event){ 
          toggleComments(event, postId), false
      })
      }
      return buttonsList
  }
}
//completed



//function 8
function createComments(comments) {
  //The function createComments should return undefined if it does not receive a parameter.
  if (!comments) {
    return undefined;
  }
  // b. Receives JSON comments data as a parameter
  // c. Creates a fragment element with document.createDocumentFragment()
  let frag = document.createDocumentFragment();
  // d.Loop through the comments
  for (let i = 0; i < comments.length; i++) {
    const element = comments[i];
    // e. For each comment do the following:
    // f. Create an article element with document.createElement()
    let a = document.createElement("a");
    // g. Create an h3 element with createElemWithText('h3', comment.name)
    let h3 = createElemWithText("h3", comment.name);
    // h. Create an paragraph element with createElemWithText('p', comment.body)
    let p1 = createElemWithText("p", comment.body);
    // i. Create an paragraph element with createElemWithText('p', `From: ${comment.email}`)
    let p2 = createElemWithText("p", `From: ${comment.email}`);
    // j. Append the h3 and paragraphs to the article element (see cheatsheet)
    a.appendChild(h3);
    a.appendChild(p);
    a.appendChild(p);
    // k. Append the article element to the fragment
    frag.appendChild(a);
  }
  // l. Return the fragment element
  return frag;
}


//function 9
function populateSelectMenu(users) {

  // if users is empty, return undefined
  if (!users) return;
  // select the selectMenu id
  let menu = document.querySelector("#selectMenu");
  // passes the data to createSelectOptions to get an array
  let options = createSelectOptions(users);

  // loop through and append each option to the menu
  for (let i = 0; i < options.length; i++) {
      let option = options[i];
      menu.append(option);
  } // end for loop

  // return menu
  return menu;

} // end populateSelectMenu




//function 10
const getUsers = async() => {

  let retrieve;
  // fetch users from jsonplaceholder.typicode.com
  try {
      retrieve = await fetch("https://jsonplaceholder.typicode.com/users");
  } // end try
  catch (error) {
      console.log(error);
  } // end catch

  // return information
  return await retrieve.json();

} 
//completed



//function 11
const getUserPosts = async(userId) => {

  // if userId has nothing
  if (!userId) return;

  let retrieve;

  // try to fetch data for userId
  try {
      retrieve = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  } // end try
  catch (error) {
      console.log(error);
  } // end catch

  // return information
  return retrieve.json();

} 
//completed



//function 12
const getUser = async(userId) => {

  // if userId has nothing
  if (!userId) return;

  let retrieve;

  // try to fetch data for userId
  try {
      retrieve = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  } // end try
  catch (error) {
      console.log(error);
  } // end catch

  // return information
  return retrieve.json();

} 
//complete



//function 13
const getPostComments = async(postID) =>{
if(!postID) return;
let retrieve;
try{
  retrieve = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}
catch(error){
  console.log(error);
}
return retrieve.json();
}