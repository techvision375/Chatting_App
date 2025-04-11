import React, { use } from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';
import { CiMenuFries } from "react-icons/ci";


const ChatUser = () => {
    const { selectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    const getOnlineUsers = (userId) => {
        return onlineUsers.includes(userId) ? "online" : "offline";
    }
    // console.log(selectedConversation);
    return (
        <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
            <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost drawer-button lg:hidden absolute left-5"
            >
                <CiMenuFries className="text-white text-xl" />
            </label>
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
        </div>
    )
}

export default ChatUser
