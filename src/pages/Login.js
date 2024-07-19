import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { reading_time, library_icon } from '../assets/images';

import { LibraryContext } from '../context/LibraryContext';

const Login = () => {

  const { loginUser } = useContext(LibraryContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className='bg-white w-[1450px] h-[800px] grid grid-cols-2 justify-center items-center divide-x-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 divide-black m-auto'>
      
    <div className='flex flex-col items-center w-full h-full justify-center relative'>
      <p className='absolute top-[50px] text-3xl text-center'>Welcome back! <br /> Ready to learn something new?</p>
      <img src={reading_time} alt="reading_time" height={550} width={550} />
    </div>

    <div className='flex flex-col items-center justify-center gap-10 w-full h-full'>
      
      <h1 className='text-4xl w-[300px] text-center inline'>
        <img src={library_icon} alt="library_icon" height={150} width={80} className='inline-block' />
        Library Lane
      </h1>

      <form className='px-8 pt-6 pb-8 mb-4' action="" onSubmit={loginUser}>
        <div className='mb-6'>
          <label className='block text-gray-700 text-lg font-bold mb-2' htmlFor="email">Email</label>
          <input type="text" name='email' className='shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-lg font-bold mb-2' htmlFor="password">Password</label>
          <input type="password" className='shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline' name='password' value={password} onChange={(e) => setPassword(e.target.value )}  placeholder='Enter Password' />
          <button className='block text-sm pt-2 text-[#6AB187]'>Forgot Password?</button>
        </div>
          
        <div>
          <input type="submit" name='submit' value='Login' className='bg-[#6AB187] hover:bg-[#7fcc9f] duration-150 mx-auto uppercase text-xl block cursor-pointer w-[200px] p-3 rounded-xl text-white'/>
          <button className='block mx-auto text-md pt-3 text-[#6AB187]' >
            <Link to='/register'>
              Create an account
            </Link>
          </button>
        </div>
          
      </form>
    </div>
      
  </div>
  )
}

export default Login