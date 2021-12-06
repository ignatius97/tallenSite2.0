import ServicePageBunner from "../Services/ServicePageBunner";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import ProductCard from "../Cards/ProductCard";
import CardWithOverLay from "../Cards/CardWithOverLay";
import CardAndOverlay from "../Cards/CardAndOverlay";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  searchDiv: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: "10px 0px",
  },
  search: {
    maxWidth: "400px",
    position: "relative",
    boxShadow:"0px 0px 10px -2px #888",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: "auto",
    marginLeft: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

let apps = [
  {
    id : "1",
    nextpage: "/retail/Farmsell",
    img: "./images/products/farmsell.jpeg",
    Name: "Farm",
    imgTitle: "Farmsell",
    Description: "This app is for managing your farm",
  },
  {
    id : "2",
    nextpage: "/retail/Sooma",
    img: "./images/products/sooma.png",
    Name: "Genda",
    imgTitle: "Sooma",
    Description: "Use this app to monitor different cars you manage",
  },
  {
    id : "3",
    nextpage: "/retail/WeTalk",
    img: "./images/products/tallen.jpeg",
    Name: "WeTalk",
    imgTitle: "WeTalk",
    Description: "Let us connect you with your clients with ease.",
  },
  {
    id : "4",
    nextpage: "/retail/Farm",
    img: "./images/home-header01.jpg",
    Name: "Farm",
    imgTitle: "Farm",
    Description: "This app is for managing your farm",
  },
];

function RetailPage() {
  const classes = useStyles();
  const [Data, setData] = useState("");

  useEffect(() => {
    setData(apps)
  }, [])
  return (
    <div>
      <ServicePageBunner
        title="Retail"
        body="We have some of the best software developers and with there help, we have managed 
              to build some of the best, easy to customize software solutions for your business. All you have to do
              is buy the software, customize it to your style and start using. "
      />
      <div className={classes.searchDiv}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <Container className="mt-5">
        <div>
          <Typography
            variant="h4"
            style={{ textAlign: "center" }}
            className="mb-3"
          >
            Our Retail Software
          </Typography>
        </div>
        <Grid container spacing={2}>
          {Data != ""
            ? Data.map((app, key) => (
                <Grid key={app.id} item xs={12} sm={4}>
                  <ProductCard
                    img={app.img}
                    title={app.Name}
                    body={app.Description}
                    imgTitle={app.imgTitle}
                    nextpage={app.nextpage}
                  />
                </Grid>
              ))
            : null}

          {/* <CardWithOverLay img="./images/home-header01.jpg" /> */}
        </Grid>
      </Container>
    </div>
  );
}

export default RetailPage;
