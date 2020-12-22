const statusRead = document.getElementById('statusRead');
const statusNotRead = document.getElementById('statusNotRead');
const button = document.querySelector('#checkBooks');

const library = [
  {
    title: 'book one',
    author: 'author one',
    readingStatus: 'true',
  },
  {
    title: 'book two',
    author: 'author two',
    readingStatus: 'false',
  },
  {
    title:'book three',
    author:'author three',
    readingStaus:'true',
  },
  {
    title:'book four',
    author:'author four',
    readingStaus:'false',
  },
];

  (checkStoredBooks = () => {
    for (let i = 0; i<library.length; i++) {
      let book = ["'" + library[i].title + "'" + " by " + library[i].author + "."];
      
      const linebreak = document.createElement('br');
      if (library[i].readingStatus === 'true') {
        statusRead.append(book);
        statusRead.appendChild(linebreak);
      } else {
        statusNotRead.append(book);
        statusNotRead.appendChild(linebreak);
      }
    }
    button.disabled = true;
  });

addBook = () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let readingStatus = document.getElementById('readingStatus').checked;

  let newObj = { title: '', author: '', readingStatus: '' };

  newObj.title = title;
  newObj.author = author;
  newObj.readingStatus = readingStatus;

  library.push(newObj);
  
  let book = ["'" + library[i].title + "'" + " by " + library[i].author + "."];
  
  //below can be called by checkStoredBooks()//
  const linebreak = document.createElement('br');
  if (library[i].readingStatus === 'true') {
    statusRead.append(book);
    statusRead.appendChild(linebreak);
  } else {
    statusNotRead.append(book);
    statusNotRead.appendChild(linebreak);
 }

  resetForm();
};

function resetForm() {
  title.value = '';
  author.value = '';
}

const unreadBookArrayView = document.querySelector('.unreadBookArrayView');
const readBookArrayView = document.querySelector('.readBookArrayView');
let unreadBookArray = [];
let readBookArray = [];

makeArray = () => {
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus === false) {
      unreadBookArray.push(library[i].title + ',' + '<br/>');
    } else {
      readBookArray.push(library[i] + ',' + '<br />');
    }
  }
  unreadBookArrayView.innerHTML = unreadBookArray.join('');
  readBookArrayView.innerHTML = readBookArray.join('');

};

updateArray = () => {
  unreadBookArray = [];
  readBookArray = [];
  unreadBookArrayView.innerHTML = '';
  readBookArrayView.innerHTML = '';
  makeArray();
};
//////////////////////////////////////////////
