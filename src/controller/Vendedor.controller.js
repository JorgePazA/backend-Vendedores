const VendedorCtrl={}
const Vendedor = require('../models/Vendedor.models')


VendedorCtrl.crear = async(req, res) =>{
    const {nombre, apellidos, sucursal, ventas, sucursalNombre} = req.body
    const NuevoVendedor = new Vendedor({
        nombre,
        apellidos,
        sucursal,
        ventas,
        sucursalNombre
    })

    const respuesta = await NuevoVendedor.save()
    res.json({
        mensaje: "Vendedor Creado",
        respuesta
    })
}

VendedorCtrl.listar = async(req, res) =>{
    
    const respuesta = await Vendedor.find()
    res.json(respuesta)
}


VendedorCtrl.listarId = async(req, res) =>{
    const id = req.params.id
    const respuesta = await Vendedor.findById({_id: id})
    res.json(respuesta)
}


VendedorCtrl.vendedorDeUnaSucursal = async(req, res) =>{
    const id = req.params.id
    const respuesta = await Vendedor.find({sucursal:id})
    res.json(respuesta)
}


VendedorCtrl.eliminar = async(req, res) =>{
    const id = req.params.id
    await Vendedor.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Vendedor Eliminado'
    })
}

VendedorCtrl.actualizar = async(req, res) =>{
    const id = req.params.id
    await Vendedor.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Vendedor Actualizado'
    })
}

VendedorCtrl.buscarVendedorCriterio = async(req, res) =>{
    const ventas =req.params.criterio;
    try{
        const respuesta = await Vendedor.find({ventas:ventas})
        res.json(respuesta)

    }catch(error){
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
}


module.exports = VendedorCtrl
