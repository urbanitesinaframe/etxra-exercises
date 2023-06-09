const header = document.querySelector("header");
const main = document.querySelector("main");
let submitBtn;

//Fuegt Titel hinzu
function addTitle() {
  const newTitle = document.createElement("h1");
  newTitle.textContent = "ToDo App";
  header.appendChild(newTitle);
}

//Fuegt Eingabefeld hinzu
function addInputField() {
  const inputContainer = document.createElement("div");
  inputContainer.className = "inputContainer";
  main.appendChild(inputContainer);
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = "toDo_test";
  inputField.name = "description";
  inputField.placeholder = "What'cha gonna do?";
  inputContainer.appendChild(inputField);
  const submitButton = document.createElement("button");
  submitButton.id = "add-new-toDo";
  submitButton.innerText = "Let's plan!";
  inputContainer.appendChild(submitButton);
}

//Fuegt alle erledigte "Aufgaben-loeschen"-Feld hinzu
function deleteDone() {
  const delBtn = document.createElement("button");
  delBtn.innerText = "You're great! Now let's remove the done ToDos :)";
  delBtn.id = "delBtn";
  main.appendChild(delBtn);
}

const toInput = document.getElementById("toDo");
const id = +new Date(); //to create id for ToDo Object List Elements

/*add new key and value to object
objektname.key(z.b. id) = 'value'

*/

/*function addToDo() {
  toDoList.id = id;
  toDoList.description = toDoDescripton.value;
}*/

// state for status and todos

const state = {
  filter: [
    {
      id: "all",
      checked: true,
    },
    {
      id: "open",
      checked: false,
    },
    {
      id: "done",
      checked: false,
    },
  ],
  todo: [
    {
      id: "testDatum",
      description: "JS code works if you can read this",
      done: false,
    },
    {
      id: "testDatum2",
      description: "JS code works if you can read this",
      done: false,
    },
  ],
};

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

/*for (let toDoData of state.todo) {
  const newToDoListElement = document.createElement("label");
  newToDoListElement.type;
}*/

//create list elements in html//
function render() {
  const toDoList = document.createElement("ul");
  toDoList.className = "toDoList";
  main.appendChild(toDoList);

  for (let toDoListEntry of state.todo) {
    const newToDoListElement = document.createElement("section");
    const newToDoListEntry = document.createElement("li");
    newToDoListEntry.id = toDoListEntry.id;
    newToDoListEntry.innerText = toDoListEntry.description;
    newToDoListElement.appendChild(newToDoListEntry);
    const toDoCheckbox = document.createElement("input");
    toDoCheckbox.type = "checkbox";
    toDoCheckbox.name = "toDoDone";
    toDoCheckbox.id = "toDoDoneCheckbox";
    toDoCheckbox.check = toDoListEntry.done;
    newToDoListElement.appendChild(toDoCheckbox);

    toDoList.appendChild(newToDoListElement);
  }
}
/* submitBtn = document.getElementById("add-new-toDo");
  submitBtn.addEventListener(
    "click",
    document.querySelector(".toDoListContainer").appendChild(toDoListe)
  ); //hier muss eine function zum hinzufuegen des neues objektes in die objektliste rein
}
*/
addTitle();
deleteDone();
addInputField();

render();
