import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookAppointment from "../Pages/Appointment/bookAppointment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />, // Home page
      },
      {
        path: "bookAppointment",
        element: <BookAppointment/>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />, // 404 page
  },
]);
