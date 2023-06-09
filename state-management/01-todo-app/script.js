const header = document.querySelector("header");
const main = document.querySelector("main");

function addTitle() {
  const newTitle = document.createElement("h1");
  newTitle.textContent = "ToDo App";
  header.appendChild(newTitle);
}

// ----- hier kommen die ToDos rein ---

const toInput = document.getElementById("toDo");
const id = +new Date(); //to create id for ToDo Object List Elements

function addInputField() {
  const inputcontainer = document.createElement("div");
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = "toDo_test";
  inputField.name = "description";
  inputField.placeholder = "What'cha gonna do?";
  main.appendChild(inputField);
  const submitButton = document.createElement("button");
  submitButton.id = "add-new-toDo";
  submitButton.innerText = "Let's plan!";
  main.appendChild(submitButton);
}

/*add new key and value to object
objektname.key(z.b. id) = 'value'

*/

/*function addToDo() {
  toDoList.id = id;
  toDoList.description = toDoDescripton.value;
}*/

//define state

const toDoListObjectElements = [
  {
    description: "",
    done: false,
  },
];

for (let toDoListElementObjectData of toDoListObjectElements) {
  const newToDoListElement = document.createElement("label");
  newToDoListElement.type;
}

//später if done = true, checkbox checken und den Eintrag durchstreichen, Filter funktioniert auf den key: done false || true

/*muss eine ID setzen, am besten unique z.b. mit date 
ddttyyhhmmss

const now = new Date();
let id=""
let year = now.getYear;
let month = now.getMonth;
let date = now.getDate;
let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  return id= year+month+date+hours+minutes+seconds
  >> +new Date()
*/
let toDo = [{ toDo: "", checked: false }];

const checkbox = document.querySelector("#checkbox");
const label = document.querySelector("label");

function checkStatus() {
  return checkbox.checked
    ? label.classList.add("strikeThrough")
    : label.classList.remove("strikeThrough");
}

checkbox.addEventListener("change", checkStatus);

// Hier kommen die neuen ToDos rein
const toDoList = [
  {
    id: "testDatum",
    description: "Fegen",
    done: false,
  },
  {
    id: "testDatum2",
    description: "Fegen2",
    done: false,
  },
];

//create list elements//
function render() {
  const toDoListe = document.createElement("ul");
  toDoListe.classList.add("toDoList");

  for (let toDoListEntry of toDoList) {
    const newToDoListElement = document.createElement("section");
    const newToDoListEntry = document.createElement("li");
    newToDoListEntry.id = toDoListEntry.id;
    newToDoListEntry.innerText = toDoListEntry.description;
    newToDoListElement;
    toDoListe.appendChild(newToDoListEntry);
  }

  const submitBtn = document.getElementById("addToDo");
  submitBtn.addEventListener(
    "click",
    document.querySelector(".toDoListContainer").appendChild(toDoListe)
  );
}

addTitle();
addInputField();
render();
