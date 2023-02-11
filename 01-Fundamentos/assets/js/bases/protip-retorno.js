function crearPersona(nombre, apellido) {

    return {
        nombre,
        apellido
    }

}

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Fernando', 'Herrera');
const persona2 = crearPersona2('Gabriel', 'Sanchez');
console.log(persona);
console.log(persona2);

function imprimeArgumentos() {
    console.log(arguments);
}

// ... rest, pide que agarre todo argumento en un arreglo
const argumentos2 = (edad, ...args) => args;

const [edad, casado, vivo] = argumentos2(20, 30, false, true);
console.log({ edad, vivo });
imprimeArgumentos(10, false, true, 'Hola');

const { apellido: nuevoApellido } = crearPersona('Gabriel', 'Olveira');
console.log(nuevoApellido);

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironmane',
    vivo: false,
    // edad: 40,
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ]
}

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}







