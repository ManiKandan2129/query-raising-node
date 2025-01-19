import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_DB_URL;


export default async function dataBaseConnection() {
    try {
        await mongoose.connect(URL);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('Failed to connect to MongoDB:', error);
    }
}