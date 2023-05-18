const todos = [
  { description: "CSS lernen", done: false },
  { description: "JS lernen", done: false },
];

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === false) {
      console.log("[ ] " + todos[i].description);
    } else {
      console.log("[x] " + todos[i].description);
    }
  }
}
