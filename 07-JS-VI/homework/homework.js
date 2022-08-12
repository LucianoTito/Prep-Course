// Do not change any of the function names

function mayuscula(nombre) { return nombre.charAt(0).toUpperCase () + nombre.slice(1);
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
};

function invocarCallback(cb) { return cb (cb); 
  // Invoca al callback `cb`
  //Tu código:
}

function operacionMatematica(n1, n2, cb) { return cb (n1*n2);
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
};

function sumarArray(numeros, cb) { 
  var suma = numeros.reduce (function (acc, elemento) { return acc + elemento; }, 0); cb (suma);
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
};

function forEach(array, cb) { array.forEach (function(elemento) {cb(elemento)});
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
};

function map(array, cb) {
  var nuevo = array.map ( function (elemento) {return cb(elemento)});
  return nuevo
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
};

function filter(array) {
  result = array.filter(array => array[0] === "a");
  return result;
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
