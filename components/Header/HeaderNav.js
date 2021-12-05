import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarCollapse from "./AppBarCollapse";
import { Container } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.navigation} color="default">
      <Container>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.appTitle}
          >
            <h1>TALLEN</h1>
          </Typography>
          <AppBarCollapse />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
