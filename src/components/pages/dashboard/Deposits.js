import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Title from "./Title";

import logsData from "../../../constants/events.json";

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    maxHeight: 240,
    maxWidth: 300,
  },
  backgroundBlue: {
    background: "#e8e7ff",
  },
  backgroundRed: {
    background: "#ffe7e7",
  },
  backgroundGrey: {
    background: "#ededed",
  },
}));

export default function Deposits() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <Title>Total Collission Events</Title>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item>
            <Paper className={clsx(fixedHeightPaper, classes.backgroundBlue)}>
              <Typography component="p" variant="h6">
                Acceleration
              </Typography>
              <Typography component="p" variant="h4">
                {
                  logsData.filter((r) => {
                    return r.eventType === "breaking";
                  }).length
                }
              </Typography>
              <Typography
                color="textSecondary"
                className={classes.depositContext}
              >
                Percentage:{" "}
                {(logsData.filter((r) => {
                  return r.eventType === "breaking";
                }).length /
                  logsData.length) *
                  100}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={clsx(fixedHeightPaper, classes.backgroundRed)}>
              <Typography component="p" variant="h6">
                Collision
              </Typography>
              <Typography component="p" variant="h4">
                {
                  logsData.filter((r) => {
                    return r.eventType === "collision";
                  }).length
                }
              </Typography>
              <Typography
                color="textSecondary"
                className={classes.depositContext}
              >
                Percentage:{" "}
                {(logsData.filter((r) => {
                  return r.eventType === "collision";
                }).length /
                  logsData.length) *
                  100}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={clsx(fixedHeightPaper, classes.backgroundGrey)}>
              <Typography component="p" variant="h6">
                Breaking
              </Typography>
              <Typography component="p" variant="h4">
                {
                  logsData.filter((r) => {
                    return r.eventType === "breaking";
                  }).length
                }
              </Typography>
              <Typography
                color="textSecondary"
                className={classes.depositContext}
              >
                Percentage:{" "}
                {(logsData.filter((r) => {
                  return r.eventType === "breaking";
                }).length /
                  logsData.length) *
                  100}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
