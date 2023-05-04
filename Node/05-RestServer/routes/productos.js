const express = require('express');
const { check } = require('express-validator');

const { crearProducto, obtenerProductos, obtenerProducto, actualizarProducto, borrarProducto } = require('../controllers/productos');
const { existeProducto } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');
const { esAdminRole } = require('../middlewares/validar-roles');
const { validarJWT } = require('../middlewares/validar-jwt');

// Rutas: resuelven las rutas usadas para las peticiones http

const router = express.Router();

// Obtener productos - publico
router.get('/', obtenerProductos)

// Obtener producto por id - publico
router.get('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
], obtenerProducto)

// Crear producto - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('precio', 'El precio es obligatorio').notEmpty(),
    check('descripcion', 'La descripcion es obligatorio').notEmpty(),
    check('categoria', 'La categoria es obligatorio').notEmpty().isMongoId(),
    validarCampos
], crearProducto)

// Actualizar - privado - token valido
router.put('/:id', [
    validarJWT,
    check('id', 'No es un id valido').isMongoId().notEmpty(),
    check('id').custom(existeProducto),
    validarCampos
], actualizarProducto)

// Actualizar - privado - token valido - admin
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id valido').isMongoId().notEmpty(),
    check('id').custom(existeProducto),
    validarCampos
], borrarProducto)

module.exports = router;
