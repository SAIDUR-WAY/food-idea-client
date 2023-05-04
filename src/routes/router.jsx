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
import ItalianRecipe from "../pages/Recipe/ItalianRecipe";
import Blog from "../pages/Blog/Blog";

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
                    loader: ({params}) => fetch(` https://food-idea-server-side-saidur-way.vercel.app/chefs/${params.id}`)
                    
                    
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
               },
               {
                    path:'/recipe',
                    element: <ItalianRecipe></ItalianRecipe>

               },
               {
                    path: '/blog',
                    element: <Blog></Blog>,
               }
               
          ]
     }
   ])
   
   export default router;