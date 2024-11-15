import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/home/Home";
import BooksCollections from "../components/BooksCollections/BooksCollections";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <h1>About</h1>,
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>,
        },
        {
          path:'/allBooksCollections',
          element: <BooksCollections/>
        }
      ],
    },


    // atuthentication routes
    {
        path: "/auth/login",
        element: <h1>Login</h1>,
    },
    {
        path: "/register",
        element: <h1>Register</h1>,
    }
  ]);