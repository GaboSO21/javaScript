

const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log(elMayor(20 , 15));
console.log(tieneMembresia(false));

const amigo = false; 
const amigosArr = [
    'Peter',
    'Tony',
    'Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(),
    elMayor(10,15)
]

console.log(amigosArr);

const nota = 95; // A + A A -
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'A-' :
                'F';

console.log({nota, grado});