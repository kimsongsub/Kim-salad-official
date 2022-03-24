"use strict";

const section3_1 = document.getElementsByClassName("section3-1")[0];
const section3_2 = document.getElementsByClassName("section3-2")[0];
const section3_3 = document.getElementsByClassName("section3-3")[0];

const rigthArrow = document.querySelector("#right_arrow");
const leftArrow = document.querySelector("#left_arrow");

const section3 = [section3_1, section3_2, section3_3];

let i = 0;

function rightSlide() {
  section3[i % 3].classList.add("hideElement");
  section3[(i + 1) % 3].classList.remove("hideElement");

  i++;
}

function leftSlide() {
  section3[i % 3].classList.add("hideElement");
  section3[(i + 2) % 3].classList.remove("hideElement");

  if (i == 0) {
    i = 299;
  } else {
    i--;
  }
}

rigthArrow.addEventListener("click", rightSlide);
leftArrow.addEventListener("click", leftSlide);
