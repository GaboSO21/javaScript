const { response } = require('express');

const usersGet = (req, res = response) => {

    res.json({
        msg: 'Peticion get - controllador',
    });

}

const usersPost = (req, res) => {

    res.json({
        msg: 'Peticion post - controllador',
    });

}



const usersPut = (req, res) => {

    res.status(201).json({
        msg: 'Peticion put - controllador',
    });

}

const usersPatch = (req, res) => {

    res.json({
        msg: 'Peticion patch - controllador',
    });

}

const usersDelete = (req, res) => {

    res.json({
        msg: 'Peticion delete - controllador',
    });

}



module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}







