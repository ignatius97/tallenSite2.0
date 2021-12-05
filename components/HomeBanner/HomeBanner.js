import { Button, Container, Grid } from '@material-ui/core';
import React from 'react'
import styles from './HomeBanner.module.css'
import MainStyles from "../../styles/Home.module.css";

function HomeBanner() {
    return (
      <>
        <div className={styles.homebanner}>
          <div className={styles.homebannerImg}></div>
          {/* <video
            class={styles.videoBg}
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            autostart
          >
            <source src="./videos/videoplayback.webm" type="video/webm" />
          </video> */}
          <div className={styles.homebannerOverlay}></div>

          <Container>
            <div className={styles.homebannerText}>
              <Grid container spacing={1}>
                <Grid item xs={11} sm={11} md={9}>
                  <h1> Tallen Simplifies Tech </h1>
                  <div>
                    We have made it very easy for you to go digital in whatever field or speciality you are involved. Reach out to us Today.
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="mt-4"
                      size="large"
                    >
                      Start Now
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </>
    );
}

export default HomeBanner
