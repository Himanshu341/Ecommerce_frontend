import React from "react";
import { Typography, Box } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import sportShoes from "../../../../assets/images/jpg/sport-shoes.jpg";

const CategorySection = () => {
  const product = {
    name: "Men's Footwear",
    image: sportShoes,
    tag: "NEW",
  };

  const items = [...Array(5)].map((_, index) => (
    <Box key={index} className="category-card">
      <Box className="category-card-content">
        <img src={product.image} alt="category" />
        <Typography className="category-name">{product.name}</Typography>
      </Box>
    </Box>
  ));

  return (
    <section>
    <Box className="section-title">
      <Typography variant="h6" component="h6" className="name">Category</Typography>
    </Box>
    <Box className="category-card-container">
      {/* <Carousel 
        showArrows={true} 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        // interval={3000} 
        swipeable 
        emulateTouch 
        dynamicHeight={false} 
        showStatus={false} 
        centerMode={true} // Center the slides
        centerSlidePercentage={10} // Show 3 slides (33.33% each)
        responsive={true}
      >
        {items}
      </Carousel> */}
      {items}
    </Box>
    </section>
  );
};

export default CategorySection;
