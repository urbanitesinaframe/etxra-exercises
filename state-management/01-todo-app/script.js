let id = +new Date(); //to create id for ToDo Object List Elements

//Fuegt Header in den Body
function addHeader() {
  const newHeaderEl = document.createElement("header");
  document
    .querySelector("body")
    .insertBefore(newHeaderEl, document.querySelector("script"));
}
// Fuegt main in den body
function addMain() {
  const newMainEl = document.createElement("main");
  newMainEl.id = "main";
  document
    .querySelector("body")
    .insertBefore(newMainEl, document.querySelector("script"));
}
//Fuegt Titel hinzu
function addTitle() {
  const newTitle = document.createElement("h1");
  newTitle.textContent = "ToDo App";
  document.querySelector("header").appendChild(newTitle);
}
//Fuegt Eingabefeld hinzu
function addInputField() {
  const inputContainer = document.createElement("div");
  inputContainer.className = "inputContainer";
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = "toDoInput";
  inputField.name = "description";
  inputField.placeholder = "What'cha gonna do?";
  inputContainer.appendChild(inputField);
  const submitButton = document.createElement("button");
  submitButton.id = "addNewToDo";
  submitButton.innerText = "Let's plan!";
  main.appendChild(inputContainer);
  inputContainer.appendChild(submitButton);
}
//Fuegt alle erledigte "Aufgaben-loeschen"-Feld hinzu
function deleteDone() {
  const delBtn = document.createElement("button");
  delBtn.innerText = "You're great! Now let's remove the done ToDos :)";
  delBtn.id = "delBtn";
  main.appendChild(delBtn);
}

// Fuegt ToListContainer hinzu
function addToDoListContainer() {
  const createNewArticleEl = document.createElement("article");
  main.appendChild(createNewArticleEl);
  createNewArticleEl.id = "toDoListContainer";
}

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
  todo: [],
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
}
*/

//create ToDo list elements in html//
function render() {
  if (state.todo.length === 0) {
    toDoListContainer.innerHTML = "Type in your 1st ToDo to create a list";
  } else {
    const createToDoList = document.createElement("ul");
    createToDoList.id = "toDoList";

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
      createToDoList.appendChild(newToDoListElement);
    }
    toDoListContainer.appendChild(createToDoList);
  }
}

addHeader();
addMain();
addTitle();

deleteDone();
addInputField();
addToDoListContainer();
render();

function addNewToDo() {
  state.todo.push({
    id: +new Date(),
    description: toDoInput.value,
    done: false,
  });
  toDoListContainer.innerHTML = "";
  toDoInput.value = "";
  render();
}

const submitBtn = document.querySelector("#addNewToDo");
submitBtn.addEventListener("click", addNewToDo); //hier muss eine function zum hinzufuegen des neues objektes in die objektliste rein
