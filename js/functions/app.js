// Funciones
/* node ./app.js --para ejecutar el archivo en la terminal
 node --watch ./app.js --para ejecutar el archivo seguido en la terminal, para salir ctrl + c (copy)*/

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
/*
function operacion(cb) {
  if (cb) {
    const res = cb(3, 2);
    return "el resultado es: " + res;
  }
  //cb && cb();
}
const multiplicar = (a, b) => a * b;

const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

// const dividir = (a, b) => b != 0 && a / b;
const dividir = (a, b) => {
  if (b == 0) return "No se puede dividir por cero";
  return a / b;
};

//console.log(operacion(restar));
console.log(operacion(() => dividir(1, 3)));*/

// Si necesito pasarle parametros a un callback, envuelvo ese callback en una funcion anonima "() =>"

// Closure

// Closure es una funcion que retorna otro funcion

// const wrapper = () => multiplicar(5, 5);
// console.log(operacion(() => restar(5, 7)));

// metodos de array

// const plus2 = (n) => n * 2;

//const numbers = [4, 6, 8, 2, 9, 3];
const numbers = [4, 6, 8, 2, 9, 3]
  .toSorted((a, b) => a - b)
  .map((n) => n * 2)
  .filter((n) => n > 10); // se pueden concatenar metodos mintras sean inmutables

// const newNumbers = numbers.map(plus2);
// const newNumbers = numbers.map((n) => n.toString()); // .map promueve/incentiva la inmutabilidad

// const newNumbers = numbers.filter((n) => n % 2 !== 0);// filter no transforma el array original, recive un parametro ´predicador´ y lo filtra
// const newNumbers = numbers.filter((n) => n % 2 == 0);
// const newNumbers = numbers.filter((n) => n >= 3);
// const newNumbers = numbers.sort((a, b) => b - a); //.sort modifica el array original, ordena le array
// const newNumbers = numbers.sort((a, b) => a - b);
// const newNumbers = numbers.toSorted((a, b) => a - b); //ordena el array sin modificar el original

//console.log(newNumbers);
//console.log(numbers);

// Predicado --> proposición = sujeto predicado
/*
const imp1 = [4, 6, 8, "a", 2, 9, 3, "b"];
const imp2 = [2, 16, 14, 6, 9, 10, 8];
const imp3 = [1, 6, 7, 3, 2, 11, 13]; // 6 es el impostor

const imp4 = [8, 2, 5, 1, 8, 7, 13]; // 7 es el impostor // No se puede, aun...

console.log(imp1.find((n) => isNaN(n))); //.find escuentra el numero como el filter pero sin la validacion
console.log(imp1.filter((n) => isNaN(n))); // filter para mas de un elemento
// console.log(imp2);
// console.log(imp3);
// console.log(imp4);
*/

// !!El siguiente metodo no es recomendable utilizarlo, si es posible use otro ¡¡

const nums = [3, 6, 9, 2, 7, 1, 7, 8, 4];
/*
const res = nums.reduce((act, acc) => act * acc, 0);

console.log(res);*/
// ---------------------------

// const res = nums.slice(0, 3); //corta una parte del array para copiarla
// const res = nums.splice(0, 3); // separa una parte del array original

// console.log(res, nums);

const res = nums.forEach(console.log);
