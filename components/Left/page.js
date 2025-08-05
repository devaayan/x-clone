
import React from 'react'
import { FaHome, FaSearch, FaEnvelope } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { IoPlanet, IoPlanetOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Image from 'next/image'
import Link from 'next/link';
const Left = () => {
    return (
        <>
            <div className='xl:w-2/3  xl:relative xl:l-0 xl:min-h-screen border-r-1 w-full hidden   border-gray-500 xl:block '>
                <div className='fixed'>
                    <div className="icon ml-20 pb-2 mt-2">
                        <Image src={'/assets/icons/icon.png'} height={30} width={30} alt='Twitter logo' />

                    </div>
                    <div className="infos ">
                        <ul className='ml-20 mt-5  '>
                            <Link href={'/'} >
                                <li className='flex items-center hover:bg-neutral-900 rounded-4xl ' >

                                    <FaHome className="w-[30px] h-[30px] text-white  " /> <span className='p-3'>Home</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <FaSearch className="w-[30px] h-[30px]  text-white" /> <span className='p-3'>Explore</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <IoMdNotifications className="w-[30px] h-[30px]  text-white " /> <span className='p-3'>Notifications</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <FaEnvelope className="w-[30px] h-[30px]  text-white " /> <span className='p-3'>Messages</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <IoPlanetOutline className="w-[30px] h-[30px] rotate-120  text-white " /> <span className='p-3'>Grok</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <FaUserGroup className="w-[30px] h-[30px]  text-white " /> <span className='p-3'>Communities</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <RiTwitterXFill className="w-[30px] h-[30px]  text-white " /> <span className='p-3'>Premium</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <CiUser className="w-[30px] h-[30px]  text-white " /> <span className='p-3'>Profile</span>
                                </li></Link>
                            <Link href={'/'} >
                                <li className='flex  items-center hover:bg-neutral-900 rounded-4xl ' >
                                    <CiCircleMore className="w-[30px] h-[30px]  text-white " /> <span className='p-3'>More</span>
                                </li></Link>
                        </ul>
                        <button className='ml-15 mt-4 p-2 m-auto bg-white rounded-4xl w-50 border cursor-pointer text-black font-bold h-12'>Post</button>
                    </div>
                    <div className='absolute -bottom-30 ml-20 flex items-center hover:bg-neutral-900 rounded-4xl w-60'>
                        <div className="logo_img border-2 p-2 rounded-full object-cover flex ">
                            <Image src={'/assets/icons/icon.png'} height={20} width={20} alt='logo' className='' />
                        </div>
                        <div className='hover:bg-neutral-900 rounded-4xl '>
                            <p className='mx-5 overflow-x-hidden  font-bold '>alwaysthink</p>
                            <span className='p-4 text-gray-400'>@always</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Left
