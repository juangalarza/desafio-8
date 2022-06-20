import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NoSsr from "@mui/base/NoSsr";

export default function Contact() {
  return (

      <Box
        sx={{
          height: "100%",
          padding: "0 24px",
          display: "flex",
          justifyContent: "center",
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
            <h1></h1>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Grid
              container
              direction="row"
              justifyContent="start-flex"
              alignItems="center"
              spacing={2}
            >
              <h1>Permanezcamos en contacto!</h1>
              <Grid item xs={12} md={6} xl={8}>
                <TextField
                  fullWidth
                  id="outlined-textarea"
                  label="Nombre y Apellido"
                  placeholder="Nombre y Apellido"
                  multiline
                />
              </Grid>
              <Grid item xs={12} xl={8}>
                <TextField
                  fullWidth
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Email"
                  multiline
                />
              </Grid>
              <Grid item xs={12} xl={8}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Mensaje"
                  placeholder="Dejenos su mensaje"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} xl={8}>
                <Button variant="outlined">Enviar mensaje</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

  );
}
