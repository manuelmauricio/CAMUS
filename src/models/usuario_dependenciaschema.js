const UsuarioDependenciaSchema = new mongoose.Schema({
    id_usuariodependencia: {
        type: Number,
        required: true,
        default: 1,
        unique: true
    },
    idfk_usuario: {
        type: Number,
        required: true,
        default: 1
    },
    idfk_dependencia: {
        type: Number,
        required: true,
        default: 1
    }
    
})

const UsuarioDependencia = mongoose.model('usuariodependencia', UsuarioDependenciaSchema);
module.exports = UsuarioDependencia;