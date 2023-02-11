let juegos = ['Zelda', 'Mario', 'Metroid', 'DK'];
console.log(juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(ultimo, primero);

juegos.forEach(element => {
    console.log({ element });
});

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

juegos.push('F-Zero');

console.log(juegos);

juegos.unshift("DragonBall");

console.log(juegos);

juegos.pop();

console.log(juegos);

let pos = 1;

let borrados = juegos.splice(pos, 2);

console.log(juegos , borrados);

let dkIndex = juegos.indexOf('DK');

// console.log(juegos, dkIndex);

// TODO: Referencia