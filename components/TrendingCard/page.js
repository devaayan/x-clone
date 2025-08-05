'use client'
import React, { useEffect, useState } from 'react';

const TrendingCards = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch('/api/trending/', { method: 'GET' });
      const json = await res.json();
      setData(json.trending); 
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // Fetch on component mount
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className='p-4 bg-black z-10' style={{ position: 'sticky', top: 0 }}>
      <h2 className='text-white text-lg mb-4 font-semibold'>Trending Now</h2>

      {data.map((item, index) => (
        <div key={index} className='mb-4 text-[15px] font-normal text-gray-400'>
          <div>{item.category}</div>
          <div className='text-sm font-bold text-white'>{item.hashtag}</div>
          <div>{item.posts} Posts</div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCards;
