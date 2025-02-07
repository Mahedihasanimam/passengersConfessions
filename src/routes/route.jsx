import AboutPage from "../pages/aboutpage/AboutPage";
import AddAConfession from "../pages/confessions/addConfession/AddAConfession";
import Becomeanaffiliate from "../pages/auth/Becomeanaffiliate";
import BookDetails from "../components/BooksCollections/BooksDetais/BookDetails";
import BooksCollections from "../components/BooksCollections/BooksCollections";
import ChageProfilePass from "./../pages/auth/ChageProfilePass";
import ConfessionList from "../components/profile/ConfessionList";
import Confessions from "../pages/confessions/Confessions";
import ConfessionsDetails from "../pages/confessions/ConfessionsDetails";
import ContactPage from "../pages/contact/Contactus";
import CreateNewPassword from "../pages/auth/CreateNewPassword";
import FAQPage from "../pages/FAQ/FAQpage";
import ForgetPassWord from "../pages/auth/ForgetPassword";
import ForumPage from "../pages/forum/ForumPage";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import MyForumList from "../components/profile/MyForumList";
import Myaffiliatelist from "../components/profile/Myaffiliatelist";
import PaymentProducer from "../pages/paymentsProducer/PaymentProducer";
import PodCast from "../pages/podCast/PodCast";
import PodCastDetails from "../pages/podCast/podCastDetails/PodCastDetails";
import ProfileForm from "./../pages/profile/ProfileForm";
import ProfileLayout from "../Layouts/profileLayout/profileLyout";
import Signup from "../pages/auth/Signup";
import TermsAndConditions from "../pages/temCondition/TermsAndConditions";
import Verify from "../pages/auth/VerifyEmail";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

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
