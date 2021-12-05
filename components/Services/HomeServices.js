import { Container, Grid, Link } from "@material-ui/core";
import React from "react";
import HomeCard from "../Cards/HomeCards/HomeCard";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./HomeServices.module.css";

import Build from "@material-ui/icons/Build";
import Settings from "@material-ui/icons/Settings";
import Work from "@material-ui/icons/Work";
import NextLink from "next/link";

function HomeServices() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className={styles.mainDiv}>
      <Container>
        <ThemeProvider theme={theme}>
          <div style={{ textAlign: "center" }} className=" mb-5">
            <Typography variant="caption">Our Services</Typography>
            <Typography variant="h5">What we bring to you.</Typography>
          </div>
        </ThemeProvider>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <NextLink href="/build" passHref>
              <Link>
                <HomeCard
                  title="Build"
                  Icon={<Build fontSize="large" />}
                  body="We build for you your desired software from zero until the day you deploy it.
              All you need to do it to write a description of the software and send it to us, We will contact you
              to Confirm and them start. "
                />
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <NextLink href="/retail" passHref>
              <Link>
                <HomeCard
                  title="Retail"
                  Icon={<Settings fontSize="large" />}
                  body="We have some of the best software developers and with there help, we have managed 
              to build some of the best, easy to customize software solutions for your business. All you have to do
              is buy the software, customize it to your style and start using."
                />
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <NextLink href="/custom" passHref >
              <Link>
                <HomeCard
                  title="Customs"
                  Icon={<Work fontSize="large" />}
                  body="TALLEN as a business has also built some software solutions for the general public. Click 
              here and checkout some brilliant solutions from your day to day life and start to use them
              Today. You will like them."
                />
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeServices;
