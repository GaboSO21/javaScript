const express = require('express');
const { check } = require('express-validator');

const { crearCategoria, obtenerCategorias, obtenerCategoria, actualizarCategoria, borrarCategoria } = require('../controllers/categorias');
const { existeCategoria } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');
const { esAdminRole } = require('../middlewares/validar-roles');
const { validarJWT } = require('../middlewares/validar-jwt');

// Rutas: resuelven las rutas usadas para las peticiones http

const router = express.Router();

// Obtener categorias - publico
router.get('/', obtenerCategorias)

// Obtener categorias por id - publico
router.get('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
], obtenerCategoria)

// Crear categoria - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    validarCampos
], crearCategoria)

// Actualizar - privado - token valido
router.put('/:id', [
    validarJWT,
    check('id', 'No es un id valido').isMongoId().notEmpty(),
    check('id').custom(existeCategoria),
    validarCampos
], actualizarCategoria)

// Actualizar - privado - token valido - admin
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id valido').isMongoId().notEmpty(),
    check('id').custom(existeCategoria),
    validarCampos
], borrarCategoria)

module.exports = router;
