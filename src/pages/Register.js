import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LibraryContext } from "../context/LibraryContext"

import { online_reading, library_icon } from '../assets/images'

const Register = () => {

  const { registerUser } = useContext(LibraryContext)

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        password2: '',
      })

    
      const handleChange = (e) => {
        const val = e.target.value
    
        setFormState(prevState => ({
          ...prevState,
          [e.target.name]: val
        }))
      }
    
  return (
    <div className='bg-white w-[1450px] h-[800px]  grid grid-cols-2 justify-center items-center divide-x-2 
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    divide-black m-auto'>
      <div className="flex flex-col items-center w-full h-full justify-center relative">
        <p className='absolute top-[50px] text-3xl text-center'>Come join us in this <br /> World of knowledge!</p>
        <img src={online_reading} alt="reading_time" height={550} width={550} />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 w-full h-full ">
        <h1 className='text-4xl w-[300px] text-center inline'>
          <img src={library_icon} alt="library_icon" height={150} width={80} className='inline-block' />
          Library Lane
        </h1>
        <form className="flex flex-col items-center px-8 pb-2 mb-2 " action="" onSubmit={registerUser}>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              className="shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline"
              onChange={handleChange} 
              value={formState.email} 
              placeholder="Enter Email..." 
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              className="shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline"
              onChange={handleChange} 
              value={formState.password} 
              placeholder="Enter Password..." 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password2">Confirm Password</label>
            <input 
              type="password" 
              name="password2" 
              className="shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline"
              onChange={handleChange} 
              value={formState.password2} 
              placeholder="Confirm Password..." 
            />
          </div>
          
          <div>
            <input type="submit" name="submit" value="Register" className="bg-[#6AB187] hover:bg-[#7fcc9f] duration-150 mx-auto uppercase text-xl block cursor-pointer w-[200px] p-3 rounded-xl text-white"/>
            <button className='block mx-auto text-md pt-3 text-[#6AB187]' >
              <Link to='/login'>
                Login with existing account
              </Link>
            </button>
          </div>
         
        </form>
      </div>
      
      
    </div>
  )
}

export default Register