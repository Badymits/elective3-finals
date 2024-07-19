import { useContext, useEffect, useState } from 'react'
import {getDocs, collection, onSnapshot} from 'firebase/firestore';
import {db} from '../config/Firebase'
import { LibraryContext } from '../context/LibraryContext';

const Home = () => {
  
    const { setBooksInCart, booksInCart } = useContext(LibraryContext)
    const [books, setBooks] = useState()

  useEffect(() => {
    const ref = collection(db, 'books');
    onSnapshot(ref, (snapshot)=>{
        console.log(snapshot);
        let results = []
        snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()});
        });
        setBooks(results);
    })

    getDocs(ref)
        .then((snapshot)=>{
        let results = []
        console.log(snapshot)
        snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()});
        });
        setBooks(results);
        })    
  },[])

  const detailView = (id) => {
    console.log(id)
  }

  const handleAddToCart = (book) => {
    if (booksInCart.some(item => item.id === book.id)){
        alert('Item is already in cart!')
    } else {
        setBooksInCart(prevState => 
            [...prevState, book]
        )
        alert(`Added ${book.title} to cart!`)
    }
  }
    
  return (
    <div className=''>
        <h1 className='text-3xl font-semibold'>Computer Science</h1>
        { books && books.map((book, i) => (
            <div key={book.id} className='flex items-center justify-start gap-2 py-2 w-[1100px] relative' onClick={() => detailView(book.id)}>
                <img src={book.imgURL} alt="" className='object-contain max-h-[250px] max-w-[250px]'/>
                <div className='text-2xl'>
                    <p>{ book.title }</p>
                    <p>{book.author}</p>
                </div>
                <button className='absolute right-3 bg-green-300 p-3 rounded-md' onClick={() => handleAddToCart(book)}>Add to Cart</button>
            </div>
        )) }
        
    </div>
  )
}

export default Home