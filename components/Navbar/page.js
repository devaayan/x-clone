import React from 'react'

const Navbar = () => {
return (
    <div className='flex justify-evenly w-full h-10 items-center text-lg font-semibold sticky top-0 bg-black z-50 border-b-1 pb-1 border-gray-500'>
            <div className='cursor-pointer flex flex-col items-center h-10 p-2 w-full text-center hover:bg-neutral-900'>
                    For You
                    <div className='w-15 rounded bg-blue-500 h-1'>&nbsp;</div>
            </div>
            <div className='cursor-pointer w-full p-2 h-10 text-center hover:bg-neutral-900'>Following</div>
    </div>
)
}

export default Navbar
