import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

import booksRoute from './routes/book.route.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/books', booksRoute);


connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection failed!!", error);
  });




  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });