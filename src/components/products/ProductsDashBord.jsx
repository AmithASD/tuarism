import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import ProductCard from "./productCard";
import img1 from '../../assets/img/banners/swiper1.jpg'

// Styles
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f1f1f1",
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(2),
  width: "50%",
  padding: "0 10px",
}));

const ItemContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "calc(100vh - 64px)",
  padding: "20px",
  flexGrow: 1,
});

const Sidebar = styled(Drawer)({
  width: "250px",
  marginTop:'80px',
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "250px",
    height: "90vh", 
    marginTop:'80px',
  },
});

// Mock data
const categories = ["All Products", "Lunch", "Cake", "Breakfast"];
const cakeSubcategories = ["Birthday", "Normal"];
const products = [
  { title: "Cake 1", price: 10, image:img1, category: "Birthday" },
  { title: "Cake 2", price: 15, image:img1, category: "Normal" },
  { title: "Lunch 1", price: 20, image:img1 , category: "Lunch" },
  { title: "Cake 1", price: 10, image: img1, category: "Birthday" },
  { title: "Cake 2", price: 15, image: img1, category: "Normal" },
  { title: "Lunch 1", price: 20, image: img1, category: "Lunch" },
  { title: "Cake 1", price: 10, image: img1, category: "Birthday" },
  { title: "Cake 2", price: 15, image: img1, category: "Normal" },
  { title: "Lunch 1", price: 20, image: img1, category: "Lunch" },
  {
    title: "Breakfast 1",
    price: 5,
    image: img1,
    category: "Breakfast",
  },
  {
    title: "Breakfast 1",
    price: 5,
    image: img1,
    category: "Breakfast",
  },
  {
    title: "Breakfast 1",
    price: 5,
    image: img1,
    category: "Breakfast",
  },
  { title: "Cake 1", price: 10, image:img1, category: "Birthday" },
  { title: "Cake 2", price: 15, image: img1, category: "Normal" },
  { title: "Lunch 1", price: 20, image:img1, category: "Lunch" },
  { title: "Cake 1", price: 10, image: img1, category: "Birthday" },
  { title: "Cake 2", price: 15, image: img1, category: "Normal" },
  { title: "Lunch 1", price: 20, image: img1, category: "Lunch" },
  { title: "Cake 1", price: 10, image:img1, category: "Birthday" },
  { title: "Cake 2", price: 15, image: img1, category: "Normal" },
  { title: "Lunch 1", price: 20, image:img1, category: "Lunch" },
  {
    title: "Breakfast 1",
    price: 5,
    image: img1,
    category: "Breakfast",
  },
  {
    title: "Breakfast 1",
    price: 5,
    image: img1,
    category: "Breakfast",
  },
  {
    title: "Breakfast 1",
    price: 5,
    image: img1,
    category: "Breakfast",
  },
];

const ProductsDashBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoryClick = (category) => {
    if (category === "Cake") {
      setAnchorEl(true);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedCategory(subcategory);
    setAnchorEl(null);
  };

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div style={{maxHeight:'100%'}}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar variant="permanent" anchor="left">
          <List>
            {categories.map((category) => (
              <ListItem
                button
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
          {selectedCategory === "Cake" && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {cakeSubcategories.map((subcategory) => (
                <MenuItem
                  key={subcategory}
                  onClick={() => handleSubcategoryClick(subcategory)}
                >
                  {subcategory}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Sidebar>

        {/* Content */}
        <Box
          component="main"
          sx={{
            marginLeft: "250px",
            flexGrow: 1,
            height: "100%", 
            overflowY: "auto",
          }}
        >
          <ItemContainer>
              <ProductCard items={filteredProducts} />
          </ItemContainer>
        </Box>
      </Box>
    </div>
  );
};

export default ProductsDashBoard;
