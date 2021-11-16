const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/CAMUS?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
, {useNewUrlParser:true})
.then(() => console.log("Conectado a la base de datos"))
.catch(() => {
    console.log("No se pudo conectar a la base de datos. Terminando proceso");
    process.exit();
});