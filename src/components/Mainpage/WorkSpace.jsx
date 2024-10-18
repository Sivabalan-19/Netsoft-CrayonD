import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../../styles/MainSpace.css";
import LeadDetails from "./LeadDetails";
import UnitDetails from "./UnitDetails";
import Quotation from "./Quotation";

function WorkSpace() {
  return (
    <Grid container style={{ width: "100%", height: "100%" }}>
      <Grid item xs={4} className="Leaddetwork">
        <LeadDetails />
      </Grid>
      <Grid item xs={4} className="unitdetwork">
        <UnitDetails />
      </Grid>
      <Grid item xs={4} className="Quotawork">
        <Quotation />
      </Grid>
    </Grid>
  );
}

export default WorkSpace;
