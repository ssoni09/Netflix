import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
            src='https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg'
            alt='background'
        />
      </div>
      <form className='w-3/12 absolute p-12 bg-black mx-auto my-36 left-0 right-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input 
            type='text' 
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-700 rounded-sm'
        />
        <input 
            type='password' 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700 rounded-sm'
        />
        <button className='p-4 my-6 bg-red-700 w-full rounded-md'>Sign In</button>
      </form>
    </div>
  )
}

export default Login
