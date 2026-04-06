import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-5'>
        <h1 className='font-serif font-bold text-2xl'>Tenstack Queary</h1>
        <p className='text-sm text-gray-500'>Learning Tenstack Queary</p>
      </div>
      <div className='lg:flex justify-between px-20 gap-5'>
        <div>form</div>
        <div>email</div>
      </div>
    </div>
  )
}

export default page