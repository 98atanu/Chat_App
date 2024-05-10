import React from 'react'
import BotChat from './BotChat';
import UserChat from './UserChat';



const ChatCard = ({ data, sender }) => {
  return (
    <div className='px-8 py-2 '>
        {sender === 'user' ? <UserChat data = {data}/> : <BotChat data = {data}/>}
      </div>
  )
}

export default ChatCard