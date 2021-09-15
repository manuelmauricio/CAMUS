const mongoose = require('mongoose')

const MensajeSchema = new mongoose.Schema({
    idfk_remitente: {
        type: Number,
        required: true
    },
    idfk_destinatario: {
        type: Number,
        required: true
    },
    texto: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 400
    } 
})

const Mensaje = mongoose.model('mensaje', MensajeSchema);
module.exports = Mensaje;