import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SingUp from "./components/SingUp/SingUp";
import Book from "./components/Book/Book";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AuthProviders from "./components/AuthProviders/AuthProviders";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import SpecialServices from "./components/SpecialServices/SpecialServices";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/book",
        element: (
          <PrivateRoutes>
            <Book />
          </PrivateRoutes>
        ),
      },
      {
        path: "/specialservice",
        element: (
          <PrivateRoutes>
            <SpecialServices />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>
);
