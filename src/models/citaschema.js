const CitaSchema = new mongoose.Schema({
    id_cita: {
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
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 40
    },
    fecha: {
        type: Date,
        required: true
    },
    fecha_alta: {
        type: Date,
        required: true
    }
    
})

const Cita = mongoose.model('cita', CitaSchema);
module.exports = Cita;