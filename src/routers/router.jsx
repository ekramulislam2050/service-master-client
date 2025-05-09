
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/errorPage';
import Registration from '../Authentications/Registration';
import SignIn from '../Authentications/SignIn';

import PrivateRoute from "./PrivateRoute"
import AddService from '../Pages/AddService';
import AllServices from '../Pages/AllServices';
import ServiceDetails from '../Pages/ServiceDetails';
import BookedServices from '../Pages/BookedServices';
import ManageServices from '../Pages/ManageServices';
import EditService from '../Pages/EditService';
import DeleteService from '../Pages/DeleteService';
import BookedServicesForUI from '../Pages/BookedServicesForUI';
import ServiceToDo from '../Pages/ServiceToDo';
import Pagination from '../Pages/Pagination';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            },


            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://service-master-server.vercel.app/allData/${params.id}`, { credentials: "include" })



            },
            {
                path: "/bookedServices/:id",
                element: <BookedServices></BookedServices>,
                loader: (params) => fetch(`https://service-master-server.vercel.app/bookedServices/${params._id}`)
            },
            {
                path: "/manageServices",
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path: "/editService/:id",
                element: <EditService></EditService>,
                loader: (params) => fetch(`https://service-master-server.vercel.app/editService/${params._id}`)
            },
            {
                path: "/deleteService/:id",
                element: <DeleteService></DeleteService>,
                loader: (params) => fetch(`https://service-master-server.vercel.app/deleteService/${params._id}`)
            },
            {
                path: "/bookedServicesForUI",
                element: <BookedServicesForUI></BookedServicesForUI>
            },
            {
                path: "/serviceToDo",
                element: <ServiceToDo></ServiceToDo>
            },
            {
                path: "/pagination",
                element: <Pagination></Pagination>
            }
        ]
    }
])

export default router;