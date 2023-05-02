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
                    path: '/chefs/:id',
                    element: <ChefDetails></ChefDetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
                    
                    
               }
               
          ]
     }
   ])
   
   export default router;