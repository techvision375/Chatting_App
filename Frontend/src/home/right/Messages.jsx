import React from 'react';
import Message from './Message';
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../componants/Loading.jsx';
import { useEffect, useRef } from 'react';



const Messages = () => {
  const { loading, messages } = useGetMessage();
  console.log(messages);

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if(lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100)
  }, [messages]);
  

  
  return (
    <div className='flex-1 overflow-y-auto' style={{ minHeight: 'calc(92vh - 12vh)' }}>
      <div>
        {loading ? (
          <Loading />
        ) : (
          messages.length > 0 &&
          messages.map((message) => (
            <Message key={message._id} message={message} />
          ))
        )}

        {!loading && messages.length === 0 && (
          <div>
            <p className='text-center mt-[20%]'>
              Say! hi to start the conversation
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
