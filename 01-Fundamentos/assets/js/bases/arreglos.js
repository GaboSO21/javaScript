
const arr = new Array(10);
console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Zelda' ];
// console.log({videoJuegos});

// console.log(videoJuegos[0]);

// Los arreglos puede almacenar cualquier tipo de dato, sin especeficar el tipo como en Java
// push() - para empujar un valor al final del arreglo
// pop() - para eliminar el ultimo valor del arreglo
// unshift() - para agregar un elemento al principio del arreglo
// slice(a , b) - para eliminar elementos a partir de a, b veces.
let arregloCosas = [
    true,
    123,
    'Gabriel',
    1 + 2,
    function(){},
    { a:1 },
    ['X' , 'Megaman' , 'Zero', 'Dr.Light']
];

// console.log({arregloCosas});
console.log(arregloCosas[6][3]);

arregloCosas.forEach(element => {
    console.log(element);
});