const mongoose = require('mongoose')

const NotaMedicaSchema = new mongoose.Schema({
    idfk_doctor: {
        type: Number,
        required: true
    },
    idfk_paciente: {
        type: Number,
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
        type: Date,
        required: true
    }
})

const NotaMedica = mongoose.model('notamedica', NotaMedicaSchema);
module.exports = NotaMedica;