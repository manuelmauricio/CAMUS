const PadecimientoSchema = new mongoose.Schema({
    id_padecimientos: {
        type: Number,
        required: true,
        default: 1,
        unique: true
    },
    idfk_paciente: {
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

const Padecimiento = mongoose.model('padecimiento', PadecimientoSchema);
module.exports = Padecimiento;