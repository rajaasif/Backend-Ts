import mongoose from 'mongoose';
import {DB_URI,NODE_ENV} from '../config/env.js';
const connectDB = async () => {
   
        const cn = await mongoose.connect(DB_URI,{
            dbName: 'subscription-service',
        });
        if(cn){

            console.log('MongoDB connected in '+NODE_ENV+' mode');
        }
        else{
            console.log('MongoDB connection failed');
        }
   
}
export default connectDB;
