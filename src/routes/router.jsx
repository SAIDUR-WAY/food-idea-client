import {
     createBrowserRouter,
   } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Home/Home/Home";
import ChefDetails from "../pages/ChefDetails";
import ErrorPage from "../errorPage/ErrorPage";

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
                    element: <ChefDetails></ChefDetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
                    
                    
               }
               
          ]
     }
   ])
   
   export default router;