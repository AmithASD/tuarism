import React from "react";
import Box from "@mui/material/Box";
import PopularItemCarousal from "./PopularItemCarousal";

const PopularItems = () => {
  return (
    <div>
      <Box
        component="section"
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{fontSize:'40px'}}>Popular Items</h1>
        <Box sx={{ width: "100%", background:'#FFFAE5'}}>
          <PopularItemCarousal />
        </Box>
        <h1 style={{fontSize:'40px'}}>Dinner Items</h1>
        <Box sx={{ width: "100%"}}>
          <PopularItemCarousal />
        </Box>
        <h1 style={{fontSize:'40px'}}>Lunch Items</h1>
        <Box sx={{ width: "100%" , background:'#FFFAE5'}}>
          <PopularItemCarousal />
        </Box>
        <h1 style={{fontSize:'40px'}}>Savoury Items</h1>
        <Box sx={{ width: "100%"}}>
          <PopularItemCarousal />
        </Box>
        <h1 style={{fontSize:'40px'}}>Sweet Items</h1>
        <Box sx={{ width: "100%" , background:'#FFFAE5'}}>
          <PopularItemCarousal />
        </Box>
        <h1 style={{fontSize:'40px'}}>Cake Items</h1>
        <Box sx={{ width: "100%"}}>
          <PopularItemCarousal />
        </Box>
      </Box>
    </div>
  );
};

export default PopularItems;
