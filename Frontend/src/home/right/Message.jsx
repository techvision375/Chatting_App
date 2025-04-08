import React, { useEffect } from 'react'
function Message({ message }) {
    const authUser = JSON.parse(localStorage.getItem("ChatApp"));



    const itsme = String(message.senderId) === String(authUser.user._id);

    const chatName = itsme ? "chat-end" : "chat-start";
    const chatColor = itsme ? "bg-slate-500" : "bg-blue-500";

    const createdAt = new Date(message.createdAt);
    const formattedTime = createdAt.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    })




    return (
        <div>
            <div className='p-4'>
                <div className={`chat ${chatName}`}>
                    <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
                    <div className='chat-footer'>{formattedTime}</div>
                </div>

            </div>
        </div>
    )
}

export default Message
