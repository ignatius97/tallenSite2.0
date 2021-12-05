import React from 'react'

// --- Material Ui Imports --- //
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

// --- Fill Image Card Component Imports --- //
import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard/FullImageCard";

// --- Style --- //
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 345
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 140
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)"
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  }
});

function CardWithOverLay(props) {
    const classes = useStyles();
    return (
      <div>
        <Box>
          <FiCard className={classes.card}>
            <FiCardMedia
              media="picture"
              alt="Contemplative Reptile"
              image={props.img}
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography
                variant="body2"
                className={classes.fiCardContentTextSecondary}
                component="p"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </FiCardContent>
          </FiCard>
        </Box>
      </div>
    );
}

export default CardWithOverLay
