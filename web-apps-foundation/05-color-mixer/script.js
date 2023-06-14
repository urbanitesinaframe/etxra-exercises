"use strict";

const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");

const root = document.querySelector(":root");

function changeBackgroundColor() {
  const red = parseInt(redSlider.value).toString(16);
  const green = parseInt(greenSlider.value).toString(16);
  const blue = parseInt(blueSlider.value).toString(16);

  const color = "#" + red + green + blue;

  root.style.setProperty("--newColor", color);
  document.querySelector("#hexcode").innerText = color;
}

function randomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      root.style.setProperty("--newColor", data.color);
      document.querySelector("#hexcode").innerText = data.color;
      document.querySelector("#redSlider").value = data.rgb.r;
      document.querySelector("#greenSlider").value = data.rgb.g;
      document.querySelector("#blueSlider").value = data.rgb.b;
    });
}

// wichtig, damit der farbwert beim laden des scripts schon angegeben wird
changeBackgroundColor();

document.body.addEventListener("input", changeBackgroundColor);

document.getElementById("randomColor").addEventListener("click", randomColor);
