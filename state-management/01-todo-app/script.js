let id = +new Date(); //to create id for ToDo Object List Elements

//Fuegt Header in den Body
function addHeader() {
  const newHeaderEl = document.createElement("header");
  document
    .querySelector("body")
    .insertBefore(newHeaderEl, document.querySelector("script"));
}
//Fuegt Titel hinzu
function addTitle() {
  const newTitle = document.createElement("h1");
  newTitle.textContent = "ToDo App";
  document.querySelector("header").appendChild(newTitle);
}
// Fuegt main in den body
function addMain() {
  const newMainEl = document.createElement("main");
  newMainEl.id = "main";
  document
    .querySelector("body")
    .insertBefore(newMainEl, document.querySelector("script"));
}
// Fuegt UI-container in den body
function addUIContainer() {
  const createUIcontainer = document.createElement("div");
  createUIcontainer.id = "uiContainer";
  main.appendChild(createUIcontainer);
}
//Fügt Filterbuttons in den UI Container
function addFilter() {
  const createFilterContainer = document.createElement("div");
  createFilterContainer.id = "filterContainer";

  for (let filterOptionData of state.filter) {
    const newFilterOption = document.createElement("label");
    newFilterOption.for = filterOptionData.id;
    newFilterOption.innerText = filterOptionData.id;
    const newFilterStatus = document.createElement("input");
    newFilterStatus.type = "radio";
    newFilterStatus.name = "filter";
    newFilterStatus.id = filterOptionData.id;
    if (filterOptionData.checked === "true") {
      newFilterStatus.checked = true;
    }
    createFilterContainer.appendChild(newFilterOption);
    createFilterContainer.appendChild(newFilterStatus);
  }
  uiContainer.appendChild(createFilterContainer);
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
  uiContainer.appendChild(inputContainer);
  inputContainer.appendChild(submitButton);
}
//Fuegt alle erledigte "Aufgaben-loeschen"-Feld hinzu
function deleteDone() {
  const delBtn = document.createElement("button");
  delBtn.innerText = "You're great! Now let's remove the done ToDos :)";
  delBtn.id = "delBtn";
  uiContainer.appendChild(delBtn);
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
      id: "All",
      checked: "true",
    },
    {
      id: "Open",
      checked: "false",
    },
    {
      id: "Done",
      checked: "false",
    },
  ],
  todo: [],
};

//später if done = true, checkbox checken und den Eintrag durchstreichen, Filter funktioniert auf den key: done false || true

/*
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
addUIContainer();
addFilter();
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
submitBtn.addEventListener("click", addNewToDo);
toDoInput.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (["Enter"].includes(e.key)) {
    addNewToDo();
  }
});
