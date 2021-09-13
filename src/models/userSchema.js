const mongoose = require('mongoose')

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
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;