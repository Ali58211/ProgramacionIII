const getArea = (r) => (Math.PI * Math.pow(r, 2)).toFixed(2);
// export const getArea = (r) => Math.PI * Math.pow(r, 2);

const getPerimetro = ((r) => 2 * Math.PI * r).toFixed(2); // toFixed es para redondear los nros
// export const getPerimetro = (r) => 2 * Math.PI * r;

const calculo = {
  getArea,
  getPerimetro,
};

// ESM - EcmaScript Modules

// export default getArea; //con un archivo solo se puede hacer un solo sxport default

export default calculo; //estan los dos get
