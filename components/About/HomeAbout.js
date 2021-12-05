import { Container, Grid, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from './HomeAbout.module.css'

function HomeAbout() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);


    return (
      <div className={styles.aboutDiv}>
        <Container >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ThemeProvider theme={theme}>
                <Typography variant="caption" style={{ color: "cyan" }}>
                  Our Company
                </Typography>
                <Typography variant="h5">
                  We work with the best Software developers to bring to you the
                  best solutions
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="body2"
                  style={{ color: "#969494", lineHeight: "1.8" }}
                  className="mt-4"
                >
                  At TALLEN, you are sure of the product you are buying with the
                  addition of support during the delpoyment of the solution and
                  as well the technical support you will ever need with
                  maintainess of the solution and all this is at very affordable
                  costs.
                </Typography>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default HomeAbout
