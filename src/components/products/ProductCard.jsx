import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const ProductCard = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "200px",
            height: "auto",
            // border:'1px solid red',
            margin:2
          }}
        >
          <img src={item.image} alt={item.title} style={{width:'100%', height:'150px'}}></img>
          <h3>{item.title}</h3>
          <Typography variant="body2" color="text.secondary">
            ${item.price}
          </Typography>
          <Button style={{border:'1px solid red' , borderRadius:'20px', background:'#ffa07a'}}   variant="contained">Add To Cart</Button>
        </Box>
      ))}
    </>
  );
};

export default ProductCard;
