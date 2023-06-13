"use strict";

//Hilfsfunktionen
function createHtmlEl(TagName) {
  return document.createElement(TagName);
}

function selectByName(item) {
  return document.querySelector(item);
}

function selectByID(ID) {
  return document.getElementById(ID);
}

function addElement(tagName, options = {}) {
  const newElement = createHtmlEl(tagName);

  for (let option in options) {
    newElement[option] = options[option];
  }
  return newElement;
}
//Hilfsvariable to create id for ToDo Object List Elements

let id = +new Date();

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

//Fuegt Header in den Body
function addHeader() {
  const newHeaderEl = createHtmlEl("header");
  selectByName("body").insertBefore(newHeaderEl, selectByName("script"));
}

//Fuegt Titel hinzu
function addTitle() {
  const newTitle = createHtmlEl("h1");
  newTitle.textContent = "ToDo App";
  selectByName("header").appendChild(newTitle);
}

// Fuegt main in den body
function addMain() {
  const newMainEl = createHtmlEl("main");
  newMainEl.id = "main";
  selectByName("body").insertBefore(newMainEl, selectByName("script"));
}

// Fuegt UI-container in den body
function addUIContainer() {
  const createUIcontainer = addElement("div", {
    id: "uiContainer",
  });
  main.appendChild(createUIcontainer);
}

//Fügt Filterbuttons in den UI Container
function addFilter() {
  const createFilterContainer = createHtmlEl("div");
  createFilterContainer.id = "filterContainer";
  const createFilterText = createHtmlEl("p");
  createFilterText.innerText = "Show: ";
  createFilterContainer.appendChild(createFilterText);

  for (let filterOptionData of state.filter) {
    const newFilterOption = addElement("label", {
      for: filterOptionData.id,
      innerText: filterOptionData.id,
    });
    const newFilterStatus = addElement("input", {
      type: "radio",
      name: "filter",
      id: filterOptionData.id,
      checked: filterOptionData.checked,
    });
    createFilterContainer.appendChild(newFilterOption);
    createFilterContainer.appendChild(newFilterStatus);
  }
  uiContainer.appendChild(createFilterContainer);
  //add event listener for filter function
  selectByName("#filterContainer").addEventListener("change", render);
}

//Fuegt Eingabefeld hinzu
function addInputField() {
  const inputContainer = addElement("div", {
    className: "inputContainer",
  });

  const inputField = addElement("input", {
    type: "text",
    id: "toDoInput",
    name: "description",
    placeholder: "What'cha gonna do?",
  });

  inputContainer.appendChild(inputField);
  const submitButton = addElement("button", {
    id: "addNewToDo",
    innerText: "Let's plan!",
  });
  uiContainer.appendChild(inputContainer);
  inputContainer.appendChild(submitButton);

  // adds function to add todo with enter while input is on focus
  const submitBtn = selectByName("#addNewToDo");
  submitBtn.addEventListener("click", addNewToDo);
  toDoInput.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (["Enter"].includes(e.key)) {
      addNewToDo();
    }
  });
}

//Fuegt alle erledigte "Aufgaben-loeschen"-Feld hinzu
function addDeleteDoneButton() {
  const delBtn = addElement("button", {
    innerText: `Awesome! Delete the "Done"-ToDos, now :)`,
    id: "delBtn",
  });

  main.appendChild(delBtn);
  delBtn.addEventListener("click", deleteDone);
}

//fuegt loeschfunktion hinzu
function deleteDone() {
  for (let i = state.todo.length - 1; i >= 0; i--) {
    if (state.todo[i].done === true) {
      state.todo.splice(i, 1);
    }
  }
  saveToMemory();
  selectByID("toDoListContainer").innerHTML = "";
  render();
  selectByID("All").checked = true;
}

// Fuegt ToListContainer hinzu
function addToDoListContainer() {
  const createNewArticleEl = createHtmlEl("article");
  createNewArticleEl.id = "toDoListContainer";
  main.appendChild(createNewArticleEl);
}

//create ToDo list elements in html//
function render() {
  if (state.todo.length === 0) {
    toDoListContainer.innerHTML = "Type in your 1st ToDo to create a list";
  } else {
    toDoListContainer.innerHTML = "";
    const createToDoList = createHtmlEl("ul");
    createToDoList.id = "toDoList";

    let todos = [];
    if (selectByID("Open").checked) {
      todos = state.todo.filter((todo) => todo.done === false);
    } else if (selectByID("Done").checked) {
      todos = state.todo.filter((todo) => todo.done === true);
    } else {
      todos = state.todo;
    }

    for (let toDoListEntry of todos) {
      const newToDoListEntry = addElement("li", {
        id: toDoListEntry.id + "_liEL",
      });

      const toDoCheckbox = addElement("input", {
        id: toDoListEntry.id,
        type: "checkbox",
        name: "toDoStatus",
        checked: toDoListEntry.done,
      });

      const newToDoListElLabel = addElement("label", {
        for: toDoListEntry.id,
        id: toDoListEntry.id + "_labelEl",
        innerText: toDoListEntry.description,
      });
      if (toDoListEntry.done) {
        newToDoListElLabel.classList.add("strikeThrough");
      } else {
        newToDoListElLabel.classList.remove("strikeThrough");
      }

      toDoCheckbox.addEventListener("change", changeDone);

      newToDoListEntry.appendChild(newToDoListElLabel);
      newToDoListElLabel.appendChild(toDoCheckbox);
      createToDoList.appendChild(newToDoListEntry);
    }

    toDoListContainer.appendChild(createToDoList);

    // // fügt EventListener zu Checkboxen hinzu und fuehrt function aus
    for (let toDoListEntry of state.todo) {
      selectByID(toDoListEntry.id).addEventListener("change", changeDone);
    }
  }
  // saveToMemory();
}

//Fügt Funktion beim Auslösen der Checkboxen Eventhandler aus
function changeDone(event) {
  //find the index of object containing the id matches eventtarget id

  const index = state.todo.findIndex((item) => item.id == event.target.id);
  console.log(index);

  state.todo[index].done = event.target.checked;
  // if (!event.target.checked && state.todo[index].done) {
  //   state.todo[index].done = false;
  // } else if (event.target.checked && !state.todo[index].done) {
  //   state.todo[index].done = true;
  // }

  saveToMemory();
  render();
  //filterToDoList();
}

//add function for event listener filterfunction
// function filterToDoList() {
//   for (let i = 0; i < state.todo.length; i++) {
//     if (selectByID("Open").checked) {
//       selectByName("#delBtn").setAttribute("class", "hidden");
//       if (state.todo[i].done) {
//         selectByID(state.todo[i].id + "_liEL").classList.add("hidden");
//       } else {
//         selectByID(state.todo[i].id + "_liEL").classList.remove("hidden");
//       }
//     } else if (selectByID("Done").checked) {
//       selectByName("#delBtn").classList.remove("hidden");
//       if (!state.todo[i].done) {
//         selectByID(state.todo[i].id + "_liEL").classList.add("hidden");
//       } else {
//         selectByID(state.todo[i].id + "_liEL").classList.remove("hidden");
//       }
//     } else if (selectByID("All").checked) {
//       selectByID(state.todo[i].id + "_liEL").classList.remove("hidden");
//       selectByName("#delBtn").classList.remove("hidden");
//     }
//   }
// }

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

//speichert den State in die localMemory
function saveToMemory() {
  const jsonOfState = JSON.stringify(state);
  localStorage.setItem("ToDoList", jsonOfState);
}

//lade aus der memory
function loadStatefromlocalStorage() {
  if (localStorage.ToDoList !== undefined) {
    let loadedState = JSON.parse(localStorage.ToDoList);
    state = loadedState;
  } else {
    console.warn("No name found!");
  }
}

addHeader();
addMain();
addTitle();
addUIContainer();
addInputField();
addFilter();
addToDoListContainer();
addDeleteDoneButton();
loadStatefromlocalStorage();
render();
