//Crear Base de datos

const mongoose = require('mongoose')

//URI = ('mongodb://localhost/bdVendedores')
URI = 'mongodb+srv://jepa:Benju*9312@cluster0.rhmhkf2.mongodb.net/bdVendedores?retryWrites=true&w=majority'
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('Base de datos conectada', db.connection.name))
.catch(error => console.log(error))

module.exports= mongoose