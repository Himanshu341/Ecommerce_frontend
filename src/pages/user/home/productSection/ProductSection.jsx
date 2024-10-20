import React from "react";
import SportShoes from "../../../../assets/images/jpg/sport-shoes.jpg";
import RunningShoes from "../../../../assets/images/jpg/running-shoes.jpg";
import RubberShoes from "../../../../assets/images/jpg/rubber-shoes.jpg";
import ProductCard from "../../../../components/user/productCard/ProductCard";
import { Box, Typography } from "@mui/material";

const ProductSection = () => {
  const products = [
    {
      name: "Sport Shoes",
      image: SportShoes,
      price: 25.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Running Shoes",
      image: RunningShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Rubber Shoes",
      image: RubberShoes,
      price: 125.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Running Shoes",
      image: RunningShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Sport Shoes",
      image: SportShoes,
      price: 25.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Rubber Shoes",
      image: RubberShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Sport Shoes",
      image: SportShoes,
      price: 125.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Running Shoes",
      image: RunningShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Rubber Shoes",
      image: RubberShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Sport Shoes",
      image: SportShoes,
      price: 25.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Running Shoes",
      image: RunningShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Rubber Shoes",
      image: RubberShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Sport Shoes",
      image: SportShoes,
      price: 25.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Running Shoes",
      image: RunningShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
    {
      name: "Rubber Shoes",
      image: RubberShoes,
      price: 100.18,
      isOnSale: true,
      colors: ["#8E44AD", "#E74C3C", "#F1C40F"],
    },
  ];

  const items = products.map((product, index) => (
    <ProductCard product={product} />
  ));

  return (
    <>
      <section>
        <Box className="section-title">
          <Typography variant="h6" component="h6" className="name">
            Products for you
          </Typography>
        </Box>
        <Box className="product-section-container">{items}</Box>
      </section>
    </>
  );
};

export default ProductSection;
