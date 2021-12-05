import React,{useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import { Link } from "@material-ui/core";
import NextLink from "next/link"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    "& .MuiCardContent-root": {
      position: "absolute",
      top: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      width: "100%",
      color: "#fff"
    }
  },
  media: {
    height: 350,
  },
  Icon: {
    fontSize: "20px",
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  const [nextpage, setNextpage] = useState("");

  useEffect(() => {
    setNextpage(props.nextpage);
  }, [])

  return (
    <NextLink href={nextpage} passHref>
      <Link>
        {console.log("page",nextpage)}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.img}
              title={props.imgTitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#fff" }}
                component="p"
              >
                {/* {props.body.length > 45
              ? props.body.slice(0, 45) + "..."
              : props.body} */}
                {props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </NextLink>
  );
}
