const{Router} = require('express')
const router = Router()
const sucursalCtrl = require('../controller/Sucursal.controller')

router.post('/crear', sucursalCtrl.crearSucursal)
router.post('/login', sucursalCtrl.login)

module.exports = router