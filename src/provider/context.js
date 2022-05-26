import { createContext, useEffect, useContext, useState } from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../home/sign_in/f_base/config';

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                alert('Success');
            })
            .catch((error) => alert('error :' + error.message));
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log("useer logged: ", user);
            })
            .catch((error) => alert('error:', error.message));
    }
    function logOut() {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);
    return <userAuthContext.Provider value={{ user, login, register, logOut }}>{children} </userAuthContext.Provider>
}
export function useUserAuth() {
    return useContext(userAuthContext);
}