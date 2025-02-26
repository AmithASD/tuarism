import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Logo from "../../assets/img/home/result.png";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ResponsiveAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // const navItems = [
  //   "Home",
  //   "All Products",
  //   "Services",
  //   "About Us",
  //   "Outlets",
  //   "Contacts",
  // ];
  const mainMenuItems = [
    "Home",
    "About Us",
    "Outlets",
    "Contacts",
    "FAQ",
    "Catering",
    "Christmas",
    "New Year",
  ];
  const categoryItems = ["Products"];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  // const handleProductsClick = (category) => {
  //   navigate("/products");
  // };
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
    handleMouseLeave();
  };

  const HandleServiceClick = () => {
    navigate('/services');
  }

  const HandleAboutUsClick = () => {
    navigate('/about');
  }

  const HandleContactClick = () => {
    navigate('/contact-us')
  }

  return (
    <div>
      <AppBar position="fixed" style={{ background: "white", color: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "100px", height: "70px" }}
            />
          </Typography>
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 1 }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="login"
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="shopping cart"
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Button sx={{ color: "black" }} onClick={handleHomeClick}>
              Home
            </Button>
            <Button
              sx={{ color: "black" }}
              // onClick={handleProductsClick}
              onMouseEnter={handleMouseEnter}
            >
              TOURS 
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMouseLeave}
              MenuListProps={{ onMouseLeave: handleMouseLeave }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              {/* <MenuItem onClick={() => handleProductsClick("all")}>
                All
              </MenuItem> */}
              <MenuItem onClick={() => handleCategoryClick("all")}>
                All
              </MenuItem>
              <MenuItem onClick={() => handleCategoryClick("lunch")}>
                Swimming
              </MenuItem>
              <MenuItem onClick={() => handleCategoryClick("dinner")}>
                Hike
              </MenuItem>
              <MenuItem onClick={() => handleCategoryClick("snacks")}>
                Boat
              </MenuItem>
            </Menu>
            <Button sx={{ color: "black" }}
              onClick={HandleServiceClick}
            >PACKAGES</Button>
            {/* <Button sx={{ color: "black" }}>Outlets</Button> */}
            <Button sx={{ color: "black" }} onClick={HandleAboutUsClick}>About Us</Button>
            <Button sx={{ color: "black" }} onClick={HandleContactClick}>Contact</Button>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="login"
            >
              <AccountCircleIcon />
            </IconButton>
            {/* <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="shopping cart"
            >
              <ShoppingCartIcon />
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: "250px" }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
          >
            <Tab label="Main Menu" />
            <Tab label="Category" />
          </Tabs>
          <List>
            {selectedTab === 0 &&
              mainMenuItems.map((item) => (
                <ListItem button key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            {selectedTab === 1 &&
              categoryItems.map((item) => (
                <ListItem button key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};
