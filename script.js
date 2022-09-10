"use strict";
const left = document.getElementById("left");
const right = document.querySelector(".right");
const slideContent = document.querySelector(".slide-content");

const leftMove = function () {
  let nextImg = document.createElement("img");
  nextImg.classList.add("img");
  nextImg.src = slideContent.children[4].src;
  slideContent.insertBefore(nextImg, slideContent.firstChild);
  slideContent.lastElementChild.remove();
};
const rightMove = function () {
  let nextImg = document.createElement("img");
  nextImg.classList.add("img");
  nextImg.src = slideContent.children[0].src;
  slideContent.insertBefore(nextImg, slideContent.lastChild);
  slideContent.firstElementChild.remove();
};
left.addEventListener("click", leftMove);
right.addEventListener("click", rightMove);
