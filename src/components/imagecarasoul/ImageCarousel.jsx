import { useEffect, useState } from 'react';
import { Box, IconButton , Typography, Button} from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import banner1 from '../../assets/img/banners/swiper1.jpg'
import banner2 from '../../assets/img/banners/swiper2.jpg'
import banner3 from '../../assets/img/banners/swiper3.jpg'

const slides = [
  { title: 'Slide 1', description: 'This is the first slide description.', image: banner1 },
  { title: 'Slide 2', description: 'This is the second slide description.', image: banner2 },
  { title: 'Slide 3', description: 'This is the third slide description.', image: banner3 },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  return (
    // <Box sx={{ position: 'relative',width:'100%', overflow: 'hidden' , height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' }}}>
    //   <Box sx={{
    //     display: 'flex',
    //     transition: 'transform 0.5s ease-in-out',
    //     transform: `translateX(-${currentIndex * 100}%)`
    //   }}>
    //     {images.map((image, index) => (
    //       <img key={index} src={image} alt={`Slide ${index}`} style={{ width: '100%', height: '70%' }} />
    //     ))}

    //   </Box>
    //   <IconButton
    //     onClick={handlePrev}
    //     sx={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', color:'white' }}
    //   >
    //     <ArrowBackIos />
    //   </IconButton>
    //   <IconButton
    //     onClick={handleNext}
    //     sx={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', color:'white'}}
    //   >
    //     <ArrowForwardIos />
    //   </IconButton>
    // </Box>

    <Box sx={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: { xs: 'auto', sm: '300px', md: '400px', lg: '500px' } , flexDirection: { xs: 'column', md: 'row'}}}>
      <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: '0', color: 'black' }}>
        <ArrowBackIos />
      </IconButton>
      <Box sx={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#F7EECC', borderRadius: '10px', overflow: 'hidden', padding: '20px', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center'}}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={slides[currentIndex].image} alt={`Slide ${currentIndex}`} style={{ width: '90%', height: '80%', borderRadius: '10px' }} />
        </Box>
        <Box sx={{ flex:0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: { xs: '90%', sm: '80%', md: '70%' }, 
  height: { xs: 'auto', sm: '300px', md: '400px' } }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>{slides[currentIndex].title}</Typography>
          <Typography variant="body1">{slides[currentIndex].description}</Typography>
          <Button sx={{backgroundColor:'lightblue'}}>BOOK NOW</Button>
        </Box>
      </Box>
      <IconButton onClick={handleNext} sx={{ position: 'absolute', right: '0', color: 'black' }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
