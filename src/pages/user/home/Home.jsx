import React from "react";
import './home.css'
import HeroSection from "./heroSection/HeroSection";
import CategorySection from "./categorySection/CategorySection";
import ProductSection from "./productSection/ProductSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSection />
    </>
  );
};

export default Home;
