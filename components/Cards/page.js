'use client'

import React, { useEffect, useState } from 'react'
/* eslint-disable @next/next/no-img-element */

import { IoPlanetOutline } from "react-icons/io5";
import { BiRepost } from "react-icons/bi";
import Link from 'next/link';
import { CiHeart } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";



const Card = () => {
    const [jsondata, setjsondata] = useState([])


    const getdata = async () => {
        try {
            // let response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-08-04&to=2025-08-04&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`)
            let response = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json()

            setjsondata(data.articles)
        }
        catch (err) {
            console.log(err, + "Something Went Wrong ...")
        }
    }

    useEffect(() => {
        getdata();


    }, [])







    return (
        jsondata.map((items, index) => {

            const getDisplayName = (name) => {
                if (!name) return "john";
                return name.length > 10 ? name.slice(0, 10) : name;
            };

            return <div key={index}>
                <div className='flex items-center justify-between'>

                    <div className="mininav flex m-2">
                        <div className="rounded-full  overflow-hidden  relative border">

                            <img
                                src={items.urlToImage || '/assets/icons/default_user.png'}
                                alt="logo"
                                loading="lazy"
                                className="w-[48px] h-[48px]  object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/assets/icons/default_user.png';
                                }}
                            />
                        </div>
                        <p className='p-3 font-bold cursor-pointer '>
                            <span className='hover:underline'> {getDisplayName(items.author)} </span>
                            <span className='text-gray-500 font-normal p-4'>
                                @{getDisplayName(items.author)}
                            </span>
                        </p>
                    </div>
                    <div className='mx-2 flex '>
                        <IoPlanetOutline className='mx-2 rotate-90 text-gray-500 hover:text-blue-400  ' />
                        <BsThreeDots className='mx-2 text-gray-500 hover:text-blue-400 ' />
                    </div>
                </div>
                <div className='ml-2 md:ml-17 md:w-[87%]  overflow-hidden '>

                    {!items.title ? " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus beatae dolor modi nostrum culpa consectetur veniam quisquam at eaque. Vitae voluptate debitis doloremque?" : items.title}
                </div>
                {items.url ? <Link href={items.url} target='__blank'><span className=' ml-2 md:ml-17 text-blue-500 hover:underline hover:text-blue-700 transition-colors'>Read more</span></Link> : <Link href={'/'}><span className='ml-17 text-blue-500 hover:underline hover:text-blue-700 transition-colors'>Read more</span></Link>}

                <div className='md:mx-17 md:mt-2 md:w-[600px] mx-3  '>
                    {items.urlToImage ? <img src={items.urlToImage} width={600} height={600} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/icons/test.jpg' }} className='rounded-2xl' alt='img' /> : <img src={'/assets/icons/test.jpg'} width={600} height={600} className='rounded-2xl' alt='img' />}

                </div>
                <div className='md:mx-17 flex justify-evenly items-center mt-4'>
                    <div className='flex items-center space-x-4 md:space-x-15 text-xl'>
                        <div className='flex items-center space-x-1 group cursor-pointer'>
                            <BiMessageRounded className='group-hover:text-blue-500 transition-colors' />
                            <span className='text-sm text-gray-500 group-hover:text-blue-500 transition-colors'>{`${Math.floor(Math.random() * 2 + 1)}k+`}</span>
                        </div>
                        <div className='flex items-center space-x-1 group cursor-pointer'>
                            <BiRepost className='group-hover:text-green-500 transition-colors' />
                            <span className='text-sm text-gray-500 group-hover:text-green-500 transition-colors'>{`${Math.floor(Math.random() * 400 + 100)}k`}</span>
                        </div>
                        <div className='flex items-center space-x-1 group cursor-pointer'>
                            <CiHeart className='group-hover:text-pink-500 transition-colors' />
                            <span className='text-sm text-gray-500 group-hover:text-pink-500 transition-colors'>{`${Math.floor(Math.random() * 900 + 100)}k`}</span>
                        </div>
                        <div className='flex items-center space-x-1 group cursor-pointer'>
                            <IoStatsChart className='group-hover:text-blue-500 transition-colors' />
                            <span className='text-sm text-gray-500 group-hover:text-blue-500 transition-colors'>{`${Math.floor(Math.random() * 900 + 100)}k`}</span>
                        </div>
                        <div className='flex items-center space-x-1 group cursor-pointer'>
                            <FiShare className='group-hover:text-blue-500 transition-colors' />
                            <span className='text-sm text-gray-500 group-hover:text-blue-500 transition-colors'></span>
                        </div>
                        <div className='flex items-center space-x-1 group cursor-pointer'>
                            <CiBookmark className='group-hover:text-blue-500 transition-colors' />
                            <span className='text-sm text-gray-500 group-hover:text-blue-500 transition-colors'></span>
                        </div>
                    </div>
                    {/* <div className='flex items-center space-x-4 text-xl'>
                        <div className='group cursor-pointer'>
                            <CiBookmark className='group-hover:text-blue-500 transition-colors' />
                        </div>
                        <div className='group cursor-pointer'>
                            <FiShare className='group-hover:text-blue-500 transition-colors' />
                        </div>
                    </div> */}
                </div>
                <div className='border-1 mt-3 mb-2 w-full border-neutral-700 bg-gray-600'></div>
            </div>

        })

    )
}

export default Card
