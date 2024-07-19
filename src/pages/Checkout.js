import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LibraryContext } from '../context/LibraryContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

  const { booksInCart, setBooksInCart } = useContext(LibraryContext)

    const [addressLine1, setAddressLine1] = useState('')
    const [province, setProvince] = useState('')
    const [barangay, setBarangay] = useState('')

  const navigate = useNavigate()

  const handleRemoveBook = (book) => {
    let filteredArray = booksInCart.filter(item => item !== book)
    setBooksInCart(filteredArray)
  }

  const confirm = () => {
    alert("Order Confirmed!!")
    setBooksInCart([])
    setAddressLine1('')
    setProvince('')
    setBarangay('')
    navigate('/')
  }
  return (
    <div className='h-screen'>
        {booksInCart ? 
            <div>
                {booksInCart.map((book) => (
                    <div key={book.id} className='flex items-center justify-start gap-2 py-2 w-[1100px] relative'>
                        <img src={book.imgURL} alt="" className='object-contain max-h-[250px] max-w-[250px]'/>
                        <div className='text-2xl'>
                            <p>{ book.title }</p>
                            <p>{book.author}</p>
                        </div>
                        <button className='absolute right-3 bg-red-400 p-3 rounded-md' onClick={() => handleRemoveBook(book)}>Remove</button>
                    </div>
                ))}
                {booksInCart && <form action="">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Address</label>
                        <input 
                        type="text" 
                        name="address" 
                        className="shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline"
                        onChange={(e) => setAddressLine1(e.target.value)} 
                        value={addressLine1} 
                        placeholder="Enter Address..." 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Province</label>
                        <input 
                        type="text" 
                        name="address" 
                        className="shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline"
                        onChange={(e) => setProvince(e.target.value)} 
                        value={province} 
                        placeholder="Enter Province..." 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Barangay</label>
                        <input 
                        type="text" 
                        name="address" 
                        className="shadow appearance-none w-[400px] border py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline"
                        onChange={(e) => setBarangay(e.target.value)} 
                        value={barangay} 
                        placeholder="Enter Barangay..." 
                        />
                    </div>
                    <button className='bg-green-300 p-4 rounded-lg text-3xl font-thin' onClick={() => confirm()}>Confirm</button>
                </form>}
            </div>
        : 
            <div>
                No books added
            </div>
        }
    </div>
  )
}

export default Checkout