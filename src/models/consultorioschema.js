const ConsultorioSchema = new mongoose.Schema({
    id_consultorio: {
        type: Number,
        required: true,
        default: 1,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 40
    },
    descripcion: {
        type: String,
        minlength: 0,
        maxlength: 200
    },
    fecha_alta: {
        type: Date,
        required: true
    }
    
})

const Consultorio = mongoose.model('consultorio', ConsultorioSchema);
module.exports = Consultorio;