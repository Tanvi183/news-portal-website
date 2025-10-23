import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

// setp : 1 create context
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user);

    // User Registation function
    const createUser = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    // User login Function
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // To store user data when logged in
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        });
        return ()=> {
            unSubscribe();
        }
    },[])


    // Logout
    const logOut = () => {
        return signOut(auth);
    };

    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
    };

    // step : 2 return the created context
    return <AuthContext value={authData}>
        { children }
    </AuthContext>
};

export default AuthProvider;