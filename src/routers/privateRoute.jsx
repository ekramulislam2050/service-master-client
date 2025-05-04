import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext)
        
        if(loading){
            return <p className='flex justify-center my-[100px] text-5xl'><span className="w-32 h-32 loading loading-spinner text-error"></span></p>
        }
        return user?children:<Navigate to={"/signIn"}></Navigate>
};

export default PrivateRoute;