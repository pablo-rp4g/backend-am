const mongoose=require('mongoose')

//URI=('mongodb://localhost/BasePruebaForm')//Local
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
