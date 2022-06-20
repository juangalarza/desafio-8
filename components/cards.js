import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MediaCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/card-1.webp"
            alt="Jordan Air"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jordan Air
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Las Jordan son zapas para adolescentes.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small">Ver producto</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} xl={3}>
        <Card>
            <CardMedia
              component="img"
              height="250"
              image="/card-2.webp"
              alt="Running"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Running
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Running es especial para hacer correr.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Ver producto</Button>
            </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} xl={3}>
        <Card>
            <CardMedia
              component="img"
              height="250"
              image="/card-3.webp"
              alt="Soccer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Soccer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Soccer para los mejores futbolistas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Ver producto</Button>
            </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} xl={3}>
        <Card>
            <CardMedia
              component="img"
              height="250"
              image="/card-4.webp"
              alt="Lady"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lady
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lady diseñadas para todas las mujeres.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Ver producto</Button>
            </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} xl={12}>
        <div className="btn-center">
      <Button variant="outlined">Ver mas productos</Button>
      </div>
      </Grid>  
      
    </Grid>
  );
}