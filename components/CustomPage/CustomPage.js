import React from 'react'
import { Button, Grid, Container, Typography,Link } from "@material-ui/core/";
import NextLink from "next/link"

function CustomPage(props) {
    return (
      <div>
        <Container>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h4" className="mt-5">
              Tallen's Custom built Software
            </Typography>
          </div>
          <Grid container spacing={3} className="my-4">
            <Grid item sm={12} md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography variant="h4">Tallen</Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <NextLink href="#" passHref>
                    <Link target="_blank">
                      <Typography variant="body2" style={{ color: "blue" }}>
                        Visit Site
                      </Typography>
                    </Link>
                  </NextLink>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <img width="100%" src="../images/products/tallen.jpeg" />
            </Grid>
          </Grid>
          <Grid container spacing={3} className="my-4">
            <Grid item sm={12} md={6}>
              <img width="100%" src="../images/products/farmsell.jpeg" />
            </Grid>
            <Grid item sm={12} md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography variant="h4">FarmSell</Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <NextLink href="https://farmsell.org/" passHref>
                    <Link target="_blank">
                      <Typography variant="body2" style={{ color: "blue" }}>
                        Visit Site
                      </Typography>
                    </Link>
                  </NextLink>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="my-4">
            <Grid item sm={12} md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography variant="h4">Sooma</Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <NextLink href="http://sooma.org/" passHref>
                    <Link target="_blank">
                      <Typography variant="body2" style={{ color: "blue" }}>
                        Visit Site
                      </Typography>
                    </Link>
                  </NextLink>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <img width="100%" src="../images/products/sooma.png" />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default CustomPage
