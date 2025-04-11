import React, { useState } from 'react'
import useConversation from '../zustand/useConversation.js';
import axios from 'axios';
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true);
        console.log('message:', message);
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_HOST}/api/message/send/${selectedConversation._id}`,
                {message},{withCredentials: true},
            );
            setMessage([...messages, res.data.newMessage]);
            setLoading(false);
        } catch (error) {
            console.error('Error in send  message:', error);
            setLoading(false);
        }
    };
    return { loading, sendMessage };
 

}

export default useSendMessage
