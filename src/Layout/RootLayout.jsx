import React, { useEffect } from "react";
import Navbar from "./../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import { Outlet, useLocation } from "react-router";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home | KeenKeeper",
      "/timeline": "Timeline | KeenKeeper",
      "/stats": "Statistics | KeenKeeper",
    };

    if (location.pathname.startsWith("/friendDetail/")) {
      document.title = "Friend Profile | KeenKeeper";
    } else {
      document.title = titles[location.pathname] || "KeenKeeper";
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
