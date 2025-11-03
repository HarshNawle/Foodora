import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import MainLayout from "./Layout/MainLayout";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import HeroSection from "./components/HeroSection";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import AdminRestaurant from "./admin/AdminRestaurant";
import AddMenu from "./admin/AddMenu";
import Order from "./admin/Order";
import SuccessPage from "./components/SuccessPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },

        {
          path: "/",
          element: <HeroSection />,
        },
        {
          path: "/search/:query",
          element: <SearchPage />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantDetail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/status",
          element: <SuccessPage />,
        },
        //ADMIN service from here
        {
          path: "/admin/restaurant",
          element: <AdminRestaurant />,
        },
        {
          path: "/admin/add-menu",
          element: <AddMenu />,
        },
        {
          path: "/admin/restaurant-orders",
          element: <Order />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/verify-email",
      element: <VerifyEmail />,
    },
  ]);

  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
