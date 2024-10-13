import React from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import Footer from "../../../components/user/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
