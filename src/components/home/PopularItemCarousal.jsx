import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import banner1 from "../../assets/img/banners/swiper1.jpg";
import banner2 from "../../assets/img/banners/swiper2.jpg";
import banner3 from "../../assets/img/banners/swiper3.jpg";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const img1 =
  "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286";

const images = [
  banner1,
  banner2,
  banner3,
  banner1,
  banner2, //5
  banner3,
  banner1,
  banner2,
  banner3,
  banner1, //5
  banner2,
  banner3,
  img1,
];

const PopularItemCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPageDesktop = 5;
  const itemsPerPageMobile = 3;

  const handleNext = () => {
    const nextIndex = (currentIndex + itemsPerPageDesktop) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - itemsPerPageDesktop + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const displayImagesDesktop = images
    .slice(currentIndex, currentIndex + itemsPerPageDesktop)
    .concat(
      images.slice(
        0,
        Math.max(0, currentIndex + itemsPerPageDesktop - images.length)
      )
    );

  const displayImagesMobile = images
    .slice(currentIndex, currentIndex + itemsPerPageMobile)
    .concat(
      images.slice(
        0,
        Math.max(0, currentIndex + itemsPerPageMobile - images.length)
      )
    );

  const isNextDisabledDesktop =
    currentIndex + itemsPerPageDesktop >= images.length;
  const isNextDisabledMobile =
    currentIndex + itemsPerPageMobile >= images.length;
  const isPrevDisabled = currentIndex === 0;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 0",
        }}
      >
        {/* For Desktop View */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: "90%",
            maxWidth: "90%",
            gap: "20px",
          }}
        >
          {displayImagesDesktop.map((image, index) => (
            <Card
              sx={{ width: "30%", maxWidth: "30%", boxShadow: "lg" }}
              key={index}
            >
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img src={image} loading="lazy" alt="" />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="body-xs">Thaw Thisa Food</Typography>
                <Link
                  href="#product-card"
                  color="neutral"
                  textColor="text.primary"
                  overlay
                  endDecorator={<ArrowOutwardIcon />}
                  sx={{ fontWeight: "md" }}
                >
                  Super Rockez A400
                </Link>
                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: "xl" }}
                  endDecorator={
                    <Chip
                      component="span"
                      size="sm"
                      variant="soft"
                      color="success"
                    >
                      Lowest price
                    </Chip>
                  }
                >
                  1500 LKR
                </Typography>
                <Typography level="body-sm">
                  (Only <b>7</b> left in stock!)
                </Typography>
              </CardContent>
              <CardOverflow>
                <Button variant="solid" color="danger" size="lg">
                  Add to cart
                </Button>
              </CardOverflow>
            </Card>
          ))}
        </Box>

        {/* For Mobile View */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
        >
          {displayImagesMobile.map((image, index) => (
            <Card
              sx={{ width: "33.33%", maxWidth: "33.33%", boxShadow: "lg" }}
              key={index}
            >
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img src={image} loading="lazy" alt="" />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="body-xs">Thaw Thisa Food</Typography>
                <Link
                  href="#product-card"
                  color="neutral"
                  textColor="text.primary"
                  overlay
                  endDecorator={<ArrowOutwardIcon />}
                  sx={{ fontWeight: "md" }}
                >
                  Super Rockez A400
                </Link>
                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: "xl" }}
                  endDecorator={
                    <Chip
                      component="span"
                      size="sm"
                      variant="soft"
                      color="success"
                    >
                      Lowest price
                    </Chip>
                  }
                >
                  1500 LKR
                </Typography>
                <Typography level="body-sm">
                  (Only <b>7</b> left in stock!)
                </Typography>
              </CardContent>
              <CardOverflow>
                <Button variant="solid" color="danger" size="lg">
                  Add to cart
                </Button>
              </CardOverflow>
            </Card>
          ))}
        </Box>
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          color: "red",
        }}
        disabled={isPrevDisabled}
      >
        <ArrowBackIos />
      </IconButton>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            color: "red",
          }}
          disabled={isNextDisabledDesktop}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <IconButton
          onClick={handleNext} 
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            color: "red",
          }}
          disabled={isNextDisabledMobile}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PopularItemCarousal;
