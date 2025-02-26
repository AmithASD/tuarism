import { Toolbar } from "@mui/material";
import { ResponsiveAppBar } from "../../components/appbar/AppBar";

export const ContactUs = () => {
  return (
    <>
      <div>
        <Toolbar/><Toolbar/>
        <ResponsiveAppBar />
        <form action="post">
            <label htmlFor="Your Name:"> Your Name : </label>
            <input></input>
            <label htmlFor="Your Name:"> Password :  </label>
            <input></input>
        </form>
      </div>
    </>
  );
}
