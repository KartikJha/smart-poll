const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        maxlength: [15, 'password must be maximum 15 characters'],
        minlength: [8, 'password must be minimum 8 characters'],
    },
    name: String,
    age: Number,
    gender: String,
}, { strict: true });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
