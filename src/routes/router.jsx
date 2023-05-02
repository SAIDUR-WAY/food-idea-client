import {
     createBrowserRouter,
   } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Home/Home/Home";
import ChefDetails from "../pages/ChefDetails";

   const router = createBrowserRouter([
     {
          path: '/',
          element: <MainLayout></MainLayout>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/chefDetails',
                    element: <ChefDetails></ChefDetails>
               }
               
          ]
     }
   ])
   
   export default router;