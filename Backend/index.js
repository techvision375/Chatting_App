// const express = require('express')
import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import userRoute from "./routes/user.js"

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDB_URI;
app.use(express.json())

try {
    mongoose.connect(URI);
    console.log("connected to MongoDB");
    
} catch (error) {
    console.log(error)
}
app.use("/user" , userRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})