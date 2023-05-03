import {
     createBrowserRouter,
   } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Home/Home/Home";
import ChefDetails from "../pages/ChefDetails";
import ErrorPage from "../errorPage/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Terms from "../pages/Terms";
import PrivateRoutes from "./PrivateRoutes";

   const router = createBrowserRouter([
     {
          path: '/',
          element: <MainLayout></MainLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/chefs/:id',
                    element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                    loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
                    
                    
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
                    path: '/terms',
                    element: <Terms></Terms>
               }
               
          ]
     }
   ])
   
   export default router;