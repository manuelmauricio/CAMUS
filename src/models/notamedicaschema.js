const NotaMedicaSchema = new mongoose.Schema({
    id_notamedica: {
        type: Number,
        required: true,
        default: 1,
        unique: true
    },
    idfk_doctor: {
        type: Number,
        required: true,
        default: 1
    },
    idfk_paciente: {
        type: Number,
        required: true,
        default: 1
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
        minlength: 0,
        maxlength: 300
    },
    fecha: {
        type: Date,
        required: true
    }
    
})

const NotaMedica = mongoose.model('notamedica', NotaMedicaSchema);
module.exports = NotaMedica;