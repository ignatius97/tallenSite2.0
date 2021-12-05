import React from 'react'
import styles from './ServicePageBunner.module.css'
import { Button, Container, Grid, Link } from "@material-ui/core";
import NextLink from "next/link"

function ServicePageBunner(props) {
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
                  <h1>{props.title}</h1>
                  <div className="mb-3">{props.body}</div>
                  <NextLink href="#" passHref>
                    <Link>{props.buybtn}</Link>
                  </NextLink>
                  <NextLink href="#" passHref>
                    <Link target="_blank" >{props.demobtn}</Link>
                  </NextLink>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </>
    );
}

export default ServicePageBunner
