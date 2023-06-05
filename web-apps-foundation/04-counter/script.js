let count = 0;
let backgroundSizeCount = 0;
let counter = document.getElementById("count");

// der Text innerhalb von <p> wird durch die variable count definiert

function increaseCounter() {
  count++;
  counter.innerText = count;

  if (backgroundSizeCount < 100) {
    backgroundSizeCount++;
  } else {
    backgroundSizeCount = 1;
  }
  root.style.setProperty("--count", backgroundSizeCount + "%");
}

function resetCounter() {
  count = 0;
  backgroundSizeCount = 0;
  counter.innerText = count;
  root.style.setProperty("--count", backgroundSizeCount + "%");
  button.blur();
}

const button = document.querySelector("button");

button.addEventListener("click", resetCounter);

const root = document.querySelector(":root");

let main = document.querySelector("main");
main.addEventListener("click", increaseCounter);

document.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
});

document.getElementById("count").innerHTML = count;
