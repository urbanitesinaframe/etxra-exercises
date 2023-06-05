"use strict";

const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");

const root = document.querySelector(":root");

function changeBackgroundColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  const color = "rgb" + "(" + red + "," + green + "," + blue + ")";

  root.style.setProperty("--newColor", color);
  document.querySelector("#hexcode").innerText = color;
}
// wichtig, damit der farbwert angegeben wird
changeBackgroundColor();

document.body.addEventListener("input", changeBackgroundColor);
