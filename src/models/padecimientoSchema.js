const mongoose = require('mongoose')

const PadecimientoSchema = new mongoose.Schema({
    idfk_paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'especialidad',
        required: true
    },
    texto: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 400
    }  
})

const Padecimiento = mongoose.model('padecimiento', PadecimientoSchema);
module.exports = Padecimiento;