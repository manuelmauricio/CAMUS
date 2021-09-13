const MensajeSchema = new mongoose.Schema({
    id_mensaje: {
        type: Number,
        required: true,
        default: 1,
        unique: true
    },
    idfk_remitente: {
        type: Number,
        required: true,
        default: 1
    },
    idfk_destinatario: {
        type: Number,
        required: true,
        default: 1
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