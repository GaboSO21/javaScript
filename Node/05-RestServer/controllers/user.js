const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

// Controladores: encargados de resolver las peticions http y retornar o 
// asignar datos dependiendo del caso

const usersGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Peticion get - controllador',
        query
    });

}

// Peticion POST, ingresa nuevo usuario a la coleccion
const usersPost = async (req = request, res = response) => {

    // Desestructurar campos de peticion http 
    const { nombre, correo, password, rol } = req.body;

    // Creacion de modelo Usuario para la bd
    const usuario = new Usuario({
        nombre,
        correo,
        password,
        rol
    });

    // Encriptar psswd
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en db
    await usuario.save();

    // Retornar un mensaje junto a usuario que fue salvado
    res.json({
        msg: 'Peticion post - controllador',
        usuario
    });

}

// Peticion PUT, actualiza datos de la coleccion
const usersPut = async (req = request, res = response) => {

    // Desestructura parametros del url, id en este caso
    const { id } = req.params;
    // Agarrar campos que no se quieren actualizar
    const { _id, password, google, corre, ...resto } = req.body;

    // Encriptar psswd, si viene en el body
    if (password) {

        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);

    }

    // Encontrar usuario a actualizar y actualizarlo
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    // Peticion exitosa status 201
    res.status(201).json({
        msg: 'Peticion put - controllador',
        usuario
    });

}

const usersPatch = (req, res = response) => {

    res.json({
        msg: 'Peticion patch - controllador',
    });

}

const usersDelete = (req, res = response) => {

    res.json({
        msg: 'Peticion delete - controllador',
    });

}

module.exports = {
    usersGet,
    usersPost,
    usersPut, usersPatch,
    usersDelete
}







