"use strict";

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
    newFilterStatus.checked = filterOptionData.checked;
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
let state = {
  filter: [
    {
      id: "All",
      checked: true,
    },
    {
      id: "Open",
      checked: false,
    },
    {
      id: "Done",
      checked: false,
    },
  ],
  todo: [],
};

//lade aus der memory
function loadStatefromlocalStorage() {
  if (localStorage.ToDoList !== undefined) {
    let loadedState = JSON.parse(localStorage.ToDoList);
    state = loadedState;
  } else {
    console.warn("No name found!");
  }
}

//create ToDo list elements in html//
function render() {
  if (state.todo.length === 0) {
    toDoListContainer.innerHTML = "Type in your 1st ToDo to create a list";
  } else {
    const createToDoList = document.createElement("ul");
    createToDoList.id = "toDoList";

    for (let toDoListEntry of state.todo) {
      const newToDoListEntry = document.createElement("li");
      const toDoCheckbox = document.createElement("input");
      const newToDoListElLabel = document.createElement("label");
      newToDoListElLabel.setAttribute("for", toDoListEntry.id);
      if (toDoListEntry.done === true) {
        newToDoListElLabel.setAttribute("class", "strikeThrough");
      }

      newToDoListElLabel.innerText = toDoListEntry.description;

      toDoCheckbox.id = toDoListEntry.id;
      toDoCheckbox.type = "checkbox";
      toDoCheckbox.name = "toDoStatus";
      toDoCheckbox.checked = toDoListEntry.done;

      newToDoListEntry.appendChild(newToDoListElLabel);
      newToDoListElLabel.appendChild(toDoCheckbox);
      createToDoList.appendChild(newToDoListEntry);
    }
    toDoListContainer.appendChild(createToDoList);
    // fügt EventListener zu Checkboxen hinzu und fuehrt function aus
    for (let toDoListEntry of state.todo) {
      document
        .getElementById(toDoListEntry.id)
        .addEventListener("change", addClassToParentNode);
    }
  }
  saveToMemory();
}

function addClassToParentNode(event) {
  let thislabel = document.getElementById(event.target.id).parentNode.classList;
  console.log(event.target.id);
  if (thislabel.contains("strikeThrough")) {
    //find the index of object containing the id matches eventtarget id
    const index = state.todo.findIndex((item) => item.id == event.target.id);
    console.log(index);
    thislabel.remove("strikeThrough");
    state.todo[index].done = false;
  } else {
    const index = state.todo.findIndex((item) => item.id == event.target.id);
    console.log(index);
    thislabel.add("strikeThrough");
    state.todo[index].done = true;
  }
  saveToMemory();
}

//Fügt Eventhandler für checkboxen hinzu
function addToDoStatusHandler() {
  for (let toDoListEntry of state.todo) {
    const newCheckboxHandler = document.getElementById(toDoListEntry.id);
    newCheckboxHandler.addEventListener(
      "change",
      newCheckboxHandler.parentNode.classList.toggle("strikeThrough")
    );
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
addToDoStatusHandler();
loadStatefromlocalStorage();
render();

//fuegt neue Todo hinzu

function addNewToDo() {
  if (toDoInput.value.length < 3) {
    alert("Please add a task with more than 2 Letters!");
  } else {
    state.todo.push({
      id: +new Date(),
      description: toDoInput.value,
      done: false,
    });
    toDoListContainer.innerHTML = "";
    toDoInput.value = "";
    render();
  }
}

// adds function to add todo with enter while input is on focus
const submitBtn = document.querySelector("#addNewToDo");
submitBtn.addEventListener("click", addNewToDo);
toDoInput.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (["Enter"].includes(e.key)) {
    addNewToDo();
  }
});

function saveToMemory() {
  const jsonOfState = JSON.stringify(state);
  localStorage.setItem("ToDoList", jsonOfState);
}

function retrieveDataFromMemory() {
  if (localStorage.ToDoList !== null) {
    state = JSON.parse(localStorage.ToDoList);
  } else {
    console.warn("No name found!");
  }
}
