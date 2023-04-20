import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Header />
      <ToastContainer></ToastContainer>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
