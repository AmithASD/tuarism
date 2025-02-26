import { ResponsiveAppBar } from "../../components/appbar/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ProductsDashBoard from "../../components/products/ProductsDashBord";

export const Products = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Toolbar/>
      <ProductsDashBoard />
    </>
  );
};
