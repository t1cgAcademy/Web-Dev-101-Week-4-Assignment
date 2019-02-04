// Create selector with title statusRead, using getElementById to get
// the element with id statusRead for book organization and display.
// Create selector for statusNotRead (just like above)
// Create selector called button set to id of the button element that checks the book list

const library = // define me
  // Initialize and define an array of objects with variable name library.
  // There should be four objects in your Array, each object must have
  // three keys => title, author, and readingStatus.  The values of title
  // and author should be strings (whatever title and author you choose).
  // The value of readingStatus should be either true or false as a string (important!!)

  (checkStoredBooks = () => {
    // Loop through library {
    // 1. Create variable named book that will show title and author in the following
    // format...
    //  -'Steve: Enough Said' by Steve Flint.
    //  -Be Careful: the title and author (and later when handling reading status, readingStatus)
    //   must be dynamic values that have been looped through.  For example, the title value should
    //   be set to the value of each title in the array of objects defined AnimationPlaybackEvent.
    //  -Hint: You should let your book title value be able to change. (keyword in this sentence!?!?)

    // 2. Set up your control structure for organizing books in predefined array. You will use
    // the following logic...
    //   -If the reading status of each is true, then...
    //     -Create constant variable called linebreak defined by the creation of a line break element
    //     -Add book to statusRead paragraph tag
    //     -Add linebreak as a child of statusRead
    //     -Hint: If confused by how to add things, think of add as another word, a synonym perhaps!?!?
    //   -If anything else happens then...
    //     -Create constant variable called linebreak defined by the creation of a line break element
    //     -Add book to statusNotRead paragraph tag
    //     -Add linebreak as a child of statusNotRead
    //   -Bonus:  One should always be thinking of how to make their code more efficient.  How could you
    //   manipulate scope to avoid repetition in this loop? Hint, if you got here, you
    //   have aleady done something similar.
    // }

    button.disabled = true;
    // Disable your button in this function but after loop has ended
  });

addBook = () => {
  // Declare variable called title defined by the value of the title input
  // Declare variable called author defined by the value of the author input
  // Declare variable called readingStatus defined by the value of readingStatus checkbox
  //   -Declaring this is a bit different, given that there is a box that must be checked,
  //   which makes the value a Boolean. <== The word you need is in this sentence.

  // Declare a newObj object variable with keys title, author and reading status intially defined with
  // empty strings
  // If your variable values are dynamic, or will change at some point, be sure to let them.

  // Set the title of your newly declared object to the value of title input
  // Set the author to value of author input
  // Set readingStatus to value of readingStatus checkbox

  // Add the new object to your library.  If you can't think of how, don't push your luck (or maybe you should).

  // Organize newly entered books using what you have done already as an example

  resetForm();
};

function resetForm() {
  // Reset title and author input values
}

// What could you change in this program to adhere to the DRY principle of programming?
