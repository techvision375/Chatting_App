import  {Server} from "socket.io";
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        
        
    },
});

const users = {};

//used to listen events on server side

io.on("connection", (socket) => {
    console.log("a user connected" , socket.id);
    const userId = socket.handshake.query.userId;
   
    if(userId){
        users[userId] = socket.id;
        console.log("Hello" ,users);

    }
    // used to send the event to all connected users
    io.emit("getOnlineUsers", Object.keys(users));



    socket.on("disconnect", () => {
        console.log("user disconnected" , socket.id);
        delete users[userId];
        io.emit("getOfflineUsers", Object.keys(users));
    })

})

export {app, io , server};
