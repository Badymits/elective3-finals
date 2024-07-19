import { profile_picture, library_icon } from '../assets/images';
import { IoLibraryOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { BiLogOut  } from "react-icons/bi";
import { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const { user, logoutUser } = useContext(LibraryContext)
  return (
    <div className='h-[100vh]'>
        <div className='flex flex-col items-center justify-center py-4 '>
            <div className='flex items-center justify-center  pb-6 relative'>
                <h1 className='text-3xl w-[300px] text-center  inline cursor-pointer  pr-[4rem] pt-2'>
                    <img src={library_icon} alt="library_icon" height={120} width={60} className='inline-block' />
                    Library Lane
                </h1>
                <IoMdNotificationsOutline className='cursor-pointer absolute right-1 text-3xl hover:bg-gray-200 rounded-full'  />

            </div>
            
            <img src={profile_picture} alt="profile_pic" height={450} width={180} />
            {user && <h1 className='text-xl pt-4'>Hello {user.first_name}! <br /> <p className='text-center text-gray-400'>@{user.username}</p> </h1>}
        </div>
        <hr className='w-[300px] block mx-auto border-1 border-[#D9D9D9]'/>
        <nav className='pt-8'>
        
            <div className='text-xl space-y-2'>
                <div className=' '>
                    <NavLink to='/' className={({isActive, isTransitioning}) => 
                        [isActive ?
                        'flex items-center gap-3 px-24 active-tab' :
                        'inactive-tab hover:hover-tab',
                        isTransitioning ? 
                        'transitioning' :
                        ''
                        ].join(" ")
                        
                        } 
                    >
                        <IoLibraryOutline className='mr-2'/>
                        Home
                    </NavLink>
                </div>

                <div className=''>
                    <NavLink to='/profile' className={({isActive}) => isActive ?
                        'flex items-center gap-3 px-24 active-tab' :
                        'inactive-tab hover:hover-tab'
                        }>
                        <ImProfile className='mr-2'/>
                        Profile
                    </NavLink>
                </div>

                <hr className='w-[300px] block mx-auto border-1.5  border-[#D9D9D9]'/>


                {user ? (
                    <div className=''>
                        <NavLink 
                            onClick={logoutUser}
                            className='flex items-center gap-3 px-24 py-8 text-2xl hover:hover-tab'
                        >
                            <BiLogOut />
                            Logout
                        </NavLink>
                    </div>
                    
                ) : (
                    <div className='text-center'>
                        <NavLink to='/auth/login' className='hover:hover-tab'>Login</NavLink>
                    </div>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Sidebar