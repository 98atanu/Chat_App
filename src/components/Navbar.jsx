import React, { useState } from 'react'
import { IoChatboxEllipses } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";


const Navbar = () => {

    const [active, setActive]=useState(true)

    const handleOnClick = () => {
        setActive(true);
    }

    return (
        <div className=' w-screen h-10 bg-[#262626] px-5 py-2 flex justify-between items-center'>
            <div className='flex-col text-sm '>
                <div className='font-bold'>secret <span className='bg-[#d62b5e] rounded-md px-1'>desires</span></div>
                <div className='text-[10px] text-gray-400 -mt-1'>open beta</div>
            </div>
            <div  className='flex gap-5 cursor-pointer text-sm'>
                <div onClick={handleOnClick} className={`flex items-center justify-center gap-1 ${active && "text-[#d62b5e]"}`}><IoChatboxEllipses /> <span className='hidden md:block'>Chat</span></div>
                <div className='flex items-center justify-center gap-1'><MdPeople className='text-lg'/><span className='hidden md:block'> My Characters</span></div>
                <div className='flex items-center justify-center gap-1'><FaCamera /> <span className='hidden md:block'> Generate Images</span></div>
                <div className='flex items-center justify-center gap-1 bg-[#d12a5c] rounded-md px-1.5 py-1 font-bold'><GiSelfLove className='text-white'/> <span className='hidden md:block'> Create Character </span></div>
            </div>
            <div>
                <div className='text-sm flex items-center justify-center gap-1 '><IoMdContact className='text-lg cursor-pointer'/> <span className='hidden sm:block'>My Profile </span> <GoTriangleDown className='text-sm cursor-pointer'/> </div>
            </div>
        </div>
    )
}

export default Navbar