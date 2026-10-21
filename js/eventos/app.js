// function mostrarMensaje() {
//   console.log("Hiciste click");
// }

const $btn = document.querySelector("button");

//$btn.onclick = mostrarMensaje;

// $btn.addEventListener("click", (ev) => console.log(ev));
// $btn.addEventListener("contextmenu", (ev) => {
//   ev.preventDefault();
//   ev.target.textContent = "Hola";
// });

const $span = document.querySelector("span");
let count = 0;

// $btn.onclick = () => {
//   ++count;
//   $span.textContent = count;
// };
// $btn.oncontextmenu = (ev) => {
//   ev.preventDefault();
//   --count;
//   $span.textContent = count;
// };

const random = () => Math.floor(Math.random() * 100);

$btn.onclick = () => {
  $span.textContent = random();
};
