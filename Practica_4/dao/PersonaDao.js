import Persona from '../models/personas.js';
import colors from 'colors';

export const crearPersona = async (nombre = '', cedula = '', primerApellido = '', segundoApellido = '') => {

    const persona = new Persona({
        nombre,
        cedula,
        primerApellido,
        segundoApellido
    })
    await persona.save();

}

export const retornarPersonas = async () => {

    const listado = await Persona.find();
    return listado;

}

export const listarPersonas = async () => {

    const listado = await Persona.find();
    listado.forEach((persona, idx) => {
        console.log(`${colors.green(idx + 1)}: ${persona.nombre}`);
    })

}

export const getPersona = async (_id = '') => {

    const listado = await Persona.findOne({
        _id
    });
    return listado;

}

export const borrarPersona = async (_id = '') => {

    await Persona.deleteOne({
        _id
    });

}

export const actualizarPersona = async (_id = '', nombre = '', cedula = '', primerApellido = '', segundoApellido = '') => {

    await Persona.updateOne({
        _id
    }, {
        $set:
        {
            nombre,
            cedula,
            primerApellido,
            segundoApellido
        }
    });
}






