import React from "react";
import "../styles/MainSpace.css";
import { Box } from "@mui/material";
import Subhead from "../components/Subhead/Subhead";
import Mainsubhead from "../components/Subhead/Mainsubhead";
import Bottom from "../components/Botombox/Bottom";
import WorkSpace from "../components/Mainpage/WorkSpace";

function MainPage() {
  return (
    <Box className="MainSpacecon">
      <Box className="Subheadcon">
        <Subhead />
      </Box>

      <Box className="MainSpecon">
        <Box className="MainContainer">
          <Box className="Mainsubhed">
            <Mainsubhead />
          </Box>

          <Box className="Mainwork">
            <WorkSpace />
          </Box>

          <Box className="Mainbot">
            <Bottom />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;
