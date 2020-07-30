const mongoose=require('mongoose')

// URI=('mongodb://localhost/BasePruebaForm')
URI=('mongodb://<dbuser>:<dbpassword>@ds161062.mlab.com:61062/heroku_69dlkdlv')

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
    .then(db=>console.log('base de datos conectada'))
    .catch(error=>console.log(error))

module.exports=mongoose;