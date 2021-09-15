const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    },
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 80
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 80,
        unique: true
    },
    imagenchar: {
        type: String
    },
    rol: {
        type: Number,
        required: true,
        default: 0
    },
    fkespecialidad:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'especialidad',
    },
    consultorio: {
        type: String,
        minlength: 4,
        maxlength: 80
    },
    descripcion: {
        type: String,
        minlength: 4,
        maxlength: 400
    }   
})

const Usuario = mongoose.model('usuario', UsuarioSchema);
module.exports = Usuario;