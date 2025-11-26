//1.

const ex1Btn1 = document.querySelector("#ex1Btn1");
const ex1Btn2 = document.querySelector("#ex1Btn2");
const ex1Para = document.querySelector("#ex1Para");

let num = 0;
let interval1;

ex1Btn1.addEventListener("click", function () {
  interval1 = setInterval(function () {
    num++;
    ex1Para.textContent = num;
  }, 1000);
});

ex1Btn2.addEventListener("click", function () {
  clearInterval(interval1);
});

// 2.

const ex2Btn1 = document.querySelector("#ex2Btn1");
const ex2Btn2 = document.querySelector("#ex2Btn2");
const ex2Div = document.querySelector("#ex2Div");

let interval2;

function changeColor(color) {
  ex2Div.style.backgroundColor = color;
}
const colors = ["blue", "green", "red"];
let i = 0;

ex2Btn1.addEventListener("click", function () {
  interval2 = setInterval(function () {
    changeColor(colors[i]);
    i++;
    if (i === 3) {
      i = 0;
    }
  }, 2000);
});

ex2Btn2.addEventListener("click", function () {
  clearInterval(interval2);
});

// 3.

const ex3Btn1 = document.querySelector("#ex3Btn1");
const ex3Btn2 = document.querySelector("#ex3Btn2");
const ex3Div = document.querySelector("#ex3Div");

let size = 50;
let interval3;

ex3Btn1.addEventListener("click", function () {
  interval3 = setInterval(function () {
    size += 10;
    ex3Div.style.width = `${size}px`;
    ex3Div.style.height = `${size}px`;
  }, 1000);
});

ex3Btn2.addEventListener("click", function () {
  clearInterval(interval3);
});
