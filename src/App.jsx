import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { SecondHome } from "./pages/home/SecondHome";
import { Products } from "./pages/products/Products";
import { AboutUs } from "./pages/about/AboutUs";
import { Services } from "./pages/services/Services";
import { ContactUs } from "./pages/contact/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecondHome />} />
          <Route path="/home" element={<Home />} />
          <Route path='/products/:category' element={<Products/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
