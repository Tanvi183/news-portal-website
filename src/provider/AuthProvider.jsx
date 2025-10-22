import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";

// setp : 1 create context
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user);

    const createUser = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=> {
            unSubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
    };

    // step : 2 return the created context
    return <AuthContext value={authData}>
        { children }
    </AuthContext>
};

export default AuthProvider;