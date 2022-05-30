const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendedorSchema = new Schema({
    nombre:{type: String, required:[true, 'Nombre obligatorio']},
    apellidos:{type: String, required:[true, 'Apellido obligatorio']},
    sucursal:String,
    ventas:String,
    sucursalNombre:String,
    date:{type:Date, default:Date.now}

})

module.exports=mongoose.model('vendedor', VendedorSchema)