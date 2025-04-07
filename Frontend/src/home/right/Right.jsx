import React, { useLayoutEffect } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './TypeSend'
import useConversation from '../../zustand/UseConversation'
import { useEffect } from 'react'

import { useAuth } from '../../context/AuthProvider'


const Right = () => {
  const { selectedConversation, setselectedConversation } = useConversation();
  useLayoutEffect(() => {
    return setselectedConversation()
  }, [setselectedConversation])
  return (
    <div className="w-[70%] bg-gray-900">
      <div>
        {
        !selectedConversation ? (< NoChatSelected />): (<>
          <ChatUser />
          <div className='flex-1 overflow-y-auto' style={{ maxHeight: 'calc(92vh - 12vh)' }}>
            <Messages />
          </div>
          <TypeSend />
        </> )
        }
      </div>

    </div >

  )
}

export default Right


const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <div className='flex h-screen  w-full items-center justify-center'>
      <h1 className='text-center'>
        Welcome <span className='font-semibold text-xl'>{authUser.user.fullname}</span>
        <br />
        No chat selected , please select a chat to start conversation.
      </h1>
    </div>
  )


}
