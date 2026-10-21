// Tipos:
// Asincronismo Secuencial -- tareas que para hacer una hay que terminar otra
// Asincronismo en Paralelo -- tareas que demandan tiempo pero se hacen a la vez

//Secuencial
//cortar el pasto

// setTimeout(() => console.log("hola"), 5000); // lanza em mensaje en 5 milisegundos

// 1. Me quejo.
// 2. Pasar el rastrillo.
// 3. Preparar la maquina.
// 4. Cortar el pasto.
// 5. Limpiar.
// 6. Tomarse una coca.

/*
function quejarse(cb) {
  setTimeout(() => {
    console.log("Mi#@$!");
    cb && cb();
  }, 3000);
}
function pasarRastrillo(cb) {
  setTimeout(() => {
    console.log("Ya pase el rastrillo");
    cb && cb();
  }, 5000);
}
function prepararMaquina(cb) {
  setTimeout(() => {
    console.log("Maquina preparada");
    cb && cb();
  }, 1000);
}
function cortarPasto(cb) {
  setTimeout(() => {
    console.log("uff, pasto cortado");
    cb && cb();
  }, 6000);
}
function limpiar(cb) {
  setTimeout(() => {
    console.log("todo limpito");
    cb && cb();
  }, 5500);
}
function tomarBebida(cb) {
  setTimeout(() => {
    console.log("que refrescante");
    cb && cb();
  }, 3000);
}
*/
// console.time("tiempo");
// quejarse(() =>
//   pasarRastrillo(() =>
//     prepararMaquina(() =>
//       cortarPasto(() =>
//         limpiar(() => tomarBebida(() => console.timeEnd("tiempo"))),
//       ),
//     ),
//   ),
// );

// Callback hell ⤴️

// Promesa⤵️
// 1. Pending
// 1-1. Fullfilled
// 1-1-1. Resolved (resuelto)
// 1-2. Rejected (rechazado)

function quejarse() {
  return new Promise((res, rej) => {
    const ok = true;
    setTimeout(() => {
      if (ok) res("Mi#@$!");
      else rej("Me escucharon insultar");
    }, 3000);
  });
}
function pasarRastrillo() {
  return new Promise((res, rej) => {
    const ok = true;
    setTimeout(() => {
      if (ok) res("Ya pase el rastrillo");
      else rej("Se me rompio el rastrillo");
    }, 5000);
  });
}
function prepararMaquina() {
  return new Promise((res, rej) => {
    const ok = true;
    setTimeout(() => {
      if (ok) res("Maquina preparada");
      else rej("La maquina no arranca");
    }, 1000);
  });
}
function cortarPasto() {
  return new Promise((res, rej) => {
    const ok = true;
    setTimeout(() => {
      if (ok) res("uff, pasto cortado");
      else rej("Lo que se corto, no fue el pasto..");
    }, 6000);
  });
}
function limpiar() {
  return new Promise((res, rej) => {
    const ok = true;
    setTimeout(() => {
      if (ok) res("todo limpito");
      else rej("No hay bolsa de residuo");
    }, 5500);
  });
}
function tomarBebida(time) {
  return new Promise((res, rej) => {
    const ok = true;
    setTimeout(() => {
      if (ok) res("Que refrescante");
      else rej("No hay nada para tomar :(");
    }, time);
  });
}

// quejarse()
//   .then(pasarRastrillo)
//   .then(prepararMaquina)
//   .then(cortarPasto)
//   .then(limpiar)
//   .then(tomarBebida)
//   .then((msj) => console.log(msj))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Listo, no trabajo más")); // si hay un error el cstch lo muestra

// async/await
async function flujo() {
  try {
    /*
    await quejarse();
    await pasarRastrillo();
    await prepararMaquina();
    await cortarPasto();
    await limpiar();*/
    const msg = await tomarBebida(6000);
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}
// esto solo funciona con tareas secuenciales
flujo();

// EventLoop

// cada tarea es un hilo
// js es onerthread, pero tiene muchas tareas
// para mas tareas a ejecutar entra eventloop
// en un solo hilo va procesando poco a poco cada tarea(thread)

// Explicacion de EventLoop - Antonio Sarosi
