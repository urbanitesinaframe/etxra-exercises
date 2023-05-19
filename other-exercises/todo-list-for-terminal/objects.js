const todos = [
  { description: "CSS lernen", done: false },
  { description: "JS lernen", done: false },
];

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === false) {
      console.log("[ ] " + i + ": " + todos[i].description);
    } else {
      console.log("[x] " + i + ": " + todos[i].description);
    }
  }
}

function addTodo(todo) {
  if (todo == "" && todo == undefined) {
    return "please enter a todo";
  } else {
    return todos.push({ description: todo, done: false });
  }
}

function doneTodo(todo) {
  for (let i = 0; i < todos.length; i++) {
    if (todo === todos[i].description) {
      return (todos[i].done = true);
    } else {
      ("please enter correct todo name");
    }
  }
}

function showOpenTodos() {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === false) {
      console.log("[ ] " + todos[i].description);
    }
  }
}

function deleteTodos() {
  for (let i = todos.length - 1; i > -1; i--) {
    if (todos[i].done === true) {
      todos.splice([i], 1);
    }
  }
  listTodos();
}
