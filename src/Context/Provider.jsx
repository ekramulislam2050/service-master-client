import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase.config";
import { useEffect, useState } from "react";
 
import Swal from "sweetalert2";




const Provider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
   

    // create user --------------
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  signIn user-------------
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // update profile-------------
    const profileUpdate = (name, photoUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    // signIn with google------------
     
      const  loginWithGoogle =(googleProvider)=>{
         return signInWithPopup(auth,googleProvider)
       
      }

    // reload problem solving-------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    // sign out ------------------
    const logOut = () => {
        signOut(auth)
            .then(() => {
         
                Swal.fire({
                    title: "log out successful!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
               
            })
            .catch((error) => {
                const errorMsg = error.message
                Swal.fire({
                    title: errorMsg,
                    text: "You clicked the button!",
                    icon: "success"
                  });
            })

    }

    //  handle view details button---------------
     const getIdByViewDetailsButton=(id)=>{
         console.log(id)
     }

    const userInfo = {
        signUp,
        signIn,
        profileUpdate,
        user,
        setUser,
        logOut,
        loginWithGoogle,
        loading,
        getIdByViewDetailsButton
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;