import React from 'react'
import { BiSolidBot } from "react-icons/bi";
import { FaVolumeUp } from "react-icons/fa";
import { BiSolidLike,  BiSolidDislike } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { FaCirclePlay } from "react-icons/fa6";
import { FiEdit } from 'react-icons/fi';
import { ImCopy } from "react-icons/im";



const BotChat = ( {data} ) => {
    return (
        <div>
            <div className='flex items-center mb-1 gap-2'>
                <BiSolidBot className='text-2xl text-[#cf144ce2]' /><div className=' text-[#a4a4a1] font-bold'>Jessica</div>
            </div>
            <div className='bg-[#d62b5e] px-2 py-1 rounded-r-md rounded-b-md ml-7 text-sm'>
                {data}
            </div>
            <div className='flex items-center gap-3 mt-2 ml-10 text-[#515151] cursor-pointer font-bold text-lg'>
            <FaVolumeUp className='hover:text-[#dbdbdb]'/>
            <BiSolidLike className='hover:text-[#dbdbdb]'/>
            <BiSolidDislike className='hover:text-[#dbdbdb]'/>
            <TfiReload className='hover:text-[#dbdbdb] '/>
            <FaCirclePlay className='hover:text-[#dbdbdb]'/>
            <FiEdit className='hover:text-[#dbdbdb]'/>
            <ImCopy className='hover:text-[#dbdbdb]'/>
            </div>
        </div>
    )
}

export default BotChat