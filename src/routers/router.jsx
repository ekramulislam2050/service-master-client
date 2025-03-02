 
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/errorPage';
import Registration from '../Authentications/Registration';
import SignIn from '../Authentications/SignIn';
import Service from '../Pages/Service';
 
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
            }
         ]
    }
])

export default router;