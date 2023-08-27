import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>

        <div className='text-red-600 text-4xl font-bold cursor-pointer'>
            NETFLIX
        </div>
        <div>
            <button className='text-white pr-4'>SIGN IN</button>
            <button className='bg-red-600 px-6 py-2 cursor-pointer text-white'>SIGN UP</button>
        </div>


    </div>
  )
}

export default Navbar