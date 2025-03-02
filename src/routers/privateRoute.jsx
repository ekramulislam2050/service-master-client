import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const privateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext)
        
        if(loading){
            return <p>Loading......................</p>
        }
        return user?children:<Navigate to={"/signIn"}></Navigate>
};

export default privateRoute;