let a = 19;

if (a >= 10) {
    console.log('A es mayor a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

// Instancia de objeto Date
const hoy = new Date();
let dia = hoy.getDay();

console.log({ hoy });
console.log({ dia });

// {===} - verifica igualdad tomando en cuenta el tipado del valor igualado
// {==} - verifica igualdad sin importar tipo de valor al que esta igualado
if (dia === 0) {
    console.log('Domingo');
} else if (dia === 2) {
    console.log('Hoy es Martes');
} else {
    console.log('No es lunes ni Domingo');
}

// Practica 
dia = 9;

const diaLetras = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]

console.log(diaLetras[dia] || 'Dia no definido');