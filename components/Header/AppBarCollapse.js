/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem>Home</MenuItem>
      <MenuItem>Services</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Blog</MenuItem>
      <MenuItem>Contact</MenuItem>
      <MenuItem>Learn More</MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button color="inherit">Home</Button>
      <Button color="inherit">Services</Button>
      <Button color="inherit">About</Button>
      <Button color="inherit">Blog</Button>
      <Button color="inherit">Contact</Button>
      <Button variant="contained" className="ms-5" color="primary" size="large" >
        Learn More
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
