const { response } = require("express");

const Categoria = require('../models/categorias');

// obtenerCategorias - paginado - total - populate 
const obtenerCategorias = async (req, res = response) => {

    const { limite = 5, desde = 0 } = req.params;
    const query = { estado: true };

    const [categorias, total] = await Promise.all([
        Categoria.find(query).populate('usuario')
            .limit(Number(limite))
            .skip(Number(desde)),
        Categoria.countDocuments(query)
    ])

    return res.status(201).json({
        total,
        categorias,
    })

}

// obtenerCategoria - populate {}
const obtenerCategoria = async (req, res = response) => {

    const { id } = req.params;

    const categoria = await Categoria.findById(id).populate('usuario');

    return res.status(201).json(categoria);

}

// actualizarCategoria - nombre
const actualizarCategoria = async (req, res = response) => {

    const { id } = req.params;

    const { estado, usuario, ...data } = req.body

    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true });

    return res.status(201).json(
        categoria
    );

}

// borrarCategoria - estado:false
const borrarCategoria = async (req, res = response) => {

    const { id } = req.params;

    const categoria = await Categoria.findByIdAndUpdate(id, { estado: false });

    return res.status(201).json({
        msg: 'Categoria borrada exitosamente',
        categoria
    })

}

const crearCategoria = async (req, res = response) => {

    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne({ nombre });

    if (categoriaDB) {

        return res.status(400).json({
            msg: `La categoria ${categoriaDB.nombre} ya existe`
        })

    }

    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const categoria = await new Categoria(data);

    await categoria.save();

    return res.status(201).json({
        categoria
    });

}

module.exports = {
    obtenerCategorias,
    obtenerCategoria,
    crearCategoria,
    actualizarCategoria,
    borrarCategoria
}
