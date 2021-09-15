const mongoose = require('mongoose')

const PadecimientoSchema = new mongoose.Schema({
    idfk_paciente: {
        type: Number,
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