import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //signUp
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }
    //update user
    const updateUser =(user,displayName,photoURL)=>{
        return updateProfile(user,{
            displayName:displayName,
            photoURL:photoURL
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signUp,
        updateUser,
        signIn,
        logout
    }

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;