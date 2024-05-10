import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillTool } from "react-icons/ai";
import { FaChessRook } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import img from "../assets/img.png";
import { FaCamera } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className='bg-[#d12a5c] shadow-lg shadow-[#262626] w-[40vw] lg:w-[30vw] h-screen pr-0.5 hidden md:block'>
            <div className='flex items-center justify-between bg-[#262626] h-[2vw] px-1 '>
                <div className='flex gap-1 text-xs items-center'>
                    <div className=' flex items-center'><IoIosArrowBack className='text-2xl font-bold cursor-pointer' /> Chats</div>
                    <div>img : 3</div>
                    <div>msg:</div>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <SlOptionsVertical className='text-sm' />
                    <AiFillTool className='text-lg' />
                    <FaChessRook className='' />
                    <FiEdit className='' />
                    <RxCross2 className='text-xl font-bold' />
                </div>
            </div>
            <div className='relative'>
                <img className='block' src={img} alt="img" />
                <div className='absolute bottom-0 w-full px-5 pt-7  bg-gradient-to-t from-[#262626] to-transparent '>
                    <h2 className='font-bold'>Jessica Anderson</h2>
                    <h3 className='text-xs -translate-y-1'>@jessica-anderson-2</h3>
                </div>
            </div>
            <div className='bg-[#871b3b] h-full mt-1 bg-gradient-to-t from-[#262626] to-transparent  '>
                <div className='ml-3 mr-3'>
                    <div className='flex gap-1 text-xs bg-[#262626] justify-between px-3 py-2 rounded-md mb-1'>
                        <div className='flex'>
                            <div className='flex gap-1 items-center mr-1'>
                                <FaCamera /> 0</div>
                            <div className='flex items-center gap-1'>
                                <BsFillChatDotsFill /> 6</div>
                        </div>
                        <div className='flex '>
                            <div className='flex items-center gap-1' >
                                <FaLock className='text-[#919191]' /> Make Character</div>
                            <div className='flex items-center ml-1 gap-1'>
                                Public <FaShareAlt /></div>
                        </div>
                    </div>
                    <div className=' flex justify-between h-screen bg-[#262626] px-3 pt-2 rounded-md gap-6'>
                        <div className=' h-1/2 text-xs '>
                            <h1 className='font-bold'>Who I am</h1>
                            <h2 className='font-bold'>Personality</h2>
                            <h3 className='-translate-y-1'>Caregiver</h3>
                            <h2 className='font-bold'>Work</h2>
                            <h3 className='-translate-y-1'>Yoga Instructor</h3>
                            <h2 className='font-bold'>Hobbies</h2>
                            <h3 className='-translate-y-1'>Anime Fan</h3>
                            <h2 className='font-bold'>Relationship</h2>
                            <h3 className='-translate-y-1'>Friend</h3>
                        </div>
                        <div className='text-xs w-'>
                            <div className='flex justify-between'>
                                <h1 className='font-bold'>About Me </h1>
                                <FiEdit className='font-bold'/>
                            </div>
                            <p>21-year-old anime fanatic and yoga instructor. I binge-watch anime! Looking for someone to join me in downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from memory Lets's chat!🚀💕🎀</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar