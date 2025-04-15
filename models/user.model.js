import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
        trim: true,
        minLenghth: 3,
        maxLength: 50,
    },
    email:
    {
        type: String,
        required: [true, 'Email is Required'],
        unique: true,
        lower: true,
        match: [
            /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z0-9-.]+)$/,
            'Please Enter a valid Email'
        ]
    },
    password:
    {
        type: String,
        required: [true, 'Password is Required'],
        minLength: [8, 'Password should be atleast 8 characters'],
        maxLength: [100, 'Password should be less than 100 characters'],

    }
}, { Timestamp: true });

const User = mongoose.model('User', userSchema);
export default User;