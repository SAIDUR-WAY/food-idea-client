import React, { createContext, useContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.confige';
import { toast } from 'react-hot-toast';



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
// const [user, setUser] = useState(null)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState([])
     const [loading, setLoading] = useState(true);
     
     //signUp in firebase
     const signUp = (email, password)=>{
          setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
     }

     //signIn in firebase
     const handelSignIn = (email, password)=>{
          return signInWithEmailAndPassword(auth, email, password)
      }

      //google login popup
      const googleSignIn = ()=>{
          setLoading(true)
        return  signInWithPopup(auth, googleProvider)
      }
      //github login popup
      const githubSignIn = ()=>{
          return signInWithPopup(auth, githubProvider)
      }


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
               setLoading(false)
          })
          return unsubscribe;
     }, [])

     const authInfo = {
          user,
          loading,
          signUp,
          logOut,
          profileUpdate,
          handelSignIn,
          googleSignIn,
          githubSignIn,
     }

     return (
          <AuthContext.Provider value = {authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;