import React from "react";
import "../../styles/Head.css";
import { Avatar, Box, Badge } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/logo.png";
import img from "../../assets/login.png";
function Head() {
  return (
    <Box className="HeaderBox">
      <Box className="logodetails">
        <Box className="logobox">
          <img src={logo} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          style={{
            height: "50%",
            border: "1px solid #98A0AC",
            backgroundColor: "#98A0AC",
          }}
        ></Box>
        <Box>PROPERTY MANAGEMENT SOLUTION</Box>
      </Box>

      <Box className="SearchBoxcontainer">
        <Box className="search">
          <Box className="aligence" style={{ width: "10%", color: "#CED3DD" }}>
            <SearchIcon style={{ fontSize: "22px" }} />
          </Box>
          <Box className="aligence" style={{ width: "90%" }}>
            <input type="text" placeholder="Search" />
          </Box>
        </Box>
      </Box>

      <Box className="siginbox">
        <Box className="badge">
          <Badge color="primary" variant="dot">
            <NotificationsIcon />
          </Badge>
        </Box>

        <Box
          style={{
            height: "50%",
            border: "1px solid #98A0AC",
            backgroundColor: "#98A0AC",
          }}
        ></Box>

        <Box className="login">
          <Box>
            <Avatar alt="Remy Sharp" src={img} />{" "}
          </Box>
          <Box>
            <Box style={{ fontSize: "12px", fontWeight: "600" }}>
              Bala Ganesh
            </Box>
            <Box style={{ fontSize: "10px", color: "#98A0AC" }}>
              Super Admin
            </Box>
          </Box>
          <Box>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Head;
