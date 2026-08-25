"use strict";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document
    .querySelector("#changeColorBtn")
    .addEventListener("click", changeBackgroundColor);

  document
    .querySelector("#toggleBtn")
    .addEventListener("click", toggleVisibility);
}

// Exercise 1: Change Background Color

function changeBackgroundColor() {
  const color = document.querySelector("#colorPicker").value;

  document.body.style.backgroundColor = color;
}

// Exercise 2: Toggle Visibility

function toggleVisibility() {
  const toggleText = document.querySelector("#toggleText");

  console.log(toggleText.classList);

  toggleText.classList.toggle("hidden");
}