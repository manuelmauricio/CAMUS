const CalificacionSchema = new mongoose.Schema({
    id_calificacion: {
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
    calificacion: {
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

const Calificacion = mongoose.model('calificacion', CalificacionSchema);
module.exports = Calificacion;