

const statusRead = document.getElementById("statusRead");
const statusNotRead = document.getElementById("statusNotRead");
//use querySelector to create button variable for functionality

const library = [
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marijn Haverbek',
    readingStatus: 'true'
  },
  //create three more objects in this array of object similar to the object above,
  //with the readingStatus set to false for two of the and true for one of them.
];

button.addEventListener("click", function createList() {
  //iterate through library array of objects created above
  let book = ["'" + <get the title of each object in library here> + "'" + ' by ' + <get the author of each object in library here> + "."];
  if(set if condition to check if library book reading status equals true here){
    const linebreak = document.createElement("br");
    statusRead.append(book);
    statusRead.appendChild(linebreak);
  } else {
    const linebreak = document.createElement("br");
    //append book message to statusNotRead here similar to above
    statusNotRead.appendChild(linebreak);
  }
//remember the closing curly brace above for the iteration "}"

button.disabled = true;
});

document.getElementById("addButton").addEventListener("click", function(){
  let title = document.getElementById("title").value;
  //get the value of author and set to variable using similar to above line
  //get the value of readingStatus input and set to variable similar to above line


  //create newObj variable that contains an object with the keys title, author and readingStatus set to empty strings

  newObj.title = title;
  //set the empty string of author in newObj to the value from author input similar to the line above
  //set the empty string of readingStatus in newObj to the value from readingStatus input similar to the line above

  //use push function to push the newObj that now has values to the library array of objects created above
  // use exampleArr.push(objectYouWantToPush);

    let book = ["'" + newObj.title + "'" + ' by ' + newObj.author + "."];
    //add a condition below that checks if the reading status of newObj is true (hint: remember your values)</get></get>
    if(){
      const linebreak = document.createElement("br");
      statusRead.append(book);
      statusRead.appendChild(linebreak);
    } else {
      const linebreak = document.createElement("br");
      //append or "add" value of statusNotRead to the message set to book variable, similar to code in if statement above
      statusNotRead.appendChild(linebreak);
    }
    //call resetForm function here
});

function resetForm() {
 title.value = "";
 //reset author and readingStatus input values using two more lines of code similar to the above line
};
