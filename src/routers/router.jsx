 
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/errorPage';
import Registration from '../Authentications/Registration';
import SignIn from '../Authentications/SignIn';
import Service from '../Pages/Service';
import PrivateRoute from "./PrivateRoute"
import DashBoard from '../Pages/DashBoard';
import AddService from '../Pages/AddService';
import AllServices from '../Pages/AllServices';
import ServiceDetails from '../Pages/ServiceDetails';
 
const router =createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
         errorElement:<ErrorPage></ErrorPage>,
         children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>
            },
            {
                path:"/service",
                element:<Service></Service>
            },
            {
                path:"/dashBoard",
                element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
           
                
            },
            {
                path:"/addService",
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:"/allServices",
                element:<AllServices></AllServices>
            },
            {
                path:'/serviceDetails',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            }
         ]
    }
])

export default router;