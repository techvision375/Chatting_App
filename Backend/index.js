// const express = require('express')
import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"

import userRoute from "./routes/user.js"
import messageRoute from "./routes/message.js"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3002;
const URI = process.env.MongoDB_URI;

app.use(express.json())
app.use(cors({
  credentials: true,
}))
app.use(cookieParser())

try {
    mongoose.connect(URI);
    console.log("connected to MongoDB");
    
  } catch (error) {
    console.log(error)
  }
  app.use("/api/user" , userRoute);
  app.use("/api/message" , messageRoute);
  
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
  })