import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroImg from "../public/hero_img.webp";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "640",
  height: "400",
  bgcolor: "background.paper",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-around",
  alignItem: "center",
  boxShadow: 24,
};

export default function SimpleContainer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundImage: 'url("nike-logo.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
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
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "36px",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Estan listos para la mejor exp UI?
              <Image src={HeroImg} width="640" height="300" alt=''/>
              <Button variant="contained" color="success">
                <Link href="/landing" underline="none" sx={{ color: "#fff" }}>
                  Si, vamos!
                </Link>
              </Button>
              <Button
                onClick={handleOpen}
                variant="contained"
                color="error"
                sx={{ ml: "10px" }}
              >
                <Link  underline="none" sx={{ color: "#fff" }}>
                  Todavia no
                </Link>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={2}
                  sx={style}
                >
                  <Grid item xs={12} md={3} xl={3} sx={{
                                     
                    borderRadius: 1,
                    bgcolor: "background.paper",
                    color: "text.secondary",
                    "& svg": {
                      m: 1.5,
                    },
                    "& hr": {
                      mx: 0.5,
                    },
                  }}>
                    <Image src="/hand.png" width="300" height="300" alt="Nothing" />
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={12} md={8} xl={8}>
                  <h1>GRACIAS!</h1>
                  <h1>SON CRACKS!</h1>
                  <Button variant="contained" color="success">
                <Link href="/landing" underline="none" sx={{ color: "#fff" }}>
                  Bueno, vamos...!
                </Link>
              </Button>
                  </Grid>
                </Grid>
              </Modal>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
