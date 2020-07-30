const mongoose=require('mongoose')

//URI=('mongodb://localhost/BasePruebaForm')//original
//URI=('mongodb://<dbuser>:<dbpassword>@ds161062.mlab.com:61062/heroku_69dlkdlv')
URI=('mongodb+srv://dbUserFom:Zivqrfb3prY8ADho@cluster0.cu0yv.mongodb.net/BDFormularioMern')

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
    .then(db=>console.log('base de datos conectada'))
    .catch(error=>console.log(error))

module.exports=mongoose;


// const mongoose = require('mongoose');
// require('dotenv').config({ path: 'variables.env' });

// const conectarDB = async () => {
//     try {
//         await mongoose.connect(process.env.DB_MONGO, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         });
//         console.log('DB Conectada');
//     } catch (error) {
//         console.log('hubo un error')
//         console.log(error);
//         process.exit(1); // Detener la app
//     }
// }

// module.exports = conectarDB;