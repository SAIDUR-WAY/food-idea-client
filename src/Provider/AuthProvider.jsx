import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.confige';
import { toast } from 'react-hot-toast';



export const AuthContext = createContext(null);

const auth = getAuth(app);
// const [user, setUser] = useState(null)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState([])
     
     //signUp in firebase
     const signUp = (email, password)=>{
        return  createUserWithEmailAndPassword(auth, email, password)
     }

     //signIn in firebase



     const logOut = ()=>{
          signOut(auth)
          .then(()=>{
               toast('Sign Out Success!')
          })
          .catch(error=>{
               console.log(error.message)
          })
     }




     const profileUpdate = (currentUser, name, photoUrl)=>{
          updateProfile(currentUser, {
               displayName: name,
               photoURL: photoUrl
          })
          .then(()=>{
               console.log('updated profile')
          })
          
     }
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)
               console.log(currentUser)
          })
          return unsubscribe;
     }, [])

     const authInfo = {
          user,
          signUp,
          logOut,
          profileUpdate,
     }

     return (
          <AuthContext.Provider value = {authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;