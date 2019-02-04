const statusRead = document.getElementById('statusRead');
const statusNotRead = document.getElementById('statusNotRead');
const button = document.querySelector('button');

const library = [{
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marijn Haverbek',
    readingStatus: 'true',
  },
  {
    title: 'Second Book',
    author: 'Second Author',
    readingStatus: 'false',
  },
  {
    title: 'Third Book',
    author: 'Third Author',
    readingStatus: 'true',
  },
  {
    title: 'Fourth Book',
    author: 'Fourth Author',
    readingStatus: 'false',
  },
];

checkStoredBooks = () => {
  for (let i = 0; i < library.length; i++) {
    let book = ["'" + library[i].title + "'" + ' by ' + library[i].author + '.'];
    if (library[i].readingStatus === 'true') {
      const linebreak = document.createElement('br');
      statusRead.append(book);
      statusRead.appendChild(linebreak);
    } else {
      const linebreak = document.createElement('br');
      statusNotRead.append(book);
      statusNotRead.appendChild(linebreak);
    }
  }
  button.disabled = true;
}

addBook = () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let readingStatus = document.getElementById('readingStatus').checked;

  let newObj = {
    title: '',
    author: '',
    readingStatus: '',
  };

  newObj.title = title;
  newObj.author = author;
  newObj.readingStatus = readingStatus;

  library.push(newObj);

  console.log("show me newObj", newObj)
  let book = ["'" + newObj.title + "'" + ' by ' + newObj.author + '.'];
  if (newObj.readingStatus === true) {
    console.log("does checked value work here?!?!", newObj.readingStatus)
    const linebreak = document.createElement('br');
    statusRead.append(book);
    statusRead.appendChild(linebreak);
  } else {
    const linebreak = document.createElement('br');

    statusNotRead.append(book);
    statusNotRead.appendChild(linebreak);
  }

  resetForm();
}

function resetForm() {
  title.value = '';
  author.value = '';
  readingStatus.value = '';
}