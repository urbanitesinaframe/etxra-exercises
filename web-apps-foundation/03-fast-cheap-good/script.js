const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

fast.addEventListener("click", function () {
  fast.checked.toggle = true;
  fast.classList.remove("lastClicked");
  if (document.querySelectorAll("input:checked").length === 3) {
    document.querySelector(".lastClicked").checked = false;
    document.querySelector(".lastClicked").classList.remove("lastClicked");
    fast.classList.add("lastClicked");
  } else {
    if (document.querySelectorAll("input:checked").length === 2) {
      fast.classList.add("lastClicked");
    } else {
      if (
        document.querySelectorAll("input:checked").length === 1 &&
        document.querySelectorAll(".lastchecked").length === 1
      ) {
        document.querySelector(".lastClicked").classList.remove("lastClicked");
      }
    }
  }
});

cheap.addEventListener("click", function () {
  cheap.checked.toggle = true;
  cheap.classList.remove("lastClicked");
  if (document.querySelectorAll("input:checked").length === 3) {
    document.querySelector(".lastClicked").checked = false;
    document.querySelector(".lastClicked").classList.remove("lastClicked");
    cheap.classList.add("lastClicked");
  } else {
    if (document.querySelectorAll("input:checked").length === 2) {
      cheap.classList.add("lastClicked");
    } else {
      if (
        document.querySelectorAll("input:checked").length === 1 &&
        document.querySelectorAll(".lastchecked").length === 1
      ) {
        document.querySelector(".lastClicked").classList.remove("lastClicked");
      }
    }
  }
});

good.addEventListener("click", function () {
  good.checked.toggle = true;
  good.classList.remove("lastClicked");
  if (document.querySelectorAll("input:checked").length === 3) {
    document.querySelector(".lastClicked").checked = false;
    document.querySelector(".lastClicked").classList.remove("lastClicked");
    good.classList.add("lastClicked");
  } else {
    if (document.querySelectorAll("input:checked").length === 2) {
      good.classList.add("lastClicked");
    } else {
      if (
        document.querySelectorAll("input:checked").length === 1 &&
        document.querySelectorAll(".lastchecked").length === 1
      ) {
        document.querySelector(".lastClicked").classList.remove("lastClicked");
      }
    }
  }
});
