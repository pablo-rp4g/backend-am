const UsuarioCtrl = {}
const Usuario = require('../models/Usuario.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// UsuarioCtrl.crear = async (req, res) => {
//     const { nombre, correo, contrasena } = req.body
//     const nuevousuario = new Usuario({ nombre, correo, contrasena })
//     //verificar si el usuario ya existe
//     const correousuario = await Usuario.findOne({ correo: correo })
//     if (correousuario) {
//         res.json({
//             mensaje: 'El correo ya existe'
//         })
//     } else {
//         nuevousuario.contrasena = await bcrypt.hash(contrasena, 10)
//         const token = jwt.sign({ _id: nuevousuario._id }, 'secreta')
//         await nuevousuario.save()
//         res.json({
//             mensaje: 'Bienvenido',
//             id:nuevousuario._id,
//             nombre:nuevousuario.nombre,
//             token
//         })
//     }
// }

UsuarioCtrl.crear = async (req, res) => {
    const { nombre, correo, contrasena, perfil } = req.body
    const nuevousuario = new Usuario({ nombre, correo, contrasena, perfil })
    //verificar si el usuario ya existe
    const correousuario = await Usuario.findOne({ correo: correo })
    if (correousuario) {
        res.json({
            mensaje: 'El correo ya existe'
        })
    } else {
        nuevousuario.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: nuevousuario._id }, 'secreta')
        await nuevousuario.save()
        res.json({
            mensaje: 'Bienvenido',
            id:nuevousuario._id,
            nombre:nuevousuario.nombre,
            perfil:nuevousuario.perfil,
            token
        })
    }
}

UsuarioCtrl.login = async (req, res) => {
    const { correo, contrasena } = req.body
    //console.log("estoy entrando usuariocontroller/login")
    const usuario = await Usuario.findOne({ correo: correo })
    if (!usuario) {
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }
    console.log(usuario)
    const match = await bcrypt.compare(contrasena, usuario.contrasena)
    if(match){
        const token = jwt.sign({ _id: usuario._id }, 'secreta')
        //const perfilResp= "";
        res.json({
            mensaje:'Bienvenido',
            id:usuario._id,
            nombre:usuario.nombre,
            perfil: usuario.perfil,
            token
        })
    }else{
        res.json({
            mensaje:'Contraseña incorrecta'
        })
    }
}

UsuarioCtrl.listar=async(req,res)=>{
    const respuesta=await Usuario.find({},{contrasena:0})
    res.json(respuesta)
}

module.exports=UsuarioCtrl