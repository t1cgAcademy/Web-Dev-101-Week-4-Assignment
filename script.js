let roster = [
  {name: "Ovechkin", number: 8, age: 33, weight: 239},
  {name: "Backstrom", number: 19, age: 30, weight: 200},
  {name: "Oshie", number: 77, age: 29, weight: 205},
  {name: "Kuznetsov", number: 92, age: 25, weight: 204},
  {name: "Carlson", number: 74, age: 29, weight: 215}
];

addPlayer = (name, number, age, weight) => {
  let newPlayer = {
    name: '',
    number: '',
    age: '',
    weight: ''
  }
  
  newPlayer.name = name;
  if (!isNaN(number)) {
    newPlayer.number = number;
  } else {
    alert("Invalid number. Must be an integer")
    return
  }
  if (!isNaN(age)) {
    newPlayer.age = age;
  } else {
    alert("Invalid age. Must be an integer")
    return
  }

  if (!isNaN(weight)) {
    newPlayer.weight = weight;
  } else {
    alert("Invalid weight. Must be an integer")
    return
  }

  roster.push(newPlayer)
}

handleAddPlayer = () => {
  // getting values from html
  let docName = document.getElementById('name').value;
  let docNumber = document.getElementById('number').value;
  let docAge = document.getElementById('age').value;
  let docWeight = document.getElementById('weight').value;

  // change roster value
  addPlayer(docName, docNumber, docAge, docWeight)

  // update html values
  resetForm();
  updateDocument();
}

getOldestPlayer = () => {
  let oldestPlayer = roster[0]
  for (let i = 0; i < roster.length; i++) {
    let currentPlayer = roster[i]
    if (currentPlayer.age > oldestPlayer.age) {
      oldestPlayer = currentPlayer
    }
  }
  return oldestPlayer
}

handleGetOldestPlayer = () => {
  let oldestPlayer = getOldestPlayer()
  let docOldestPlayer = document.getElementById('oldestPlayer')
  docOldestPlayer.innerHTML = JSON.stringify(oldestPlayer)
}

resetForm = () => {
  document.getElementById('name').value = '';
  document.getElementById('number').value = '';
  document.getElementById('age').value = '';
  document.getElementById('weight').value = '';
}

updateDocument = () => {
  let docRoster = document.getElementById('roster');
  docRoster.innerHTML = JSON.stringify(roster);
}
