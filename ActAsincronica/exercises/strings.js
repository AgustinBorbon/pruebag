//4 Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula(utilizar toUpperCase).Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula(utilizar toUpperCase).

let texto = "otorrinolaringologo";
let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);

//5 Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable(utilizar substring).

let textoentero = "otorrinolaringologo";
let primeros5 = textoentero.substring(0, 5);
console.log(primeros5);

// 6 Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).

let textoentero2 = "otorrinolaringologo";
let ultimos3 = textoentero2.substring(textoentero2.length - 3);
console.log(ultimos3);

// 7 Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.Guardar el resultado en una nueva variable(utilizar substring, toUpperCase, toLowerCase y el operador + ).

let textoentero3 = "otorrinolaringologo";
let primeraMayuscula = textoentero3.substring(0, 1).toUpperCase() + textoentero3.substring(1).toLowerCase();
console.log(primeraMayuscula);

//8 Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.Encontrar la posición del primer espacio en blanco y guardarla en una variable(utilizar indexOf).

let textoConEspacio = "Pepe grillo";
let posicionenEspacio = textoConEspacio.indexOf(' ');
console.log(posicionenEspacio);

//9 Crear una variable de tipo string con al menos 2 palabras largas(10 caracteres y algún espacio entre medio).Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador + ).

let palabrasLargas = "desarrollo arquitectura";
let espacio = palabrasLargas.indexOf(' ');
let palabra1 = palabrasLargas.substring(0, espacio);
let palabra2 = palabrasLargas.substring(espacio + 1);
let palabra1Mayus = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase();
let palabra2Mayus = palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
let resultado = palabra1Mayus + " " + palabra2Mayus;
console.log(resultado);