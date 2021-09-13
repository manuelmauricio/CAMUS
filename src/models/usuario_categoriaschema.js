const UsuarioCategoriaSchema = new mongoose.Schema({
    id_usuariocategoria: {
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
    idfk_categoria: {
        type: Number,
        required: true,
        default: 1
    }
    
})

const UsuarioCategoria = mongoose.model('usuariocategoria', UsuarioCategoriaSchema);
module.exports = UsuarioCategoria;