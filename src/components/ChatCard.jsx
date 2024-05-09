import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BiSolidBot } from "react-icons/bi";



const ChatCard = ({ data, sender }) => {
  return (
    <div className='px-8 py-2 '>
        {sender === 'user' ? (
          <>
          <div className='flex items-center justify-end mb-2 gap-2'>
            <CgProfile className='text-2xl text-[#277538]' />
            <div className='text-[#a4a4a1] font-bold'>You</div>
            </div>
            <div className='bg-[#262626] px-2 py-1 rounded-l-md rounded-b-md mr-7'>
              {data}
            </div>
          </>) : (
          <>
           <div className='flex items-center mb-2 gap-2'>
            <BiSolidBot className='text-2xl text-[#cf144ce2]' /><div className=' text-[#a4a4a1] font-bold'>Jessica</div>
            </div>
            <div className='bg-[#d62b5e] px-2 py-1 rounded-r-md rounded-b-md ml-7'>
              {data}
            </div>
          </>)}
      </div>

  )
}

export default ChatCard