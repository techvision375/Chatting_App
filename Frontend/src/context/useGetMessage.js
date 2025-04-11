import React, { useEffect, useState  } from 'react'
import useConversation from '../zustand/useConversation.js';
import axios from 'axios';
const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const res = await axios.get(
                        `${import.meta.env.VITE_HOST}/api/message/get/${selectedConversation._id}`,
                        {withCredentials: true}
                    );
                    setMessage(res.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error in getting  message:', error);
                    setLoading(false);
                }

            }


        };
        getMessage();

    }, [selectedConversation,setMessage])
    return {loading , messages}
}

export default useGetMessage;
