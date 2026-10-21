// import { getArea } from "./calculos.js";
// import getArea from "./calculos.js";
import { getArea, getPerimetro } from "./calculos.js";

// const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $span = document.querySelector("span");

let width = window.innerWidth;
let height = window.innerHeight;

$input.max = Math.min(width, height) - 110;

// const $btnDibujar = document.querySelector("button");
const $circle = document.querySelector(".circle");

$input.addEventListener("input", (e) => {
  const size = e.target.value;
  $span.textContent = `${size}px - Area: ${getArea(size)} - Perimetro: ${getPerimetro(size)}`;

  $circle.style.width = size + "px";
  $circle.style.height = size + "px";
});

// console.log("Form: ", $form);

// const handleDibujar = () => {
//   //   console.log($input.value);
//   const size = $input.value;

//   $circle.style.width = size + "px";
//   $circle.style.height = size + "px";
// };
// // como se menaja adibujar

// $form.addEventListener("submit", (ev) => {
//   ev.preventDefault(); //el evento no se tiene que comportar como defecto

//   // ------------------------------------------
//   //   const data = new FormData($ev.target);
//   const data = new FormData($form);
//   const size = data.get("size");

//   $circle.style.width = size + "px";
//   $circle.style.height = size + "px";
// });

// $btnDibujar.onclick = handleDibujar;
// ||
// $btnDibujar.addEventListener("click", handleDibujar);
