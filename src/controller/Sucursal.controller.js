const SucursalesCtrl = {};
const Sucursal = require("../models/Sucursal.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SucursalModels = require("../models/Sucursal.models");

SucursalesCtrl.crearSucursal = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  const NuevaSucursal = new Sucursal({
    nombre,
    correo,
    contrasena,
  });

  const correoSucursal = await Sucursal.findOne({ correo: correo });
  if (correoSucursal) {
    res.json({
      mensaje: "Este correo ya se encuentra registrado",
    });
  } else {
    NuevaSucursal.contrasena = await bcrypt.hash(contrasena, 10);
    const token = jwt.sign({_id:NuevaSucursal._id}, "Secreto");
    await NuevaSucursal.save();

    res.json({
      mensaje: "Bienvenido",
      id: NuevaSucursal._id,
      nombre: NuevaSucursal.nombre,
      token,
    });
  }
}

SucursalesCtrl.login = async (req, res) => {
  const { correo, contrasena } = req.body;
  const sucursal = await Sucursal.findOne({ correo: correo });
  if (!sucursal) {
    return res.json({
      mensaje: "Correo Incorrecto",
    });
  } 
  const match = await bcrypt.compare(contrasena, sucursal.contrasena)
  if(match){
    const token = jwt.sign({_id: sucursal._id}, 'Secreta')
    res.json({
      mensaje: "Bienvenido",
      id: sucursal.id,
      nombre: sucursal.nombre,
      token
    })
  } else{
    res.json({
      mensaje:"Contraseña incorrecta"
    })
  }

}


module.exports = SucursalesCtrl
