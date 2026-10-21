// const $titulo = document.getElementById("titulo");
// $titulo.textContent = "Hola bienvenidos";

// document.title = "Wow"; //cambia el nombre del documento

// const $titulo = document.querySelector("#titulo"); // es css dentro de js para manipular html
// $titulo.textContent = "Hola bienvenidos";

// const $titulo = document.querySelectorAll("h1");
// console.log([...$titulos]);

const $root = document.getElementById("root"); // recupera el elemnto main
// console.log($root);

// const $titulo = document.createElement("h1");

// const nombre = window.prompt("Ingresa tu nombre: ");
// $titulo.textContent = `Hola, bienvenido ${nombre}`;

// const $p = document.createElement("p");
// const apellido = window.prompt("Ingresa tu apellido: ");
// $p.textContent = apellido;
// // $titulo.textContent = "Hola! soy el primer tallo";

// // $root.appendChild($titulo);
// // $root.appendChild($p);
// // ||
// $root.append($titulo, $p);

//Solicitar al usuario dos elemntos y con eso usar los valores matematicos

// Number(param) -> convierte (o trata de convertir) un string a numero.
// isNaN(param) -> determina si una entrada es numero.
// || -> operador OR logico, se usan dos pipes (|)
let n1 = window.prompt("Ingrese el primer numero: ");
let n2 = window.prompt("Ingrese el segundo numero: ");
const $h1 = document.createElement("h1");

if (isNaN(n1) || isNaN(n2)) {
  $h1.textContent =
    "No se puede realizar las operaciones, recarge la pagina (F5)";
  $root.appendChild($h1);
} else {
  $h1.textContent = "Operaciones: ";
  $root.appendChild($h1);
  n1 = Number(n1);
  n2 = Number(n2);

  const $suma = document.createElement("p");
  const $resta = document.createElement("p");
  const $multiplicacion = document.createElement("p");
  const $divicion = document.createElement("p");

  $suma.textContent = `Suma: ${n1 + n2}`;
  $resta.textContent = `Resta: ${n1 - n2}`;
  $multiplicacion.textContent = `Multiplicacion: ${n1 * n2}`;
  $divicion.textContent = `Divicion: ${n2 === 0 || n1 === 0 ? "Imposible!" : n1 / n2}`;

  $root.append($suma, $resta, $multiplicacion, $divicion);
}
