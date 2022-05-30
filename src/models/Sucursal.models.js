const mongoose = require('mongoose');
const {Schema} = mongoose;

const SucursalSchema = new Schema({
    nombre:String,
    correo:String,
    contrasena:String,
    date:{type:Date, default:Date.now}
})

module.exports=mongoose.model('sucursal', SucursalSchema)