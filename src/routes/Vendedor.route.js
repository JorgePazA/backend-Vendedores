const{Router} = require('express')
const router = Router()
const VendedorCtrl = require('../controller/Vendedor.controller')
const Auth = require('../helper/Auth')
// Auth.verificarToken,

router.post('/crear', Auth.verificarToken, VendedorCtrl.crear)
router.get('/listar', Auth.verificarToken, VendedorCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, VendedorCtrl.listarId)
router.get('/listarCriterio/:criterio', Auth.verificarToken, VendedorCtrl.buscarVendedorCriterio)
router.get('/listarVendedorSucursal/:id', Auth.verificarToken, VendedorCtrl.vendedorDeUnaSucursal)
router.delete('/eliminar/:id', Auth.verificarToken, VendedorCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, VendedorCtrl.actualizar)


module.exports = router