const mongoose = require('mongoose')

const ConsultorioSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    ubicacion: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    hora_apertura: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    },
    hora_cierre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    },
    imagen_consultorio: {
        type: String
    },
    precio_consulta: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    }
})

const Consultorio = mongoose.model('consultorio', ConsultorioSchema);
module.exports = Consultorio;
