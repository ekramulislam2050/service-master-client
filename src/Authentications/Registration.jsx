import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";


const Registration = () => {
    const navigate = useNavigate()
    const { signUp,profileUpdate } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const photoUrl = form.url.value
        // console.log(email, password, name, photoUrl)
        // sign in--------------------------
        signUp(email, password)
            .then(data => {
                // profile update--------------
                profileUpdate(name,photoUrl)
                .then(()=>{
            
                    // current user updated
                })
                .catch(()=>{
                    // error occurred
                })
                // console.log(data.user)
                Swal.fire({
                    title:"user successfully created and profile updated",
                    text: "You clicked the button!",
                    icon: "success"
                })
               
                navigate("/signIn")
            })
            .catch(error => {
                const errorMsg = error.message
                toast.error(errorMsg, {
                    position: "top-right",
                    autoClose: 2000
                })
            })
    }

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">

                <div className="w-full shadow-2xl card bg-base-100 shrink-0">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-bold text-center">Register now!</h1>
                        <div className="flex gap-5">
                            <div>
                                {/* name field-------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                                </div>
                                {/* email field------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                            </div>
                            <div>
                                {/* password field---------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                </div>
                                {/* photo url----------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" placeholder="PhotoURL" name="url" className="input input-bordered" required />

                                </div>

                            </div>

                        </div>
                        <label className="justify-center label">
                            <a href="#" className=" label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Register</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;