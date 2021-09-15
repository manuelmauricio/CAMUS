const mongoose = require('mongoose')

const EspecialidadSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 40
    },
    descripcion: {
        type: String,
        minlength: 10,
        maxlength: 200
    }
})

const Especialidad = mongoose.model('especialidad', EspecialidadSchema);
module.exports = Especialidad;