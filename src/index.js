const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyparser=require('body-parser')
require('./database')
//settings
//app.set('port', process.env.PORT || 4000);//error puerto
app.set('port', process.env.PORT || 4000);


//middlewares
//el morgan  sirve para ver las peticiones que nos hace el cliente
app.use(morgan('dev'));

//el bodyparser y express.json nos sirve para recibir y traducir lo que nos envia el frontend, 
//ya que desde el frontend se va a mandar los datos en formato json
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json());

//cors sirve para permitir las peticiones del cliente
app.use(cors({ origin: '*' }));

//routes
 app.use('/usuario', require('./routes/Usuario.route'));
 app.use('/cliente',require('./routes/Cliente.route'))

//starting the server
app.listen(app.get('port'), () => {
    console.log('escuchando por el puerto', app.get('port'));
})




// const express = require('express');
// const morgan = require('morgan');
// const bodyparser=require('body-parser')
// const conectarDB = require('./database');
// const cors = require('cors');

// // crear el servidor
// const app = express();

// // Conectar a la base de datos
// conectarDB();

// // habilitar cors
// app.use(cors());

// // Habilitar express.json
// app.use( express.json({ extended: true }));

// // puerto de la app
// const port = process.env.PORT || 4000;

// // Importar rutas
//   app.use('/usuario', require('./routes/Usuario.route'));
//   app.use('/cliente',require('./routes/Cliente.route'))


// // arrancar la app
// app.listen(port, '0.0.0.0', () => {
//     console.log(`El servidor esta funcionando en el puerto ${port}`);
// });