import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    cursor: "default",
    minHeight: "35vw",
    paddingTop: "30px",
    padding: theme.spacing.unit * 4,
    margin: theme.spacing.unit * 10,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginBottom: theme.spacing.unit
    }
  }
});

class MyPaper extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper
        className={classes.paper}
        id={this.props.id}
        elevation={1}
        square={true}
      >
        {this.props.children}
      </Paper>
    );
  }
}

export default withStyles(styles)(MyPaper);
