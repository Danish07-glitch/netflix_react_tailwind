import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Login = () => {
    const navigate=useNavigate()
    const  {user,logIn}=UserAuth()
    const [formData, setFormData] = useState({
      email:"",
      password:""
    })
    console.log(formData,"-------->");
    const handleChange=(e)=>{
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }
  
    const handleSubmit=async (e)=>{
      e.preventDefault()
      try {
          await logIn(formData.email,formData.password)
          navigate('/')
      }
      catch(e){
        console.log("emessage",e.message);
      }
    }
  
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-image" />
     
      {/* Overlay */}
      <div className='w-full h-full top-0 left-0 bg-black/60 fixed'>
      </div>
      <div className='fixed w-full px-4 py-24 z-50'>

        <div className='max-w-[450px] mx-auto h-[600px] bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col py-4'>

              <input name='email' onChange={handleChange} className='p-3 my-2 bg-gray-700 rounded outline-none ' type="email" placeholder='Email or Phone number' autoComplete='email'/>
              <input name='password'  onChange={handleChange} className='p-3 my-2 bg-gray-700 rounded outline-none ' type="password"  placeholder='Password'  autoComplete='current-password'/>
              <button className='bg-red-600 my-6 rounded py-3 font-bold'>Sign In</button>
            <div className='flex justify-between text-sm text-gray-600'>
              <p><input className='mr-2' type="checkbox" />Remember Me</p>
              <p>Need Help?</p>
            </div>
            <p className='py-8'><span className='text-gray-600 mr-1'>New to Netflix?</span>
            <Link to='/signup'>
            Sign Up
            </Link>
            </p>
            </form>

          </div>
        </div>

      </div>

    
    
    </div>
    </>
  )
}

export default Login