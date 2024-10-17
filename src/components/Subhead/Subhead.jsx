import React from "react";
import { Box } from "@mui/material";
import "../../styles/Subhead.css";
import "../../styles/Head.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Dropdown from "../Dropdown/Dropdown";

function Subhead() {
  return (
    <Box className="SubheadCont">
      <Box className="subheadbox">
        <Box className="iconhead">
          <Box className="arrowcon">
            <ArrowBackIosNewIcon style={{ fontSize: "16px" }} />
          </Box>
          <Box className="aligence">Create Quotation To Existing Lead</Box>
        </Box>

        <Box className="subheadDrop">
          <Dropdown />
        </Box>
      </Box>
    </Box>
  );
}

export default Subhead;
