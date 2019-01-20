import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import OffsetAnchor from "./utils/OffsetAnchor.js";
import MyPaper from "./utils/MyPaper.js";
// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
    // backgroundImage: "url(images/linen/linen.png)"
  },
  title: {
    textAlign: "center"
  },
  item: {
    paddingTop: theme.spacing.unit * 8
  },
  image: {
    maxHeight: "130px",
    maxWidth: "100%",
    marginTop: "0.67rem"
  }
});

class Page3 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <OffsetAnchor id="page3" />
        <MyPaper>
          <Grid container className={classes.container} justify={"center"}>
            <Grid item xs={12} className={classes.title}>
              <h1>Page 3</h1>
            </Grid>
          </Grid>
        </MyPaper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Page3);
