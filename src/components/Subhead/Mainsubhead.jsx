import React from "react";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Mainsubhead() {
  return (
    <Box className="mainsub">
      <Box className="indsub" >
        Add Contact <ArrowForwardIosIcon style={{ fontSize: "14px" }} /> Lead
        Details <ArrowForwardIosIcon style={{ fontSize: "14px" }} /> Preview and
        Create Lead <ArrowForwardIosIcon style={{ fontSize: "14px" }} />
        Quotation Details <ArrowForwardIosIcon style={{ fontSize: "14px" }} />
        Preview and Create
      </Box>
    </Box>
  );
}

export default Mainsubhead;
