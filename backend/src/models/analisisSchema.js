const mongoose = require('mongoose')

const AnalisisSchema = new mongoose.Schema({
    idfk_paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'especialidad',
        required: true
    },
    asunto: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 400
    },
    fecha: {
        type: Date
    }
})

const Analisis = mongoose.model('analisis', AnalisisSchema);
module.exports = Analisis;