const mongoose = require('mongoose')

const LaboratorioSchema = new mongoose.Schema({
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
    imagen_laboratorio: {
        type: String
    },
    precio_consulta: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    }
})

const Laboratorio = mongoose.model('laboratorio', LaboratorioSchema);
module.exports = Laboratorio;