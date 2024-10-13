import React from "react";
import "./footer.css";
import { Box, IconButton, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="footer-content">
        <Box className="footer-left">
          <Box className="details">
            <IconButton className="footer-icon">
              <LocationOnIcon />
            </IconButton>
            <Typography>7/402 , Raj Appartment, Nr.AnandNagar, Ahemedabad-380015</Typography>
          </Box>
          <Box className="details">
            <IconButton className="footer-icon">
              <MailIcon />
            </IconButton>
            <Typography>himanshudabhi012@gmail.com</Typography>
          </Box>
          <Box className="details">
            <IconButton className="footer-icon">
              <LocalPhoneIcon />
            </IconButton>
            <Typography>+91 9016990068</Typography>
          </Box>
        </Box>
        <Box className="footer-right">
        <ul>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
        </Box>
      </Box>
      <Box className="footer-copyright">
        <Typography className="tagline">Created By Himanshu Dabhi</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
