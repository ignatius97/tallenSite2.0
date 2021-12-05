import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  media: {
    height: 250,
  },
  Icon: {
    fontSize: "20px",
  },
});

export default function CardAndOverlay(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body != null && props.body.length > 45
              ? props.body.slice(0, 45) + "..."
              : props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
