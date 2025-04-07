import React from 'react'
const Message = ({ message }) => {
    const authUser = JSON.parse(localStorage.getItem("ChatApp"));
    const itsme = message.senderId === authUser.user._id;
    // console.log(itsme)
    // console.log(message.senderId);
    // console.log(authUser.user._id);
    const chatName = itsme ? "chat-end" : "chat-start";
    const chatColor = itsme ? "bg-slate-500" : "bg-blue-500";



    return (
        <div>
            <div className='p-4'>
                <div className={`chat ${chatName}`}>
                    <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
                </div>

            </div>
        </div>
    )
}

export default Message
