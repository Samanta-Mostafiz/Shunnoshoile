import { createBrowserRouter } from "react-router-dom";
import AdminPages from "../Admin/AdminPages/AdminPages";
import AllUser from "../Admin/AdminPages/AllUser";
import DiscountProduct from "../Admin/AdminPages/DiscountProduct";
import NewFurnitureAdd from "../Admin/AdminPages/NewFurnitureAdd";
import AdminRoute from "../Admin/AdminRoute";
import ErrorPage from "../Error/ErrorPage";
import AdminLayout from "../Layout/adminLayout/AdminLayout";
import Main from "../Layout/Main";
import AddCard from "../Pages/AddCard/AddCard";
import AllProduct from "../Pages/Collections/AllProduct/AllProduct";
import CetagoryDaseData from "../Pages/Collections/Cetagory Base Data/CetagoryDaseData";
import DetailsProduct from "../Pages/Collections/Details Data/DetailsProduct";
import UpcomingProduct from "../Pages/Collections/Upcoming product/UpcomingProduct";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Pement from "../Pages/Pement Method/Payment";
import PrivetRoute from "../Pages/PrivetRoute/PrivetRoute";
import SingUp from "../Pages/Registrations/SingUp";
import LogIn from "../Pages/Registrations/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
      },
      {
        path: "/upcoming",
        element: <UpcomingProduct />,
      },
      {
        path: "/view_Product/:id",
        element: <DetailsProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/porduct-Details/${params?.id}`),
      },
      {
        path: "/cetagory-data/:id",
        element: <CetagoryDaseData />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cetagory/${params.id}`),
      },
      {
        path: "/add-Card",
        element: (
          <PrivetRoute>
            <AddCard />
          </PrivetRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: <Pement />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/payment/${params?.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/new_furniture_add",
        element: <NewFurnitureAdd></NewFurnitureAdd>,
      },
      {
        path: "/admin/discount_furniture",
        element: <DiscountProduct />,
      },
      {
        path: "/admin/alluser",
        element: <AllUser />,
      },
    ],
  },
]);

export default router;
