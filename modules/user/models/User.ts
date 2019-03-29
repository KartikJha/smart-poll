import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('User', User);
