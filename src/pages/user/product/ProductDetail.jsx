import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Rating,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareIcon from "@mui/icons-material/Compare";
import ShareIcon from "@mui/icons-material/Share";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "./ProductDetail.css";
import RunningShoes from "../../../assets/images/jpg/running-shoes.jpg";
import ProductSpecifications from "./ProductSpecification";
import ProductReview from "./ProductReview";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(9);
  const [color, setColor] = useState("blue");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase" && quantity < product.availableQuantity) {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <>
      <Box className="container">
        <Box className="product-details">
          {/* Left section - Product Image */}
          <Box className="product-image-container">
            <img
              src={RunningShoes}
              alt={product.name}
              className="product-image"
            />
            {/* <Chip label="8/8" className="image-count-chip" /> */}
          </Box>

          {/* Right section - Product Info */}
          <Box className="product-info-container">
            <Chip label="NEW" color="primary" className="product-status-chip" />
            <Chip
              label="IN STOCK"
              color="success"
              className="product-stock-chip"
            />

            <Typography variant="h4" className="product-title">
              {product.name}
            </Typography>

            <Rating
              name="read-only"
              value={4.5}
              readOnly
              precision={0.5}
              className="product-rating"
            />
            <Typography className="product-review-count">
              (9.12k reviews)
            </Typography>

            <Typography variant="h5" className="product-price">
              ${product.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" className="product-description">
              {product.description}
            </Typography>

            {/* Color Selection */}
            {/* <Box className="product-color-section">
          <Typography className="product-option-label">Color</Typography>
          <Box className="product-color-options">
            {["blue", "pink"].map((clr) => (
              <Tooltip key={clr} title={clr} placement="top">
                <IconButton
                  onClick={() => handleColorChange(clr)}
                  className={`color-circle .${clr} ${
                    color === clr ? "selected" : ""
                  }`}
                >
                  {color === clr && (
                    <CheckCircleIcon className="color-check-icon" />
                  )}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box> */}

            {/* Size Selection */}
            <Box className="product-size-section" alignItems="center" gap={2}>
              <Typography className="product-option-label">Size</Typography>
              <Box>
                <FormControl className="size-select">
                  <Select
                    className="product-size-dropdown"
                    value={size}
                    onChange={handleSizeChange}
                  >
                    {[7, 8, 9, 10, 11].map((s) => (
                      <MenuItem key={s} value={s}>
                        {s}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* <Typography className="size-chart-link">Size chart</Typography> */}
              </Box>
            </Box>

            {/* Quantity Selection */}
            <Box className="product-quantity-section">
              <Typography className="product-option-label">Quantity</Typography>
              <Box>
                <Box className="quantity-selector">
                  <IconButton
                    className=""
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    {/* <RemoveCircleOutlineIcon /> */} -
                  </IconButton>
                  <TextField
                    value={quantity}
                    inputProps={{ readOnly: true }}
                    className="quantity-input"
                  />
                  <IconButton onClick={() => handleQuantityChange("increase")}>
                    {/* <AddCircleOutlineIcon />  */} +
                  </IconButton>
                </Box>
                {/* <Typography className="available-stock">
              Available: {product.availableQuantity}
            </Typography> */}
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box className="product-action-buttons">
              <Button
                variant="contained"
                color="warning"
                fullWidth
                startIcon={<AddShoppingCartIcon />}
              >
                Add to cart
              </Button>

              <Button fullWidth variant="contained" color="primary">
                Buy now
              </Button>
            </Box>

            {/* Links for Compare, Favorite, and Share */}
            <Box className="additional-links">
              <Button startIcon={<CompareIcon />}>Compare</Button>
              <Button startIcon={<FavoriteIcon />}>Favorite</Button>
              <Button startIcon={<ShareIcon />}>Share</Button>
            </Box>
          </Box>
        </Box>

        {/* New Section: Benefits */}
        <Box className="product-benefits">
          {/* 100% Original */}
          <Box className="benefit-item">
            <VerifiedIcon className="benefit-icon" />
            <Typography variant="h6" className="benefit-title">
              100% original
            </Typography>
            <Typography className="benefit-description">
              Chocolate bar candy canes ice cream toffee cookie halvah.
            </Typography>
          </Box>

          {/* 10 Days Replacement */}
          <Box className="benefit-item">
            <AccessTimeFilledIcon className="benefit-icon" />
            <Typography variant="h6" className="benefit-title">
              10 days replacement
            </Typography>
            <Typography className="benefit-description">
              Marshmallow biscuit donut dragée fruitcake wafer.
            </Typography>
          </Box>

          {/* Year Warranty */}
          <Box className="benefit-item">
            <VerifiedUserIcon className="benefit-icon" />
            <Typography variant="h6" className="benefit-title">
              Year warranty
            </Typography>
            <Typography className="benefit-description">
              Cotton candy gingerbread cake I love sugar sweet.
            </Typography>
          </Box>
        </Box>

        {/* Tabs Section */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="product details tabs"
          >
            <Tab label="Description" />
            <Tab label="Reviews (8)" />
          </Tabs>
        </Box>

        {activeTab == 0 && <ProductSpecifications />}
        {activeTab == 1 && <ProductReview />}
      </Box>
    </>
  );
};

export default ProductDetails;
