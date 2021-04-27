import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

import logsData from "../../../constants/events.json";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Logs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Device ID</TableCell>
            <TableCell align="center">Event Type</TableCell>
            <TableCell align="center">Latitude, Longitude</TableCell>
            <TableCell align="center">Unix Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logsData.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{row.deviceId}</TableCell>
              <TableCell align="center">{row.eventType}</TableCell>

              <TableCell align="center">
                {row.latitude + ", " + row.longitude}
              </TableCell>
              <TableCell align="center">
                {String(new Date(row.timestamp / 1000000)).substr(0, 25)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
