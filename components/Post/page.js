import React from 'react'
import Image from 'next/image'
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineGifBox } from "react-icons/md";
import { IoPlanetOutline } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";




const Post = () => {
    return (
        <div className="w-full max-w-xl mx-auto px-2 sm:px-0">
            <div className="m-2 p-2 sm:p-4 flex items-start">
                <Image src={'/assets/icons/icon.png'} className="border-2 min-w-[30px]" width={30} height={30} alt="logo" />
                <input
                    type="text"
                    placeholder="Whats Happening?"
                    className="w-full outline-none text-neutral-300 px-2 text-base sm:text-xl bg-transparent"
                />
            </div>
            <div className="flex items-center px-2 sm:px-4">
                <BsGlobeCentralSouthAsia className="text-blue-500" />
                <p className="px-2 sm:px-3 text-blue-400 font-semibold cursor-pointer text-xs sm:text-base">Everyone can reply</p>
            </div>
            <div className="border border-neutral-700 mx-2 sm:mx-4 mt-2" />
            <div className="px-2 sm:px-4 mt-2">
                <div className="flex m-2 items-center justify-between flex-wrap gap-2">
                    <ul className="flex flex-wrap">
                        <li className="mx-1 my-1 font-bold text-blue-400 text-lg sm:text-xl cursor-pointer"><HiOutlinePhotograph /></li>
                        <li className="mx-1 my-1 font-bold text-blue-400 text-lg sm:text-xl cursor-pointer"><MdOutlineGifBox /></li>
                        <li className="mx-1 my-1 font-bold text-blue-400 text-lg sm:text-xl cursor-pointer"><IoPlanetOutline /></li>
                        <li className="mx-1 my-1 font-bold text-blue-400 text-lg sm:text-xl cursor-pointer"><BiPoll /></li>
                        <li className="mx-1 my-1 font-bold text-blue-400 text-lg sm:text-xl cursor-pointer"><FaRegSmile /></li>
                        <li className="mx-1 my-1 font-bold text-blue-400 text-lg sm:text-xl cursor-pointer"><RiCalendarScheduleLine /></li>
                        <li className="mx-1 my-1 font-bold text-blue-400 text-lg sm:text-xl cursor-pointer"><CiLocationOn /></li>
                    </ul>
                    <button className="text-sm sm:text-base bg-gray-400 text-black font-semibold rounded-2xl px-3 sm:px-4 py-1">
                        Post
                    </button>
                </div>
            </div>
            <div className="border border-neutral-700 mt-2 w-full" />
        </div>
    )
}

export default Post
