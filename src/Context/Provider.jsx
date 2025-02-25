import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase.config";

const Provider = ( {children}) => {
    // create user --------------
     const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
     }

    //  signIn user-------------
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // update profile-------------
     const profileUpdate  =(name,photoUrl)=>{
        return updateProfile(auth.currentUser,{
               displayName:name,
               photoURL:photoUrl
        })
     }
    const userInfo = {
        signUp,
        signIn,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;