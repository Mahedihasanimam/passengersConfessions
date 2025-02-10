import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import ProfileLayout from "../Layouts/profileLayout/profileLyout";
import BooksCollections from "../components/BooksCollections/BooksCollections";
import BookDetails from "../components/BooksCollections/BooksDetais/BookDetails";
import ConfessionList from "../components/profile/ConfessionList";
import MyForumList from "../components/profile/MyForumList";
import Myaffiliatelist from "../components/profile/Myaffiliatelist";
import FAQPage from "../pages/FAQ/FAQpage";
import AboutPage from "../pages/aboutpage/AboutPage";
import Becomeanaffiliate from "../pages/auth/Becomeanaffiliate";
import CreateNewPassword from "../pages/auth/CreateNewPassword";
import ForgetPassWord from "../pages/auth/ForgetPassword";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Verify from "../pages/auth/VerifyEmail";
import Confessions from "../pages/confessions/Confessions";
import ConfessionsDetails from "../pages/confessions/ConfessionsDetails";
import AddAConfession from "../pages/confessions/addConfession/AddAConfession";
import ForumPage from "../pages/forum/ForumPage";
import Home from "../pages/home/Home";
import PaymentProducer from "../pages/paymentsProducer/PaymentProducer";
import PodCast from "../pages/podCast/PodCast";
import PodCastDetails from "../pages/podCast/podCastDetails/PodCastDetails";
import TermsAndConditions from "../pages/temCondition/TermsAndConditions";
import ChageProfilePass from "./../pages/auth/ChageProfilePass";
import ProfileForm from "./../pages/profile/ProfileForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/contact",
      //   element: <ContactPage />,
      // },

      {
        path: "/allBooksCollections",
        element: <BooksCollections />,
      },
      {
        path: "/booksDetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/booksDetails/:id/payment",
        element: <PaymentProducer />,
      },
      {
        path: "/confessionDetails/:id",
        element: <ConfessionsDetails />,
      },
      {
        path: "/Confession",
        element: <Confessions />,
      },
      {
        path: "/addConfession",
        element: <AddAConfession />,
      },
      {
        path: "/Podcast",
        element: <PodCast />,
      },
      {
        path: "/PodCastDetails/:id",
        element: <PodCastDetails />,
      },
      {
        path: "/Forum",
        element: <ForumPage />,
      },
      {
        path: "/FAQ",
        element: <FAQPage />,
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/aboutus",
        element: <AboutPage />,
      },
    ],
  },

  // atuthentication routes
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/verify-email",
    element: <Verify />,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassWord />,
  },
  {
    path: "/create-newPassword",
    element: <CreateNewPassword />,
  },
  {
    path: "/auth/Becomeanaffiliate",
    element: <Becomeanaffiliate />,
  },

  // profile routes -----------
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "/profile",
        element: <ProfileForm />,
      },
      {
        path: "/profile/confessionsList",
        element: <ConfessionList />,
      },
      {
        path: "/profile/affiliates",
        element: <Myaffiliatelist />,
      },
      {
        path: "/profile/myfoums-list",
        element: <MyForumList />,
      },
      {
        path: "/profile/change-password",
        element: <ChageProfilePass />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);
