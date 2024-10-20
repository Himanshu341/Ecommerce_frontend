import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  TextField,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ShoppingCart.css"; // Import external CSS
import SportShoes from "../../../assets/images/jpg/sport-shoes.jpg";
import RunningShoes from "../../../assets/images/jpg/running-shoes.jpg";
import RubberShoes from "../../../assets/images/jpg/rubber-shoes.jpg";

const ShoppingCart = () => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chic Ballet Flats",
      price: 25.18,
      quantity: 1,
      image: SportShoes,
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 35.18,
      quantity: 1,
      image: RunningShoes,
    },
    {
      id: 3,
      name: "Sport Sneakers",
      price: 45.18,
      quantity: 1,
      image: RubberShoes,
    },
  ]);

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <Box className="cart-container container">
      <Box className="cart-section">
        <Typography variant="h6" className="cart-title">
          Shopping Cart ({cartItems.length} {cartItems.length > 1 ? "items" : "item"})
        </Typography>
        <Table aria-label="cart table" className="cart-table">
          <TableHead>
            <TableRow>
              <TableCell width="40%">Product</TableCell>
              <TableCell width="20%" align="center">Quantity</TableCell>
              <TableCell width="20%" align="center">Total Price</TableCell>
              <TableCell width="20%" align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Box className="cart-product-details">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-product-image"
                    />
                    <Box className="cart-product-info">
                      <Typography className="cart-product-name">
                        {item.name}
                      </Typography>
                      <Typography  className="cart-product-size">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box className="cart-product-quantity">
                    <IconButton
                      size="small"
                      
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      <RemoveIcon className="cart-minus-icon" />
                    </IconButton>
                    <Box
                      // size="small"
                      // value={item.quantity}
                      className="cart-quantity-input"
                      // readOnly
                    >{item.quantity}</Box>
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      <AddIcon className="cart-plus-icon" />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Typography>
                  ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    className="cart-delete-icon"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className="cart-continue-shopping" startIcon={<span>&larr;</span>}>
          Continue shopping
        </Button>
      </Box>

      {/* Right: Order Summary Section */}
      <Box className="cart-order-summary-section" elevation={2}>
        <Typography variant="h6" className="cart-order-summary-title">
          Order summary
        </Typography>
        <Box className="cart-order-summary-details">
          <Box className="cart-summary-row">
            <Typography>Sub total</Typography>
            <Typography>${calculateTotal()}</Typography>
          </Box>
          <Box className="cart-summary-row">
            <Typography>Discount</Typography>
            <Typography>-</Typography>
          </Box>
          <Box className="cart-summary-row">
            <Typography>Shipping</Typography>
            <Typography>Free</Typography>
          </Box>
        </Box>
        <Box className="cart-summary-total">
          <Typography>Total</Typography>
          <Typography className="cart-total-price">${calculateTotal()}</Typography>
        </Box>
        <Typography variant="caption">(Inculding GST)</Typography>
        {/* <Box className="cart-apply-discount">
          <TextField
            size="small"
            placeholder="DISCOUNT5"
            className="cart-discount-input"
          />
          <Button variant="outlined" className="cart-apply-button">
            Apply
          </Button>
        </Box> */}
        <Button className="cart-checkout-button" variant="contained">
          Check out
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
