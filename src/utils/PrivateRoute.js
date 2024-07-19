import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { LibraryContext } from '../context/LibraryContext'

const PrivateRoute = () => {
  
  let { user } = useContext(LibraryContext)
  
  return user ? <Outlet /> : <Navigate to='/login'/>
}

export default PrivateRoute