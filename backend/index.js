import express from 'express';
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.route.js';
// import { connectDB } from 'mongoose';

const app = express();

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
    connectDB();
});
