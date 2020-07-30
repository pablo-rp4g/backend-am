const ClienteCtrl={}
const Cliente=require('../models/Cliente.model')

ClienteCtrl.crear=async(req,res)=>{
    const {nombres,apellidos,identificacion,puesto,tcontrato,usuario}=req.body
    const cliente=new Cliente({nombres,apellidos,identificacion,puesto,tcontrato,usuario})
    const respuesta=await cliente.save()
    res.json({
        mensaje:'Cliente creado',
        respuesta
    })
}

ClienteCtrl.listar=async(req,res)=>{
    const respuesta=await Cliente.find()
    res.json(respuesta)
}

ClienteCtrl.listarid=async(req,res)=>{
    const id=req.params.id
    const respuesta=await Cliente.findById({_id:id})
    res.json(respuesta)
}

ClienteCtrl.listarClientesPorJefe=async(req,res)=>{
    const id=req.params.id
    const respuesta=await Cliente.find({usuario:id})
    res.json(respuesta)
}

ClienteCtrl.eliminar=async(req,res)=>{
    const id=req.params.id
    await Cliente.findOneAndRemove({_id:id})
    res.json({
        mensaje:'Cliente eliminado'
    })
}

ClienteCtrl.actualizar=async(req,res)=>{
    const id=req.params.id
    const datosnuevos={nombres,apellidos,identificacion,puesto,tcontrato,usuario}=req.body
    await Cliente.findByIdAndUpdate({_id:id},datosnuevos)
    res.json({
        mensaje:'Cliente Actualizado'
    })
}

// ClienteCtrl.actualizarValida=async(req,res)=>{
//     const id=req.params.id
//     const datosnuevos={validado}=req.body
//     await Cliente.findByIdAndUpdate({_id:id},datosnuevos)
//     res.json({
//         mensaje:'Cliente Validado'
//     })
// }

ClienteCtrl.buscarcliente = async (req, res) => {
    const nombres = req.params.nombres
    const respuesta = await Cliente.find({ nombres: { $regex: '.*' + nombres + '.*' }})
    res.json(respuesta)
}

module.exports=ClienteCtrl