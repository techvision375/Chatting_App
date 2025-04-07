import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';


const TypeSend = () => {
    const [message, setmessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    const handleSubmit =  async (e) =>{
        e.preventDefault();
        await sendMessage(message);
        
        setmessage("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='flex space-x-2 h-[8vh] bg-gray-800'>
                <div className='w-[70%] mx-4'>
                    <input type="text" placeholder="Type here"
                        value={message} onChange={(e) => setmessage(e.target.value)} className="border border-gray-700 rounded-xl outline-none px-4 py-3 mt-1 w-[100%]" />
                </div>
                <button>
                    <IoSend className='text-3xl ' />
                </button>
            </div>

        </form>



    )
}

export default TypeSend
