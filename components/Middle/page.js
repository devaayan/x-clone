import React from 'react'
import Navbar from '../Navbar/page'
import Post from '../Post/page'
import Card from '../Cards/page'
const Middle = () => {
  return (
    <>
      <div className=' w-full  '>
        <Navbar />
        <Post/>
        <div className='text-center m-2 cursor-pointer text-blue-400'>Show 515 posts</div>
        <div className='border-1 mt-2 w-full border-neutral-700 bg-gray-600'></div>
        <Card/>
        
      </div>


    </>
  )
}

export default Middle
