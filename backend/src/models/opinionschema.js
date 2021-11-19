const mongoose = require('mongoose')

const OpinioncionSchema = new mongoose.Schema({
    idfk_doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'usuario',
        required: true
    },
    calificacion: {
        type: Number,
        default: 1
    },
    texto: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 400
    },
    fecha_publicacion: {
        type: Date,
        default: Date.now
    },
})

const Opinion = mongoose.model('opinion', OpinioncionSchema);
module.exports = Opinion;