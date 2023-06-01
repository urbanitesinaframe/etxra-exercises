const btn = document.querySelector(".button");
const body = document.querySelector(".body");

btn.addEventListener("click", function () {
  btn.classList.toggle("btn-dark-mode");
  body.classList.toggle("dark-mode");
  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
