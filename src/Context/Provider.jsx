import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase.config";
import { useEffect, useState } from "react";


const Provider = ( {children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)

    // create user --------------
     const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

    //  signIn user-------------
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   // reload problem solving-------------------
   useEffect(()=>{
    const unSubsCriber = onAuthStateChanged(auth,currentUser=>{
      setLoading(false)
       setUser(currentUser)

   
    })
    return ()=>{
        unSubsCriber()
    }
  },[])
      //  sign out --------------
      const logOut =()=>{
       signOut(auth)
        .then(()=>{

        })
        .catch((err)=>{
             console.log(err)
        })
    }
    // update profile-------------
     const profileUpdate  =(name,photoUrl)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
               displayName:name,
               photoURL:photoUrl
        })
     }

  
  
    const userInfo = {
        signUp,
        signIn,
        profileUpdate,
        user,
        setUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;