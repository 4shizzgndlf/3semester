"use strict";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document
    .querySelector("#changeColorBtn")
    .addEventListener("click", changeBackgroundColor);

  document
    .querySelector("#toggleBtn")
    .addEventListener("click", toggleVisibility);

  document.querySelector("#increment").addEventListener("click", increment);

  document.querySelector("#decrement").addEventListener("click", decrement);

  document.querySelector("#reset").addEventListener("click", reset);

  document.querySelector("#addInputBtn").addEventListener("click", addInput);

  document.querySelector("#fontSizeBtn").addEventListener("click", () => handleFontSize("p"));
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

// Exercise 3: Counter

function increment() {
  const counter = document.querySelector("#counter");

  counter.textContent++; // = parseInt(counter.textContent) + 1;

  console.log("Counter incremented");
}

function decrement() {
  const counter = document.querySelector("#counter");

  counter.textContent--;

  console.log("Counter decremented");
}

function reset() {
  let counter = document.querySelector("#counter");

  counter.textContent = 0;

  console.log("Conter reset");
}

// Exercise 4: Add Input

function addInput() {
  const newInput = document.querySelector("#newInput").value;

  const output = document.querySelector("#output");

  output.textContent += newInput + " ";

  document.querySelector("#newInput").value = ""; // Clear the input field

  console.log("Input added");
}

// Exercise 5: Increase font size

function handleFontSize(tag) {
    const text = document.querySelectorAll(tag);
    text.forEach(increaseFontSize);
}

function increaseFontSize(tag) {
    console.log("Computed font size:", getComputedStyle(tag).fontSize);

    const currentFontSize = parseFloat(getComputedStyle(tag).fontSize);

    tag.style.fontSize = (currentFontSize + 1) + "px";
}
