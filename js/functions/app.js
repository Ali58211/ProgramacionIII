// Funciones
/* node ./app.js --para ejecutar el archivo en la terminal
 node --watch ./app.js --para ejecutar el archivo seguido en la terminal */

/* bienvenido(); //solo aplica si la funcion esta en el mismo scope

 function bienvenido() {
   console.log("Hola buenas a todos!");
 } */

//funciones anonimas -- no tiene hoisting
/*
const bienvenido = function () {
  console.log("hola buenas tardes");
}; //const ya que se guarda el valor sin cambiar

bienvenido(); */

//keyborad shortand

// IIFE -- Inmediaty Invoked Function Expression
/*
(function () {
  console.log("hola sor la anonima! :)");
})();*/
/*
function cualquiera(...args) {
  console.log(args);
  // console.log(args[1]);
}
cualquiera(2, 3, 4, 5, true);*/
/*
function sumar(a, b) {
  return a + -b;
}

const res = sumar(2, "6", 4, 5, true);

console.log(res);*/
/*
function capitalizeOne(str) {
  if (str == "") {
    console.log(null);
  } else if (str == Number) {
    console.log("No es texto");
  }
}

const res = capitalizeOne(23);
console.log(res);*/
/*
function capitalizeOne(str) {
  if (str == "" || str == null) {
    return null;
  }
  if (!isNaN(str)) {
    return "No es texto";
  }
  let strFinal = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    strFinal += str[i];
  }
  return strFinal;
}

const res1 = capitalizeOne(4356);
const res2 = capitalizeOne("");
const res3 = capitalizeOne("hola");

console.log(res1, res2, res3);*/

// 23 -> No es texto
// hola -> Hola
// null

// = -> asignacion
// == -> comparacion
// === -> comparacion estricta (tipos) -> buena practica

// console.log(2 === "2");

// Arrows Functions (Las favoritas de todos)
//Son anonimas, si las ejecuto las tengo que guardar en algun lugar
//No tiene hoisting
/*
const isMayor = (a, b) => a > b;

console.log(isMayor(2, "a"));*/

// Un metodo de una clase no puede ser una funcion flecha (Arrows Functions)
// Pero si se puede meter dentro de un objeto
/*
const obj = {
  nombre: "Juan",
  sumar: () => {},
};*/
//------
//genera dependencias entre funciones
/*
function mostrar(value) {
  console.log("Valor: ", value);
}
function mostrarConEmoji(value) {
  console.log("😊 ", value);
}
function hola(conEmoji) {
  let msg = "Hola que tal";
  if (conEmoji) {
    mostrarConEmoji(msg);
  } else {
    mostrar(msg);
  }
}
// hola(true);
function holaCb(cb) {
  let msg = "hola que tal";
  if (cb) {
    cb(msg);
  } else {
    console.log(msg);
  }
}

holaCb(mostrarConEmoji); //se dice que tiene que hacer, pero no.. como lo tiene que hacer
*/

// callback -> !important

// callback es una funcion que es pasada por parametros a otra funcion

//ejemplo
/*
function a(fn) {
  //aca pasan muchas cosas...
  fn();
}

function b() {
  console.log("Soy el callback");
}

a(b);*/

function operacion(cb) {
  if (cb) {
    const res = cb(2, 4);
    return "el resultado es: " + res;
  }
  //cb && cb();
}
const multiplicar = (a, b) => a * b;

const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const dividir = (a, b) => a / b;

console.log(operacion(multiplicar));
