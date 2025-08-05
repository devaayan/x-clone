import React from 'react'
import Left from '@/components/Left/page'
import Middle from '@/components/Middle/page'
import Right from '@/components/Right/page'

const page = () => {
  return (
    <div className='flex relative w-full '>
      <Left />
      <Middle />
      <Right />
    </div>
  )
}

export default page
