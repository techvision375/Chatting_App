
import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"

import userRoute from "./routes/user.js"
import messageRoute from "./routes/message.js"
import { app, server } from "./SocketIO/server.js"
import path from "path"

dotenv.config()
app.use(express.static('public'));


// const PORT = process.env.PORT
const PORT = process.env.PORT
const URI = process.env.MongoDB_URI;

app.use(express.json())
const __dirname = path.resolve()
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true
}));
app.use(cookieParser())

try {
  mongoose.connect(URI);
  console.log("connected to MongoDB");

} catch (error) {
  console.log(error)
}
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend" ,"dist", "index.html"));
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

server.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})