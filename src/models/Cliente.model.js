const mongoose = require('mongoose')
const { Schema } = mongoose

const ClienteSchema = new Schema({
    nombres: String,
    apellidos:String,
    identificacion:String,
    puesto: String,
    tcontrato: String,
    usuario: String,
    validado: Number
}, {
    timestamps: true
}
)

module.exports = mongoose.model('cliente', ClienteSchema)