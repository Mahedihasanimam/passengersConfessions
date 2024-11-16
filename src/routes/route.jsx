import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/home/Home";
import BooksCollections from "../components/BooksCollections/BooksCollections";
import Confessions from "../pages/confessions/Confessions";
import PodCast from "../pages/podCast/PodCast";
import ForumPage from "../pages/forum/ForumPage";
import BookDetails from "../components/BooksCollections/BooksDetais/BookDetails";
import PaymentProducer from "../pages/paymentsProducer/PaymentProducer";
import AddAConfession from "../pages/confessions/addConfession/AddAConfession";
import ConfessionsDetails from "../pages/confessions/ConfessionsDetails";
import PodCastDetails from "../pages/podCast/podCastDetails/PodCastDetails";

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
        },
        {
          path:'/booksDetails/:id',
          element: <BookDetails/>
        },
        {
          path:'/booksDetails/:id/payment',
          element: <PaymentProducer/>
        },
        {
          path:'/confessionDetails/:id',
          element: <ConfessionsDetails/>
        },
        {
          path:'/Confession',
          element: <Confessions/>
        },
        {
          path:'/addConfession',
          element: <AddAConfession/>
        },
        {
          path:'/Podcast',
          element: <PodCast/>
        },
        {
          path:'/PodCastDetails/:id',
          element: <PodCastDetails/>
        },
        {
          path:'/Forum',
          element: <ForumPage/>
        },
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