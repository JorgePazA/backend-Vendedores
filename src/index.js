// Se requieren las dependencias necesarias

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')


//Configuracion del puerto

app.set('Port', process.env.PORT || 4000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

app.use('/sucursal', require('./routes/Sucursal.route'))
app.use('/vendedor', require('./routes/Vendedor.route'))

app.listen(app.get('Port'), () => {
    console.log('Servidor por puerto', app.get('Port'));
})
