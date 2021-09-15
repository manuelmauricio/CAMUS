const OpinioncionSchema = new mongoose.Schema({
    id_opinion: {
        type: Number,
        required: true,
        default: 1,
        unique: true
    },
    idfk_doctor: {
        type: Number,
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

const pinioncion = mongoose.model('opinion', pinioncionSchema);
module.exports = pinioncion;