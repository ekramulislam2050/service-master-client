 
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
import BookedServices from '../Pages/BookedServices';
import ManageServices from '../Pages/ManageServices';
import EditService from '../Pages/EditService';
import DeleteService from '../Pages/DeleteService';
 
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
                path:'/serviceDetails/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:(params)=>fetch(`http://localhost:5173/serviceDetails/${params._id}`)
            },
            {
                path:"/bookedServices/:id",
                element:<BookedServices></BookedServices>,
                loader:(params)=>fetch(`http://localhost:5173/bookedServices/${params._id}`)
            },
            {
                path:"/manageServices",
                element:<PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path:"/editService/:id",
                element:<EditService></EditService>,
                loader:(params)=>fetch(`http://localhost:5173/editService/${params._id}`)
            },
            {
                path:"/deleteService/:id",
                element:<DeleteService></DeleteService>,
                loader:(params)=>fetch(`http://localhost:5173/deleteService/${params._id}`)
            }
         ]
    }
])

export default router;