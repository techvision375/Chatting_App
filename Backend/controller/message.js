import Conversation from "../model/conversation.js";
import Message from "../model/message.js";
import { getReceiverSocketId } from "../SocketIO/server.js";
import { io } from "../SocketIO/server.js"; // Import the io instance
export const sendMessage = async (req, res) => {
    // console.log("Message sent" ,req.params.id , req.body.message);
    try {
        // const message = req.body.message; 
        const { message } = req.body; // Destructure the message from the request body
        const { id: receiverId } = req.params;
        // we get from here current logged in user secureRoute 
        const senderId = req.user._id; // current logged in user id
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] },
        });
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        // if(!newMessage) {
        //     conversation.messages.push(newMessage._id);
        // }
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]);
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId ){
            io.to(receiverSocketId).emit("newMessage" , newMessage)
        }
        console.log("newMessage", newMessage)
        res.status(201).json({
            message: newMessage.message,
            newMessage,
        });

    } catch (error) {
        console.log("error in sendMessage", error);
        res.status(500).json({ message: "Internal server error" });

    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: chatUser } = req.params;
        const senderId = req.user._id; // current logged in user id
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, chatUser] },
        }).populate("messages");
        if (!conversation) {
            return res.status(201).json([]);
        }
        const messages = conversation.messages;
        res.status(201).json(messages)
    } catch (error) {
        console.log("error in sendMessage", error);
        res.status(500).json({ message: "Internal server error" });


    }
}   