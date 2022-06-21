import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import logoWeb from "../public/nike-brand.png";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Divider from '@mui/material/Divider';

export default function SimpleContainer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundColor: "#FFBF00",
          width: "auto",
          height: "40%",
          padding: "30px 24px 0 24px",
          display: "flex",
          // alignContent: "flex-start",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={3}
            xl={3}
            sx={{
              textAlign: "left",
            }}
          >
            <Image
              src={logoWeb}
              width={60}
              height={24}
              alt="Logo"
              sx={{ mr: 1 }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={9}
            xl={9}
            sx={{
              textAlign: "right",
            }}
          >
            <Box sx={{ display: { xs: "block", sm: "block" } }}>
              <Button sx={{ color: "#000" }}>Inicio</Button>
              <Button sx={{ color: "#000" }}>Productos</Button>
              <Button sx={{ color: "#000" }}>Galeria</Button>
              <Button sx={{ color: "#000" }}>Contactanos</Button>
            </Box>
            {/* <Grid container>
              <Grid
                item
                xs={6}
                sm={3}
                xl={3}
                sx={{
                  textAlign: "right",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#000",
                    textTransform: "uppercase"
                  }}
                >
                  Inicio
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                xl={3}
                sx={{
                  textAlign: "right",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#000",
                    textTransform: "uppercase"
                  }}
                >
                  Acerca
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                xl={3}
                sx={{
                  textAlign: "right",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#000",
                    textTransform: "uppercase"
                  }}
                >
                  Productos
                </Link>
              </Grid>
              <Grid
                item
                spacing={2}
                xs={6}
                sm={3}
                xl={3}
                sx={{
                  textAlign: "right",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#000",
                    textTransform: "uppercase"
                  }}
                >
                  Servicios
                </Link>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            xl={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6} xl={6} sx={{
              textAlign: "left"
            }}>
            <h6 className="fWrapper">Copyright © 2022 Nike Inc. All rights reserved.</h6>
          </Grid>

          <Grid item xs={6} sm={6} xl={6} sx={{
              textAlign: "right",
            }}>
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <WhatsAppIcon />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
