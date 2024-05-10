import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { ImCopy } from "react-icons/im";




const UserChat = ({ data }) => {
  return (
    <div>
          <div className='flex items-center justify-end mb-2 gap-2'>
            <CgProfile className='text-2xl text-[#277538]' />
            <div className='text-[#cacac6] font-bold'>You</div>
            </div>
            <div className='bg-[#262626] px-2 py-1 rounded-l-md rounded-b-md mr-7 text-sm'>
              {data}
            </div>
            <div className='flex items-center gap-2 mt-2 ml-2 text-[#515151] cursor-pointer text-lg'>
            <FiEdit className='hover:text-[#dbdbdb]'/>
            <ImCopy className='hover:text-[#dbdbdb]'/>
            </div>
          </div>
  )
}

export default UserChat