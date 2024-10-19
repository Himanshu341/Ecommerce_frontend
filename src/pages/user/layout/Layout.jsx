import React, { useState, useEffect } from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import Footer from "../../../components/user/footer/Footer";
import { Outlet } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, IconButton } from "@mui/material";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Box className="layout-body-container">
        <Outlet />
        {showButton && (
          <IconButton
            className="go-to-top-button"
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              backgroundColor: "#1976d2",
              color: "#fff",
              '&:hover': {
                backgroundColor: "#1565c0",
              },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
