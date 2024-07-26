const { response, request } = require("express")

const usuariosGet = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query; // Agarro los parametros de la ruta

    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey,
    })
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put api - controlador',
        id
    })
}

const usuariosPost = (req, res = response) => {

    const { Nombre, Edad } = req.body;

    res.json({
        msg: 'post api - controlador',
        Nombre,
        Edad
    })
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete api - controlador'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
};