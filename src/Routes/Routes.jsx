import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BookAppointment from "../pages/BookAppointment/BookAppointment";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/bookAppointment',
                element: <PrivateRoute><BookAppointment></BookAppointment></PrivateRoute>

            }
        ]
    }
])

export default router;