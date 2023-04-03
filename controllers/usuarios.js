const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

   res.json({
     msg: 'Get API - usuariosGet'
   });
}

const usuariosPost = (req, res = response) => {

   res.json({
     msg: 'Post API - usuariosPost'
   });
}

const usuariosPut = (req, res = response) => {

   const { id } = req.params;

   res.json({
     msg: 'put API - usuariosPut',
     id
   });
}

const usuariosDelete = (req, res = response) => {
   res.json({
     msg: 'delete API - usuariosDelete'
   });
}

module.exports = {
   usuariosGet,
   usuariosPost,
   usuariosPut,
   usuariosDelete,
}