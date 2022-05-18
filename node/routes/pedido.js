const { Router } = require('express');
const {
    getlogin,
    getUsuarios,
    getUsuario,
    updateUser,
    eliminarUsuario,
    getRegistro,
    getPedidos,
    getPedido,
    newPedido,
    updatePedido
} = require('../controller/pedido');
const router = Router();
console.log("rutas");
router.post('/registro',getRegistro);
router.get('/login/:correo/:contrasena',getlogin);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id',getUsuario);
router.put('/editarUsuario/:id', updateUser);
router.delete('/eliminarUsuario/:id', eliminarUsuario);
router.get('/pedido', getPedidos);
router.get('/pedido/:id', getPedido);
router.post('/nuevoDespacho', newPedido);
router.put('/editar/:id', updatePedido);

module.exports = router;