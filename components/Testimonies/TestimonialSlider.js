import React, { Component } from "react";
import Slider from "react-slick";
import HomeCard from "../Cards/HomeCards/HomeCard";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

import styles from './TestimonialSlider.module.css'
import TestimonialCard from "./TestimonialCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " " + styles.next}
      style={{
        ...style,
        display: "block",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        color: "#000",
        backgroundColor: "#ccc",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " " +styles.prev}
      style={{ ...style, display: "block", width:"40px", height:"40px", borderRadius:"50%", color:"#000", backgroundColor:"#ccc" }}
      onClick={onClick}
    />
  );
}

export default function TestimonialSlider() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    useTransform:true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
            <Typography variant="caption">Our Testimonials</Typography>
            <Typography variant="h5">What our customers say.</Typography>
          </div>
        </ThemeProvider>
        <Slider {...settings}>
          <div>
            <TestimonialCard
              img="./images/users/user1.jpg"
              title="Abaho Jennifer"
              body="This playform is a life saver i tell you."
            />
          </div>
          <div>
            <TestimonialCard
              img="./images/users/user2.jpg"
              title="Attim Annah"
              body="I enjoyed how easy it was to get my website up and running so easily"
            />
          </div>
          <div>
            <TestimonialCard
              img="./images/users/user3.webp"
              title="Kato Alex"
              body="I always wonder how they make money when they are so cheap"
            />
          </div>
          <div>
            <TestimonialCard
              img="./images/users/user4.jpg"
              title="Anthony T"
              body="You are the people to do business with."
            />
          </div>
          <div>
            <TestimonialCard
              img="./images/users/user5.jpg"
              title="Alice Kaboyo"
              body="This is a very safe and helpful site that i bought my business website "
            />
          </div>
          <div>
            <TestimonialCard
              img="./images/users/user6.jpg"
              title="Naturinda Allen"
              body="I love the speed with which they get you your software"
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
}
