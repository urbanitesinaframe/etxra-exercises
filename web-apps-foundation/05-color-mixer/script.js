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
// wichtig, damit der farbwert beim laden des scripts schon angegeben wird
changeBackgroundColor();

document.body.addEventListener("input", changeBackgroundColor);
