import React, { use } from 'react'
import useConversation from '../../zustand/UseConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';


const ChatUser = () => {
    const { selectedConversation } = useConversation();
    const {onlineUsers} = useSocketContext();
    const getOnlineUsers = (userId) => {
        return onlineUsers.includes(userId) ? "online" : "offline";
    }
    // console.log(selectedConversation);
    return (
        <div className='flex space-x-3  items-center justify-center bg-gray-800 hover:bg-gray-700 from-purple-300 h-[12vh]'>
            {/* <div className="avatar avatar-online"> */}
            <div className={`avatar ${getOnlineUsers(selectedConversation._id)}`}>
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                {/* <h1 className='text-xl'>tarun</h1> */}
                <h1 className='text-xl'>{selectedConversation.fullname}</h1>
                <span className='text-sm'>{getOnlineUsers(selectedConversation._id)}</span>
            </div>
        </div>
    )
}

export default ChatUser
