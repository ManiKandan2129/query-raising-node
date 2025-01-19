import dotenv from 'dotenv';
import express from 'express';
import dataBaseConnection from './db.js';
import cors from 'cors'
import { authRoutes } from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors())
dotenv.config();

dataBaseConnection()


const PORT = process.env.PORT;

app.use('/auth', authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
