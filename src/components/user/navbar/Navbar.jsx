import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
import "./navbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
      <Box className="container">
        <Box className="navbar-main">
          <Box className="navbar-logo" onClick={() => navigate('/')}>Logo</Box>
          <Box className="navbar-menu">
            <ul>
              <li onClick={() => navigate('/')}>Home</li>
              <li onClick={() => navigate('/product-detail')}>Product</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </Box>
          <Box className="navbar-right-content">
            <IconButton className="navbar-icon" onClick={() => navigate('/shopping-cart')}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton className="navbar-icon">
              <NotificationsIcon />
            </IconButton>
            <Avatar className="Profile-Btn" onClick={() => navigate('/login')}>P</Avatar>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
