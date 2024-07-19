import { createContext, useState } from "react";
import { auth } from '../config/Firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const LibraryContext = createContext()

export const LibraryProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [ booksInCart, setBooksInCart ] = useState([])

    const navigate = useNavigate()
    const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setUser(user)
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const registerUser = (e) => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.password.value)
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            alert('Successful Register')
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const logoutUser = () => {
        setUser(false)
        //localStorage.removeItem('uid')
    }

    

    let data = {
        user: user,
        loginUser: loginUser,
        registerUser: registerUser,
        logoutUser: logoutUser,
        booksInCart: booksInCart,
        setBooksInCart:setBooksInCart
    }

    return (
        <LibraryContext.Provider value={data}>
            {children}
        </LibraryContext.Provider>
    )
}

