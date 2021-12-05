import { Container, Grid } from "@material-ui/core";
import React from "react";
import HomeCard from "../Cards/HomeCards/HomeCard";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./HomeProducts.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contactBg: {
    backgroundImage: "url(./images/otherServices.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

function HomeProducts() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();

  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 10000,
    // pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings2: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings2: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings2: {
          slidesToShow:3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.mainDiv}>
      <Container>
        <ThemeProvider theme={theme}>
          <div style={{ textAlign: "center" }} className=" mb-5">
            <Typography variant="caption">Our Products</Typography>
            <Typography variant="h5">What the have built.</Typography>
          </div>
        </ThemeProvider>
      </Container>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
            zIndex: "1",
          }}
        ></div>
        <div className={classes.contactBg + " " + "py-5"}>
          <div style={{ zIndex: "2", position: "relative" }}>
            <Container>
              <Slider {...settings}>
                <div className={styles.productDiv}>
                  <img
                    className={styles.productDivImg}
                    src="./images/products/tallen.jpeg"
                    title="Tallen"
                  />
                </div>
                <div className={styles.productDiv}>
                  <img
                    className={styles.productDivImg}
                    src="./images/products/farmsell.jpeg"
                    title="Farmsell"
                  />
                </div>
                <div className={styles.productDiv}>
                  <img
                    className={styles.productDivImg}
                    src="./images/products/sooma.png"
                    title="Sooma"
                  />
                </div>
                {/* <div className={styles.productDiv}>
            <img
              className={styles.productDivImg}
              src="https://source.unsplash.com/Bi0atWiKP-4/900x900"
            />
          </div> */}
              </Slider>
            </Container>
          </div>
        </div>
      </div>

      {/* <Slider {...settings2} className="mt-5">
          <div className={styles.productDiv}>
            <img
              className={styles.productDivImg}
              src="https://source.unsplash.com/_C5zsV_p-YI/900x900"
            />
          </div>
          <div className={styles.productDiv}>
            <img
              className={styles.productDivImg}
              src="https://source.unsplash.com/58WRkqcAn9o/900x900"
            />
          </div>
          <div className={styles.productDiv}>
            <img
              className={styles.productDivImg}
              src="https://source.unsplash.com/AwnggmGaFms/900x900"
            />
          </div>
          <div className={styles.productDiv}>
            <img
              className={styles.productDivImg}
              src="https://source.unsplash.com/Bi0atWiKP-4/900x900"
            />
          </div>
          <div className={styles.productDiv}>
            <img
              className={styles.productDivImg}
              src="https://source.unsplash.com/3cNc1U7nJcs/900x900"
            />
          </div>
          <div className={styles.productDiv}>
            <img
              className={styles.productDivImg}
              src="https://source.unsplash.com/mNOaXIjJkok/900x900"
            />
          </div>
        </Slider> */}
    </div>
  );
}

export default HomeProducts;
