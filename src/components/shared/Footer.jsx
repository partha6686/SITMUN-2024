import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "-webkit-linear-gradient(30deg, rgba(78,159,61,1) 50%, #137300 50%)",
        p: 6,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems={"baseline"} justifyContent={"space-between"} width={"100%"}>
          <Grid item xs={12} sm={4}>
            <img src={Logo} alt="SITMUN" style={{ width: '50%'}}/>
            <Typography variant="h5" color="white" gutterBottom fontFamily={"Marcellus"}>
              About Us
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" fontFamily={"Nunito Sans"} fontWeight={600}>
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="white" gutterBottom fontFamily={"Marcellus"}>
              Contact Us
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" fontFamily={"Nunito Sans"} fontWeight={600}>
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" fontFamily={"Nunito Sans"} fontWeight={600}>
              Email: [email protected]
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" fontFamily={"Nunito Sans"} fontWeight={600}>
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="white" gutterBottom fontFamily={"Marcellus"}>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="subtitle1" color="text.secondary" align="center" fontFamily={"Nunito Sans"}>
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/" fontFamily={"Nunito Sans"}>
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}