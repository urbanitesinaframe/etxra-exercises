const todos = ["CSS lernen", "JS lernen"];

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

function addTodo(todo) {
  return todo !== "" && todo !== undefined
    ? todos.push(todo)
    : "please enter a value";
}

function deleteTodo(todo) {
  return todos.splice(todos.indexOf(todo), 1);
}
