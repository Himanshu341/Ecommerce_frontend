import { Box} from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import fashionBanner from '../../../../assets/images/jpg/fashion-banner.jpg'
import fashionBanner2 from '../../../../assets/images/jpg/fashion-banner2.jpg'
import fashionBanner3 from '../../../../assets/images/jpg/fashion-banner3.jpg'

const HeroSection = () => {
  const products = [
    {
      name: "Mountain Trekking Boots",
      image: fashionBanner,
      price: "$68.71",
    },
    {
      name: "Casual Slip-On Sneakers",
      image: fashionBanner2,
      price: "$98.42",
    },
    {
      name: "Stylish Wedge Heels",
      image: fashionBanner3,
      price: "$77.32",
    },
  ];

  return (
    <section>
      <Box className="hero-container" sx={{ maxWidth: '100%', margin: '10px' }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          dynamicHeight
        >
          {products.map((product, index) => (
            <Box key={index} className="carousel-item" sx={{ position: "relative" }}>
              <img src={product.image} alt={product.name} className="product-image" />
              {/* <Box className="product-info">
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {product.price}
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>
                  Buy Now
                </Button>
              </Box> */}
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
};

export default HeroSection;
