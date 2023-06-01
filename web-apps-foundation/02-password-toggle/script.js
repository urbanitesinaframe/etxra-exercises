const inputfield = document.querySelector("#password");
const toggleBtn = document.querySelector(".VisibilityToggle");

toggleBtn.addEventListener("click", function () {
  if (inputfield.type == "text") {
    inputfield.type = "password";
  } else {
    inputfield.type = "text";
  }
  if (toggleBtn.innerHTML == "Show Password") {
    toggleBtn.innerHTML = "Hide Password";
  } else {
    toggleBtn.innerHTML = "Show Password";
  }
});
