import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import {   Link, useNavigate } from "react-router-dom";

import {toast, ToastContainer} from "react-toastify"


const SignIn = () => {
    
    const {signIn,setUser,loginWithGoogle}=useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
         const form = e.target 
          const email = form.email.value 
          const password = form.password.value 
        //   console.log(email,password)
        
        // signIn------------
        signIn(email,password)
        .then(data=>{
            const user = data.user
            // console.log(data.user)
            alert("signin successful")
            setUser(user)
            navigate("/")
        })
        .catch(error=>{
            const errorMsg = error.message
            toast.error(errorMsg, {
                position: "top-right",
                autoClose: 2000, // 3 seconds
              });
     
             
        
        })

      
         
    }
      // sign in with google--------------
      const handleClick = () =>{
        loginWithGoogle()
        navigate("/")
      }
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">

                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-bold">Sign in now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to={"/registration"} className="text-[15px] text-white bg-red-500 label-text-alt link link-hover indicator-item badge badge-secondary">Have an account?Click to Register</Link>
                            </label>
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">SignIn</button>
                           
                            <ToastContainer />
                        </div>
                        <button className=" btn btn-primary" onClick={handleClick}>SignIn with Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;