const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10080, 90265',
        ubicacion: 'Malibu, California'
    },
    ultimaPelicula: 'Infinity War'
};

console.log(personaje);

console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje['edad']);

console.log('Coors:', personaje.coords);
console.log('Lat:', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

// Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object .entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje && personaje.direccion);

personaje.dinero = 100000000;
personaje.direccion.zip = 'abc';

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(valores);
console.log(propiedades);