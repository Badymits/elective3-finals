import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { LibraryContext } from "../context/LibraryContext";

import { useNavigate } from "react-router-dom";
import {  IoIosRemoveCircleOutline  } from "react-icons/io";

const PageHeader = () => {
  
  const { booksInCart, setBooksInCart } = useContext(LibraryContext)
  const navigate = useNavigate()

  // upon user scroll, will set the css classes for navbar
  const [navbar, setNavbar] = useState(false)

  // controlled input search bar
  const [searchBar, setsearchBar] = useState('')

  // cart display block, by default, it is closed
  const [cartView, setCartView] = useState(false)

  const handleSearchBar = (e) => {
    
    setsearchBar(e.target.value)
  }

  const handleCartView = () => {
    setCartView(!cartView)
  }

  const handleNavbar = () => {

    if (window.scrollY >= 50){
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  }

  const handleSearch = () => {
    console.log('...search')
  }

  const handleRemoveBook = (book) => {
    let filteredArray = booksInCart.filter(item => item !== book)
    setBooksInCart(filteredArray)
  }

  window.addEventListener('scroll', handleNavbar)
  return (
    <header className={navbar ? "h-[80px] bg-white/10 backdrop-blur-md border-gray-400  transition-all" : "  w-[1125px] h-[80px] border-b-[1px] border-gray-400 " }>
        <div className="flex items-center justify-between h-full w-full px-2">
            <div className="flex items-center justify-start gap-[4rem] w-[500px] text-3xl ">

                <div>
                    <NavLink className={({isActive, isTransitioning}) => 
                        [isActive ?
                        'active-tab-header' :
                        '',
                        isTransitioning ? 
                        'transitioning' :
                        ''
                        ].join(" ")

                    } 
                        to=''
                    >
                        Browse 
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive, isTransitioning}) => 
                        [isActive ?
                        'active-tab-header' :
                        '',
                        isTransitioning ? 
                        'transitioning' :
                        ''
                        ].join(" ")}
                        to='checkout'
                        >
                        Check Out
                    </NavLink>
                </div>
            </div>
            <div className="flex  items-center justify-between">
                <div className="relative">
                    <CiSearch className="absolute top-3 right-3 text-3xl"/>
                    <form action="" onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            name="searchbar"
                            placeholder="Search for title, author, genre..." 
                            className="w-[650px] h-[50px] text-xl pl-2 border border-slate-500 rounded-lg" 
                            value={searchBar}
                            onChange={handleSearchBar}
                        />
                    </form>
                </div>
                <div className="relative px-2">
                    <GiShoppingCart className="text-3xl hover:hover:bg-gray-200 rounded-full cursor-pointer" onClick={handleCartView}/>
                    <div className={`${cartView ? 'block' : 'hidden'} absolute top-8 right-0 h-[400px] w-[450px] bg-gray-300 rounded-xl border-blue-300 border-2 z-50`}>
                        {booksInCart   ? 
                            <div>
                                {booksInCart.map((book) => (
                                    <div key={book.id} className="overflow-auto">
                                        <div key={book.id} className="flex items-center justify-between py-2 px-3 h-[130px]">
                                            <img src={book.imgURL} alt={book.title} className="object-contain max-h-[100px] max-w-[100px]"/>
                                            <div className="px-6">
                                                <p>{book.title}</p>
                                                <p>{book.author}</p>
                                            </div>
                                            
                                            <IoIosRemoveCircleOutline className="text-red-600 cursor-pointer text-lg" onClick={() => handleRemoveBook(book)}/>
                                        </div>

                                    </div>
                                    
                                ))}
                                <Link to='checkout' className="absolute bottom-0 w-full p-5 rounded-b-xl text-xl text-center bg-green-300">Proceed to Checkout</Link>
                            </div>
                            : 
                            <p className="text-3xl text-center leading-10 text-white">No books in Cart</p>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default PageHeader