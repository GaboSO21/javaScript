const { response } = require("express");
const { isValidObjectId } = require("mongoose");

const Usuario = require('../models/usuario');
const Categoria = require('../models/categorias');
const Producto = require('../models/producto');

const coleccionesPermitidas = [
    'usuarios',
    'categorias',
    'productos'
];

const buscarUsuarios = async (termino = '', res = response) => {

    const esMongoID = isValidObjectId(termino);

    if (esMongoID) {

        const usuario = await Usuario.findById(termino);

        return res.json({

            results: (usuario) ? [usuario] : []

        });

    }

    const regex = new RegExp(termino, 'i');

    const usuarios = await Usuario.find({

        $or: [{ nombre: regex }, { correo: regex }],
        $and: [{ estado: true }]

    });

    return res.json({

        results: usuarios

    });

}

const buscarCategoria = async (termino = '', res = response) => {

    const esMongoID = isValidObjectId(termino);

    if (esMongoID) {

        const categoria = await Categoria.findById(termino);

        return res.json({

            results: (categoria) ? [categoria] : []

        });

    }

    const regex = new RegExp(termino, 'i');

    const categorias = await Categoria.find({ nombre: regex, estado: true });

    return res.json({

        results: categorias

    });

}

const buscarProducto = async (termino = '', res = response) => {

    const esMongoID = isValidObjectId(termino);

    if (esMongoID) {

        const producto = await Producto.findById(termino).populate('categoria', 'nombre');

        return res.json({

            results: (producto) ? [producto] : []

        });

    }

    const regex = new RegExp(termino, 'i');

    const productos = await Producto.find({ nombre: regex, estado: true }).populate('categoria', 'nombre');

    return res.json({

        results: productos

    });

}

const buscar = (req, res = response) => {

    const { coleccion, termino } = req.params;

    if (!coleccionesPermitidas.includes(coleccion)) {

        return res.status(400).json({
            msg: 'Coleccion no permitida/inexistente.'
        })

    }

    switch (coleccion) {
        case 'usuarios':
            buscarUsuarios(termino, res);
            break;
        case 'categorias':
            buscarCategoria(termino, res);
            break;
        case 'productos':
            buscarProducto(termino, res);
            break;
        default:

            return res.status(500).json({
                msg: 'Contactar adminstrador.'
            })

    }

}


module.exports = {
    buscar
}
