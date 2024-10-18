import React from "react";
import "../../styles/Sidebar.css";
import { Box } from "@mui/material";

function SidebarIcon({ icon, isActive, onClick }) {
  const backgroundColor = isActive ? "#5078E1" : "transparent";
  return (
    <Box
      className="sidebariconcon"
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {icon}
    </Box>
  );
}

export default SidebarIcon;
