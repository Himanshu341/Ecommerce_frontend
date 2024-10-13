import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
import "./navbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
      <Box className="container">
        <Box className="navbar-main">
          <Box className="navbar-logo">Logo</Box>
          <Box className="navbar-menu">
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </Box>
          <Box className="navbar-right-content">
            <IconButton className="navbar-icon">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton className="navbar-icon">
              <NotificationsIcon />
            </IconButton>
            <Avatar className="Profile-Btn">P</Avatar>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
