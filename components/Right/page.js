// 'use client'
import React from 'react'
import {FaSearch} from "react-icons/fa";
import TrendingCard from '../TrendingCard/page';

const Right = () => {
  return (
    <div className='w-2/3 xl:relative min-h-screen border-l-1 justify-center hidden  xl:block  border-gray-500'>
      <div className="sticky top-0">
        <div className="mt-4 ml-4 p-2 search flex items-center border-1 border-gray-400 rounded-4xl w-80">
          <FaSearch className='mx-2'/>
          <input type="text" placeholder='Search' className='outline-none text-lg w-78 '/>
        </div>
        <div className='mt-4 ml-4 p-2 rounded-xl w-80 h-40 border-1 border-gray-400'>
          <div className="content text-xl font-bold">
            <p className='px-2'>Subscribe to Premium</p>
            <p className='text-base px-2 my-1 font-normal '>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
            <button className='m-2 rounded-4xl text-lg font-semibold bg-sky-500 hover:bg-sky-400 w-40 h-10 '>Subscribe</button>
          </div>
        </div>
        <div className='mt-4 ml-4 p-2 rounded-xl w-80 h-110 border-1  border-gray-400'>
          <div className="content text-xl font-bold">
            <p className='px-2'>What's happening</p>
            <TrendingCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right
