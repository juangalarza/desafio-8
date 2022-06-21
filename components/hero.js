import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroImg from "../public/hero_img.webp";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function SimpleContainer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundImage: 'url("nike-logo.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          padding: "0 24px",
          display: "flex",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={6} xl={6}>
            <Chip
              label="NEW ARRIVALS"
              sx={{
                backgroundColor: "#FFBF00",
                color: "black",
                fontWeight: 600,
              }}
            />

            <Typography variant="h1" sx={{ fontWeight: 600 }}>NUNCA PARAMOS</Typography>
          
            <p className="pHero">
              Celebrá los últimos 50 años de innovaciones, atletas y momentos
              icónicos que han definido el futuro del deporte. Unite a nosotros
              para crear juntos lo que sigue.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFBF00",
                color: "black",
                padding: "5px 50px",
              }}
            >
              Ver mas
            </Button>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Image src={HeroImg} width="640" height="300" alt="Nothing" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
