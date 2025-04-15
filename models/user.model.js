import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
        trim: true, minLenghth: [3, 'Name should be atleast 3 characters'],
        maxLength: [50, 'Name should be less than 50 characters']
    },
    email:
    {
        type: String,
        required: [true, 'Email is Required'],
        unique: true,
        lower: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password:
    {
        type: String,
        required: [true, 'Password is Required'],
        minLength: [8, 'Password should be atleast 8 characters'],
        maxLength: [100, 'Password should be less than 100 characters'],

    }
},{Timestamp:true});

const User = mongoose.model('User', userSchema);
export default User;