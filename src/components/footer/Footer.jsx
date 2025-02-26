import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram } from "@mui/icons-material";
import Logo from '../../assets/img/home/result.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Box sx={{ flexGrow: 1}} style={{background:'rgb(243, 243, 236)'}}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={10} style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <img src={Logo} style={{width:'150px', height:'130px'}}/>
                <p style={{textAlign:'left'}}>Thawthisa Food & Beverages (Pvt) Ltd</p>
                <p style={{textAlign:'left'}}>No 12, Park road</p>
                <p style={{textAlign:'left'}}>Colombo 05</p>
                <p style={{textAlign:'left'}}>Sri Lanka</p>
            </Grid>
            <Grid item xs={6}>
              <h4>Company</h4>
              <p>About</p>
              <p>Outlet</p>
              <p>Contacts</p>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: "25px" }}></Box>
        <Box sx={{ flexGrow: 1}} style={{background:' #282727'}}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={10} style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
                <p>Copyright © 2024 Thawthisa Food & Beverages All Rights Reserved</p>
            </Grid>
            <Grid item xs={6} style={{display:'flex',gap:'30px', flexDirection:'row', color:'white'}}>
              <p><Facebook/></p>
              <p><Instagram/></p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
