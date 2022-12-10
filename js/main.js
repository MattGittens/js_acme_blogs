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
    let optionArray = [];
    const select = document.querySelector('select')
    for(let i = 0; i<jsonData.length; i++){
    const opt =document.createElement('option')
    opt.value = jsonData[i].id;
    opt.textContent = jsonData[i].name;
    select.appendChild(opt)
    optionArray[i] = opt;
    
    }
return optionArray;
}
}
//completed





//function 3
/*
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
            }
        }

        // If We Are Here, No Matching Post Id Is Found
        // Return NULL
        return null;
    }   
}
*/
function toggleCommentSection(postId) {
  if(!postId)
  return undefined;
  else{
  let section = document.querySelector(`section[data-post-id="${postId}"]`);
  // verify if section exist
  if (section) {
      // toggle the class `hide` on the section element
      section.classList.toggle('hide');
      return section;
  }
  else
  return null;
  // return the section element
  
}
}
//completed



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
              toggleComments(event,postId)}, false)
      }
      return buttonsList
  }
console.log(postId);
}//*fix function 3 to solve problem



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
    // e. For each comment do the following:
    // f. Create an article element with document.createElement()
    let a = document.createElement('article');
    // g. Create an h3 element with createElemWithText('h3', comment.name)
    let h3 = createElemWithText("h3", comments[i].name);
    // h. Create an paragraph element with createElemWithText('p', comment.body)
    let p1 = createElemWithText("p", comments[i].body);
    // i. Create an paragraph element with createElemWithText('p', `From: ${comment.email}`)
    let p2 = createElemWithText("p", `From: ${comments[i].email}`);
    // j. Append the h3 and paragraphs to the article element (see cheatsheet)
    a.appendChild(h3);
    a.appendChild(p1);
    a.appendChild(p2);
    // k. Append the article element to the fragment
    frag.appendChild(a);
  }
  // l. Return the fragment element
  return frag;
  
}
//completed

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

} //completed




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
//completed



//function 13
const getPostComments = async(postID) =>{
if(!postID) return;
let retrieve;
try{
  retrieve = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`);
}
catch(error){
  console.log(error);
}
return retrieve.json();
}
//completed



//function 14
const displayComments =async(postId)=> {

  if (!postId) {
      return undefined;
  }

  let section = document.createElement("section");

  section.dataset.postId = postId;

  section.classList.add("comments", "hide");

  const comments = await getPostComments(postId);

  const fragment = createComments(comments);

  section.append(fragment);

  return section;
}
//completed



//Function 15
const createPosts = async(posts)=> {
  if(!posts)
  return undefined;
  const fragment = document.createDocumentFragment();
  for (const post of posts) {
      const article = document.createElement('article');
      const h2 = createElemWithText('h2', post.title);
      const p1 = createElemWithText('p', post.body);
      const p2 = createElemWithText('p', `Post ID: ${post.id}`);
      const author = await getUser(post.userId);
      const p3 = createElemWithText('p', `Author: ${author.name} with ${author.company.name}`);
      const p4 = createElemWithText('p', author.company.catchPhrase);
      const button = createElemWithText('button', 'Show Comments');
      button.dataset.postId = post.id;
      article.append(h2, p1, p2, p3, p4, button);
      const section = await displayComments(post.id);
      article.append(section);
      fragment.append(article);
  }
  return fragment;
}
//completed




//function 16
const displayPosts = async (posts) => {
  let myMain = document.querySelector("main");
  let element = (posts) ? await createPosts(posts) : document.querySelector("main p");
  myMain.append(element);
  return element;
}
//completed




// Function 17
function toggleComments(event, postId){
  if (!event || !postId){
      return undefined;
  }
  event.target.listener = true;
  let section  = toggleCommentSection(postId);
  let button = toggleCommentButton(postId);
  return [section, button];
}
//completed



// function 18
const refreshPosts = async (posts) => {
  if (!posts){
      return undefined;
  }
  let buttons = removeButtonListeners();
  let myMain = deleteChildElements(document.querySelector("main"));
  let fragment = await displayPosts(posts);
  let button = addButtonListeners();
  return [buttons, myMain, fragment, button];
}
//completed



// Function 19
const selectMenuChangeEventHandler = async (e) => {
  if(!e)
  return undefined;
  let userId = e?.target?.value || 1;
  let posts = await getUserPosts(userId);
  let refreshPostsArray = await refreshPosts(posts);
  return [userId, posts, refreshPostsArray];
}
//completed


// Function 20
const initPage = async() => {
  let users = await getUsers();
  let select = populateSelectMenu(users);
  return [users, select];
}
//completed





// Function 21
function initApp(){
  initPage();
  let select = document.getElementById("selectMenu");
  select.addEventListener("change", selectMenuChangeEventHandler, false);
}
//completed



//Final event listener
document.addEventListener("DOMContentLoaded", initApp, false);