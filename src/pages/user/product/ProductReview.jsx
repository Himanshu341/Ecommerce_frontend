import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Grid,
  Button,
  Rating,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Divider,
  IconButton,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloseIcon from "@mui/icons-material/Close";

const reviews = [
  {
    name: "Jayvion Simon",
    date: "19 Oct 2024",
    avatarUrl: "https://example.com/avatar1.jpg", // Replace with real URL
    rating: 4,
    verified: true,
    reviewText:
      "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
    likes: 123,
    dislikes: 34,
  },
  {
    name: "Lucian Obrien",
    date: "19 Oct 2024",
    avatarUrl: "https://example.com/avatar2.jpg", // Replace with real URL
    rating: 4,
    verified: true,
    reviewText:
      "She eagerly opened the gift, her eyes sparkling with excitement.",
    likes: 90,
    dislikes: 12,
  },
];

const ProductReview = () => {
  const [open, setOpen] = useState(false); // State to manage the modal visibility
  const [rating, setRating] = useState(0); // State to manage the star rating
  const [comment, setComment] = useState(""); // State to manage the comment

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitReview = () => {
    // Handle form submission and add the new review
    console.log("Review submitted", { rating, comment });
    setOpen(false); // Close the modal after submission
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "12px",
        margin: "20px 0",
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        border: "1px solid lightgray",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="div">
          Average rating
        </Typography>
        <Button className="add-review-btn" onClick={handleClickOpen}>
          <EditNoteIcon /> Add review
        </Button>
      </Box>

      {/* Improved Modal for adding a review */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
            padding: 2,
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Add a Review
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ py: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <DialogContentText>
            We would love to hear your thoughts! Please provide a rating and share your experience with the product.
          </DialogContentText>
          <TextField
            label="Your Review"
            placeholder="Write your review here..."
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
            sx={{ borderRadius: "8px", backgroundColor: "#f9f9f9" }}
          />
          <Box>
            <Typography sx={{ mb: 1, fontWeight: "bold" }}>Rating</Typography>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              precision={0.5}
              size="large"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#FFD700", // Gold color for stars
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              color: "#f44336",
              borderColor: "#f44336",
              "&:hover": {
                backgroundColor: "#f44336",
                color: "#fff",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmitReview}
            sx={{
              backgroundColor: "#269846",
              "&:hover": {
                backgroundColor: "#1e7a3b",
              },
            }}
          >
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>

      {/* Rest of your product review content */}
      <Paper
        elevation={0}
        sx={{
          padding: 3,
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h2"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                3.7/5
              </Typography>
              <Rating value={3.7} precision={0.5} readOnly />
            </Box>
            <Typography variant="body2" color="textSecondary">
              (9.12k reviews)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="all-rating-stars">
              {["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"].map(
                (star, index) => (
                  <Box className="rating-progress-bar" key={index}>
                    <Typography>{star}</Typography>
                    <Box className="active-bar">
                      <Box
                        sx={{
                          width: `${Math.random() * 100}%`,
                          bgcolor: "#269846",
                          height: "100%",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                    <Typography>{Math.floor(Math.random() * 10)}k</Typography>
                  </Box>
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box mt={3}>
        {reviews.map((review, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              padding: 3,
              mb: 2,
              backgroundColor: "white",
              border: "0.5px solid lightgray",
            }}
          >
            <Box className="feedback-user-rating">
              <Box className="feedback-user-detail">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={review.avatarUrl}
                    alt={review.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography className="username" variant="h6">
                      {review.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {review.date}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Rating className="rating-star" value={review.rating} readOnly />
                  {review.verified && (
                    <Typography variant="body2" color="green">
                      Verified purchase
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box className="user-comments">
                <Typography className="comment" variant="body2" sx={{ mt: 2 }}>
                  {review.reviewText}
                </Typography>
              </Box>
              <Box className="review-like-dislike">
                <ThumbUpAltIcon className="like-icon" />
                <Typography variant="body2" sx={{ mr: 2 }}>
                  {review.likes}
                </Typography>
                <ThumbDownAltIcon className="like-icon" />
                <Typography variant="body2">{review.dislikes}</Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ProductReview;
