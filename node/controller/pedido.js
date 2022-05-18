const Pedido = require('../models/Pedido');
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456'

const getRegistro = async (req, res) => {
        if(await userExists(req.body.email)){
            res.status(409).json({error: 'email existe'})
        }else{
             const newUsers = new Users(req.body);
             newUsers.save().then(user => {
                res.status(201).json(user)
             }).catch (error =>{
                        res.status(500).json({
                              error: error.message
                             })
                })
            }
            
        };

const userExists = async (email) => {
    const user = await Users.findOne({email: email.toLowerCase().trim()})
    if(user){
        return true
    }else{
        return false
    }
};


const getlogin = async (req, res) => {
    console.log(req.params);
    Users.findOne({email: req.params.correo, password:req.params.contrasena}).then(user => {
        if(user){
            res.status(200).json(user)
        }else{
            res.status(401).json({error:'Incorrect email o password'})
        }
    }).catch(err => {
        res.status(500).json({
            error: error.message
           })
    })
};

const getUsuarios = async (req, res) => {
    debugger;
    try {
        const user = await Users.find();
        return res.status(200).json({
            message: "Success mostrar bd",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error mostrar bd",
            error: error.message
        });
    }
};

const getUsuario = async (req, res) => {
    debugger;
    try {
        //req.params parametro que viene desde la url
        const id = req.params.id;
        const user = await Users.findById(id);
        return res.status(200).json({
            message: "Success un solo pedido",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error un solo pedido",
            error: error.message
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;
        const result = await Users.findByIdAndUpdate(id, user);
        return res.status(200).json({
            message: "Success",
            data: pedido
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }

};

const eliminarUsuario = async (req, res) => {
    const id = req.params.id;
    Users.findById(id, (err, user) => {
        if(err) res.status(500).send({
            message: `Error al borrar el usuario: ${err}`})
            user.remove(err =>{
            if(err) res.status(500).send({
                message: `Error al borrar el usuario: ${err}`})
            res.status(200).send({
                message: 'El Usuario a sido eliminado'
            })
        })
    })
}


const getPedidos = async (req, res) => {
    debugger;
    try {
        const pedidos = await Pedido.find();
        return res.status(200).json({
            message: "Success mostrar bd",
            data: pedidos
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error mostrar bd",
            error: error.message
        });
    }
};

const getPedido = async (req, res) => {
    
    try {
        //req.params parametro que viene desde la url
        const id = req.params.id;
        const pedido = await Pedido.findById(id);
        return res.status(200).json({
            message: "Success un solo pedido",
            data: pedido
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error un solo pedido",
            error: error.message
        });
    }
    
};

const getCrearPedido = async (req, res) => {
   
};

const newPedido = async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        return res.status(200).json({
            message: "Success",
            pedido
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }

};

const updatePedido = async (req, res) => {
    try {
        const id = req.params.id;
        const pedido = req.body;
        const result = await Pedido.findByIdAndUpdate(id, pedido);
        return res.status(200).json({
            message: "Success",
            data: pedido
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }

};

const deletePedidoCheck = async (req, res) => {
    const id = req.params.id;
    Pedido.findById(id, (err, pedido) => {
        if(err) res.status(500).send({
            message: `Error al borrar el pedido: ${err}`})
        pedido.remove(err =>{
            if(err) res.status(500).send({
                message: `Error al borrar el pedido: ${err}`})
            res.status(200).send({
                message: 'El pedido a sido eliminado'
            })
        })
    })
}


const isExpired = async (req, res) => {
    try {
        const id = req.params;
        const pedido = await Pedido.findById({ _id: id });

        const vencimiento = pedido.dateExpired;
        const aux = vencimiento.getTime() - Date.now();
        if (aux <= 0) {

            return res.status(200).json({
                message: "El producto ha expirado su fecha de consumo",
                pedido: pedido.description,
                dateExpired: pedido.dateExpired,
                isExpired: true
            });

        } else {

            return res.status(200).json({
                message: "El producto se puede consumir, aun no ha expirado su fecha de consumo",
                pedido: pedido.description,
                dateExpired: pedido.dateExpired,
                isExpired: false
            });

        }
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};




module.exports = {
    getlogin,
    getUsuarios,
    getUsuario,
    updateUser,
    eliminarUsuario,
    getRegistro,
    getPedidos,
    getPedido,
    getCrearPedido,
    newPedido,
    updatePedido,
    deletePedidoCheck,
    isExpired
   
}