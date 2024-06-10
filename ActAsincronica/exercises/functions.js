// 23 Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 10);
console.log(resultado);

//24 A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parametros tiene un error");
        return NaN;
    }
    return a + b;
}
let resultadoValido = suma(5, 10);
let resultadoInvalido = suma(5, "diez");

console.log(resultadoValido);
console.log(resultadoInvalido);

// 25 Crear una función validateInteger que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(num) {
    return Number.isInteger(num);
}

console.log(validateInteger(5));
console.log(validateInteger(5.5));

// 26 A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar una alerta con el error y retornar el número convertido a entero (redondeado).

function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parametros tiene un error");
        return NaN;
    }
    if (!validateInteger(a)) {
        alert(`El número ${a} no es entero, se redondeará.`);
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert(`El número ${b} no es entero, se redondeará.`);
        b = Math.round(b);
    }
    return a + b;
}

// 27 Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validateInteger(num) {
    return Number.isInteger(num);
}

function validarYRedondear(num) {
    if (!validateInteger(num)) {
        alert(`El número ${num} no es entero, se redondeará.`);
        return Math.round(num);
    }
    return num;
}

function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parametros tiene un error");
        return NaN;
    }
    a = validarYRedondear(a);
    b = validarYRedondear(b);
    return a + b;
}

let resultadoFinal = suma(5.5, 10.3);
console.log(resultadoFinal);