const mongoose = require('mongoose')

const OpinioncionSchema = new mongoose.Schema({
    idfk_doctor: {
        type: Number,
        required: true
    },
    calificacion: {
        type: Number,
        required: true,
        default: 1
    },
    texto: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 400
    }  
})

const Opinion = mongoose.model('opinion', OpinioncionSchema);
module.exports = Opinion;