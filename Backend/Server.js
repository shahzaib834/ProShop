import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import ProductRoutes from './routes/productRoutes.js';

import connectDB from './config/db.js';

const app = express();
connectDB();
dotenv.config();

app.use(express.json()) 

app.use('/api/products', ProductRoutes);
app.use('/api/users' , userRoutes);

app.listen(
  process.env.PORT,
  console.log(`Server is running on port ${process.env.PORT}`)
);
