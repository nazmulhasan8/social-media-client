import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllPaidProducts from "../../Pages/Dashboard/AllPaidProducts/AllPaidProducts";
import AllSellers from "../../Pages/Dashboard/AllUsers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageProducts from "../../Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedProduct from "../../Pages/Dashboard/ReportedProduct/ReportedProduct";
import AllAdvertise from "../../Pages/Home/Categories/AllAdvertise";
import AllCategories from "../../Pages/Home/Categories/AllCategories";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AllProducts from "../../Pages/ProductAvailable/AllProducts";

import Details from "../../Pages/ProductAvailable/Details";
import Profile from "../../Pages/Profile/Profile";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
            {
                    path:'/', 
                    element:  <PrivateRoute><AllCategories></AllCategories></PrivateRoute>
                  },
                  {
                  path:'/', 
                  element:<PrivateRoute><AllAdvertise></AllAdvertise> </PrivateRoute> 
                },
                  {
                    path: '/Messages',
                    element: <Blog></Blog>
                },  
                {
                    path: '/About',
                    element: <PrivateRoute><Profile></Profile></PrivateRoute>
                },
                
                {
                    path: '/checkout/:id',
                    element: <PrivateRoute><Details></Details></PrivateRoute>,
                    loader: ({params})=> fetch(`https://social-media-server-seven.vercel.app/allProducts2/${params.id}`)
                  },
           
            {
                path: '/:id',
                element:<AllProducts></AllProducts>,
                loader: ({params}) => fetch(`https://social-media-server-seven.vercel.app/allProducts/${params.id}`)
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
           
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            
            {
                path: '/dashboard/reportedproducts',
                element: <AdminRoute><ReportedProduct></ReportedProduct></AdminRoute>
            },
            
           
            
            
            {
                path: '/dashboard/manageproducts',
                element: <PrivateRoute><ManageProducts></ManageProducts></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element:<PrivateRoute> <Payment></Payment></PrivateRoute>,
                loader: ({params}) => fetch(`https://social-media-server-seven.vercel.app/bookingsProduct/${params.id}`)
            },
        ]
    }
])

export default router;