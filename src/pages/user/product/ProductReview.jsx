import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Grid,
  Button,
  Rating,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

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
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "12px",
        margin: "20px 0",
        backgroundColor: "transparent", // Making the background transparent
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backdropFilter: "blur(10px)", // Optional: Adds a nice blur effect to the background
        border: "1px solid lightgray", // Optional: A subtle border for better visibility
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
        <Button variant="contained" color="primary">
          Write your review
        </Button>
      </Box>
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
              {/* Ratings breakdown */}
              {["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"].map(
                (star, index) => (
                  <Box
                    className="rating-progress-bar"
                    key={index}
                  >
                    <Typography>{star}</Typography>
                    <Box
                    className="active-bar"
                    >
                      <Box
                        sx={{
                          width: `${Math.random() * 100}%`,
                          bgcolor: '#269846',
                          height: '100%',
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
                    <Typography className="username" variant="h6">{review.name}</Typography>
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
