const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

fast.addEventListener("click", function () {
  fast.checked.toggle = true;
  fast.classList.remove("lastClicked");
  if (document.querySelectorAll("input:checked").length === 2) {
    fast.classList.add("lastClicked");
  }
});
