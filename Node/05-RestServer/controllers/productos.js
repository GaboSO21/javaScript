const { response } = require("express");

const Producto = require('../models/producto');

// obtenerProductos - paginado - total - populate 
const obtenerProductos = async (req, res = response) => {

    const { limite = 5, desde = 0 } = req.params;
    const query = { estado: true };

    const [productos, total] = await Promise.all([
        Producto.find(query).populate('usuario').populate('categoria')
            .limit(Number(limite))
            .skip(Number(desde)),
        Producto.countDocuments(query)
    ])

    return res.status(201).json({
        total,
        productos,
    })

}

// obtenerProducto - populate {}
const obtenerProducto = async (req, res = response) => {

    const { id } = req.params;

    const producto = await Producto.findById(id).populate('usuario').populate('categoria');

    return res.status(201).json(producto);

}

// actualizarProducto - nombre
const actualizarProducto = async (req, res = response) => {

    const { id } = req.params;

    const { estado, usuario, ...data } = req.body

    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });

    return res.status(201).json(
        producto
    );

}

// borrarProducto - estado:false
const borrarProducto = async (req, res = response) => {

    const { id } = req.params;

    const producto = await Producto.findByIdAndUpdate(id, { estado: false });

    return res.status(201).json({
        msg: 'Producto borrada exitosamente',
        producto
    })

}

const crearProducto = async (req, res = response) => {

    const nombre = req.body.nombre.toUpperCase();

    const { precio, categoria, descripcion } = req.body;

    const productoDB = await Producto.findOne({ nombre });

    if (productoDB) {

        return res.status(400).json({
            msg: `El producto ${productoDB.nombre} ya existe`
        })

    }

    const data = {
        nombre,
        precio,
        categoria,
        descripcion,
        usuario: req.usuario._id
    }

    const producto = await new Producto(data);

    await producto.save();

    return res.status(201).json({
        producto
    });

}

module.exports = {
    actualizarProducto,
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    borrarProducto
}
