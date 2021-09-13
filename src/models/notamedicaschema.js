const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    },
    year: {
        type: Number,
        required: true,
        default: 1
    }
    
})

const User = mongoose.model('user', UserSchema);
module.exports = User;