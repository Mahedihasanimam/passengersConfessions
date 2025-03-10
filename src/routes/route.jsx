import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import ProfileLayout from "../Layouts/profileLayout/profileLyout";
import BooksCollections from "../components/BooksCollections/BooksCollections";
import BookDetails from "../components/BooksCollections/BooksDetais/BookDetails";
import ConfessionList from "../components/profile/ConfessionList";
import MyForumList from "../components/profile/MyForumList";
import Myaffiliatelist from "../components/profile/Myaffiliatelist";
import RideShareStoriesList from "../components/profile/RideShareStoriesList";
import Notifications from "../components/profile/components/Notifications";
import FAQPage from "../pages/FAQ/FAQpage";
import AboutPage from "../pages/aboutpage/AboutPage";
import AffiliateProgram from "../pages/affiliate/AffiliateProgram";
import Becomeanaffiliate from "../pages/auth/Becomeanaffiliate";
import CreateNewPassword from "../pages/auth/CreateNewPassword";
import ForgetPassWord from "../pages/auth/ForgetPassword";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Verify from "../pages/auth/VerifyEmail";
import Confessions from "../pages/confessions/Confessions";
import ConfessionsDetails from "../pages/confessions/ConfessionsDetails";
import RideShareStories from "../pages/confessions/RideShareStories";
import AddAConfession from "../pages/confessions/addConfession/AddAConfession";
import ForumPage from "../pages/forum/ForumPage";
import Home from "../pages/home/Home";
import PaymentProducer from "../pages/paymentsProducer/PaymentProducer";
import ProductPurchase from "../pages/paymentsProducer/ProductPurchase";
import PodCast from "../pages/podCast/PodCast";
import PodCastDetails from "../pages/podCast/podCastDetails/PodCastDetails";
import TermsAndConditions from "../pages/temCondition/TermsAndConditions";
import ChageProfilePass from "./../pages/auth/ChageProfilePass";
import ProfileForm from "./../pages/profile/ProfileForm";
import PrivateRoute from "./PrivateRoute";

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
        path: "/affiliate-program",
        element: <AffiliateProgram />,
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
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentProducer />
          </PrivateRoute>
        ),
      },
      {
        path: "/product-payment/:id",
        element: (
          <PrivateRoute>
            <ProductPurchase />
          </PrivateRoute>
        ),
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
        path: "/RideShareStories",
        element: <RideShareStories />,
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
    element: (
      <PrivateRoute>
        <ProfileLayout />
      </PrivateRoute>
    ),
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
        path: "/profile/RideShareStoriesList",
        element: <RideShareStoriesList />,
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
      {
        path: "/profile/notifications",
        element: <Notifications />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);
