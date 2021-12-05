import { Container, Grid, Icon } from "@material-ui/core";
import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/MailOutlineOutlined";
import Phone from "@material-ui/icons/localPhone";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      //   width: "25ch",
    },
  },
  contactBg: {
    backgroundImage: "url(./images/contactusen.jpg)",
  },
}));

function ContactSection() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();
  return (
    <div>
      <Container>
        <ThemeProvider theme={theme}>
          <div style={{ textAlign: "center" }} className=" mb-5">
            <Typography variant="caption">Contact US</Typography>
            <Typography variant="h5">Reach out to us.</Typography>
          </div>
        </ThemeProvider>
      </Container>
      <div className={classes.contactBg+" "+"py-4"}>
        <Container>
          <div
            className="pl-md-2 pr-md-5 py-md-4 "
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "5px",
              boxShadow: "0px 0px 12px -5px black",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className="d-none d-md-block">
                {/* <img
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "480px", maxWidth: "480px" }}
                  src="./images/globe.png"
                /> */}
                <div style={{ textAlign: "center" }}>
                  <Typography variant="overline">
                    Reach out to us for any inquiries you may have at:
                  </Typography>
                  <div>
                    <Typography variant="caption">
                      <Icon>
                        <MailIcon />
                      </Icon>
                      : Tallen@Tallen.Tech
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption">
                      <Icon>
                        <Phone />
                      </Icon>
                      : +1 234 4567 8910
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <form className={classes.root} noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="filled-basic"
                        label="Email"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="filled-basic"
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="filled-basic"
                        fullWidth
                        label="Subject"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        fullWidth
                        rows={5}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ float: "inline-end" }}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}></Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ContactSection;
