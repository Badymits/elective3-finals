import { library_icon } from '../assets/images';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Library = () => {
  

  return (
    <section className='grid xl:grid-cols-5 md:grid-cols-7 gap-2 divide-x-2'>
        <div className='col-start-1 col-end-1 px-2'>
            <div className='fixed'>
                <Sidebar />
            </div>
            
            
            
        </div>
        <div className='col-start-2 col-end-3'>
            {/* Nested Routes will render here */}

            <PageHeader />
            <div className='p-3'>
                <Outlet />
            </div>
            
        </div>
        <div className='col-start-5 col-end-5 p-2'>
            <div className='flex flex-col items-center px-3 text-justify gap-4 fixed'>
                
                <h1 className='text-3xl w-[300px] text-center  inline cursor-pointer p-3'>
                    <img src={library_icon} alt="library_icon" height={120} width={60} className='inline-block' />
                    Library Lane
                </h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error perspiciatis consequuntur 
                    veniam expedita totam laboriosam. Praesentium, autem et! Aut ex eveniet adipisci. Culpa tempore placeat 
                    quae voluptatum voluptate eum.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error perspiciatis consequuntur 
                    veniam expedita totam laboriosam. Praesentium, autem et! Aut ex eveniet adipisci. Culpa tempore placeat 
                    quae voluptatum voluptate eum.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error perspiciatis consequuntur 
                    veniam expedita totam laboriosam. Praesentium, autem et! Aut ex eveniet adipisci. Culpa tempore placeat 
                    quae voluptatum voluptate eum.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Library