const UsuarioSchema = new mongoose.Schema({
    id_usr: {
        type: Number,
        required: true,
        default: 1,
        unique: true
    },
    usr: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    },
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 40
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    tel1: {
        type: Number,
        default: 0
    },
    tel2: {
        type: Number,
        default: 0
    },
    tel1: {
        type: Number,
        default: 0
    },
    notas: {
        type: String,
        minlength: 0,
        maxlength: 500
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true
    },
    fecha_alta: {
        type: Date,
        required: true
    },
    imagenchar: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true
    },
    rol: {
        type: Number,
        default: 0
    }
    
})

const Usuario = mongoose.model('usuario', UauarioSchema);
module.exports = Usuario;