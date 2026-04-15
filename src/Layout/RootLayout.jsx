import React from "react";
import Navbar from "./../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
