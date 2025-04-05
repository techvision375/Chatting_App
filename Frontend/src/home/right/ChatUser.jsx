import React from 'react'
import useConversation from '../../zustand/UseConversation.js'


const ChatUser = () => {
    const { selectedConversation } = useConversation();
    console.log(selectedConversation);
    return (
        <div className='flex space-x-3  items-center justify-center bg-gray-800 hover:bg-gray-700 from-purple-300 h-[12vh]'>
            <div className="avatar avatar-online">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1 className='text-xl'>tarun</h1>
                {/* <h1 className='text-xl'>{selectedConversation.fullname}</h1> */}
                <span className='text-sm'>Offline</span>
            </div>
        </div>
    )
}

export default ChatUser
