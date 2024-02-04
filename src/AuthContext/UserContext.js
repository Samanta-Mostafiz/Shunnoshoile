import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
// import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
// const gitHubProvider = new GithubAuthProvider();


// <=======Main part ============>
const UserContext = ({ children }) => {

    //user update useState
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    //email or password Sing up user
    const singUpUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    //Sing in email or password
    const singInUser = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    //user inForation name image etc
    const userProfile = (name, image) => {
        setLoding(true);
        console.log("privet", image)
        return updateProfile(auth?.currentUser, { displayName: name, photoURL: image });
    }
    // Log out user 
    const logOutUser = () => {
        setLoding(true);
        return signOut(auth)
    }

    //send email verification
    const emailVerification = () => {
        setLoding(true);
        return sendEmailVerification(auth.currentUser);
    }

    // const password reset email 
    const htmlForGetPass = (email) => {
        setLoding(true);
        return sendPasswordResetEmail(auth, email)
    }

    //Auto google Log in
    const autoGoogleLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, provider);
    }




    //Auto gitHub logIn
    const authInfo = {
        user,
        singUpUser,
        singInUser,
        htmlForGetPass,
        userProfile,
        logOutUser,
        emailVerification,
        autoGoogleLogin,
        loding,

    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setTimeout(() => {
                setLoding(false);
            }, 1500)
        })
        //return by unSubscribe call not memory lick
        return () => {
            unSubscribe()
        };

    }, [])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


};

export default UserContext;