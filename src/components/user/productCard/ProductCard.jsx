import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import "./ProductCard.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      {/* Image Section */}
      <Box className="product-card-image-container">
        <Box className="product-img">
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            className="product-card-media"
          />
        </Box>
        {/* Sale Tag */}
        {product.isOnSale && (
          <Chip label="SALE" color="error" className="sale-chip" />
        )}
      </Box>

      {/* Product Information */}
      <CardContent className="product-card-content">
        <Typography variant="h6" className="product-name">
          {product.name}
        </Typography>

        <Box className="product-info">
          {/* Price */}
          <Typography className="product-price">
            ${product.price.toFixed(2)}
          </Typography>

          <Button className="add-to-cart-btn">
            Buy Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
