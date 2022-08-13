// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){ 
  var arr = Object.entries(objeto);
  return(arr);
};
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí



function numberOfCharacters(string) {
  var objeto = {};

  for(var i=0; i<string.length; i++){
      if (!objeto.hasOwnProperty ([string[i]])) {
        objeto [string [i]]=0;
      }
      objeto [string[i]] += 1;}
      return objeto;
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
};


function capToFront(s) { 
  var mayusculas = "";
  var minúsculas = "";
  for (var i=0; i< s.length; i++) { if ( s[i]=== s[i].toUpperCase()) { 
    mayusculas += s[i];}
  else { minúsculas += s[i];}}

  return mayusculas + minúsculas ;
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
};


function asAmirror(str) {
  var espejo = str.split(" ").map( function (palabra) {
    var mirror = "";
    for (var i = palabra.length -1 ;i >=0; i--) { mirror = mirror + palabra [i];} return mirror;
  }
  ).join(" ");
  return espejo;
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} ;


function capicua(numero){ 
  var nstring = numero.toString();
  var numeroalverres= nstring.split("").reverse().join("");
  if (nstring===numeroalverres) return "Es capicua"; else {return "No es capicua"}

  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
};


function deleteAbc(cadena){{
  cadenan = Object.values(cadena);

 cadenilla = cadenan.filter (cadenan => cadenan !== "a"&& cadenan !== "b" && cadenan !=="c");};

 var obj = "";
 for (i=0;i<cadenilla.length; i ++) { obj = obj + cadenilla [i];}
 return obj;
 
 

  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
};


function sortArray(arr) {
  var ordenstr = arr.sort (function (b,a) {return b.length - a.length;});
  return ordenstr;
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
};


function buscoInterseccion(arreglo1, arreglo2){
 
  var iguales=[];
for(var i=0;i<arreglo1.length;i++)
{
	for(var j=0;j<arreglo2.length;j++)
	{
		if(arreglo1[i]===arreglo2[j]) { iguales.push (arreglo1[i]);}
			
}

};

return iguales;}

  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

