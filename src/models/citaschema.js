const mongoose = require('mongoose')

const CitaSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    horario: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: true
    } 
})

const Cita = mongoose.model('cita', CitaSchema);
module.exports = Cita;