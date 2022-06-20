import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        height: 1,
        maxWidth: "100%",
        "& .MuiTextField-root": {
          width: 450,
          borderRadius: 8,
          maxWidth: "100%",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} xl={8}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            type="text"
            label="Usuario"
            defaultValue="Ingrese su usuario"
          />
        </Grid>

        <Grid item xs={12} xl={8}>
          <TextField
            required
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            defaultValue="******"
            autoComplete="current-password"
          />
        </Grid>

        <Grid item xs={12} xl={8}>
          <div className="btn-center">
            <Button variant="contained">Ingresar</Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
