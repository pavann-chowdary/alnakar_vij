import express from 'express';
import cors from 'cors';
import orderRouter from './server';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/orders', orderRouter); // Mount the user routes

export default app;

