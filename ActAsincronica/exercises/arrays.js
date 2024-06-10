// 10 Dado el siguiente array, mostrar por consola los meses 5 y 11 (utilizar console.log).

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4]);
console.log(meses[10]);

// 11 Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

meses.sort();
console.log(meses);

// 12 Agregar un elemento al principio y al final del array (utilizar unshift y push).

meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

// 13 Quitar un elemento del principio y del final del array (utilizar shift y pop).

meses.shift();
meses.pop();
console.log(meses);

// 14 Invertir el orden del array (utilizar reverse).

meses.reverse();
console.log(meses);

// 15 Unir todos los elementos del array en un único string donde cada mes esté separado por un guión (utilizar join).

let mesesUnidos = meses.join(" - ");
console.log(mesesUnidos);

// 16 Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let mesesMayoANov = meses.slice(4, 11);
console.log(mesesMayoANov);