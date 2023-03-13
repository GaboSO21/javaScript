const express = require('express');
const { usersGet, usersPut, usersPost, usersPatch, usersDelete } = require('../controllers/user');

const router = express.Router();

router.get('/', usersGet);

router.put('/', usersPut);

router.post('/', usersPost);

router.patch('/', usersPatch);

router.delete('/', usersDelete);

module.exports = router;

