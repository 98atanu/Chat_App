import React from 'react'
import { CgProfile } from "react-icons/cg";


const ChatCard = ({ data }) => {
  return (
    <div className='p-2'>
      <div className='flex items-center mb-2 gap-2'>
        <CgProfile className='text-3xl'/>
        Jessica
      </div>
      <div className='bg-[#d62b5e] px-2 py-1 rounded-md'>
        {data}
      </div>
    </div>
  )
}

export default ChatCard