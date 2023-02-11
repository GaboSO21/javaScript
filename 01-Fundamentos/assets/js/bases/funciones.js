function saludar(palabra) {
    console.log(arguments);
    console.log('Hola ' + palabra);
    return 1;
}

const saludar2 = function (palabra) {
    console.log('hola ' + palabra);
}

const saludarFlecha = (palabra) => {
    console.log('Hola flecha ' + palabra);
}

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a, b;
}

// Resumir funcion flecha cuando solo tienen una linea 
const sumar3 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
console.log(getAleatorio());
console.log(sumar3(6, 6));
console.log(sumar2(3, 5));
console.log(sumar(1, 2));

const retornoSaludar = saludar('Gabriel');
console.log(retornoSaludar);

let palabra = 'Gabriel';

saludar(palabra, 40, false);
saludar2(palabra);
saludarFlecha(palabra);