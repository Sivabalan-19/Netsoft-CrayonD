import React from "react";
import { Box, Button, Switch } from "@mui/material";
import img from "../../../assets/Gridimg.png";
import CloseIcon from "@mui/icons-material/Close";
import "../../../styles/Popupstye/Pricepop.css";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
function Utilitypop({ setopenutilititiesDialog }) {
  const utidata = [
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },

    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
  ];

  return (
    <Box className="amenitespopocn">
      <Box className="pricehed" style={{ height: "7%", border: "0px" }}>
        <Box sx={{ fontWeight: "700" }}>Pricing Table</Box>
        <Box
          sx={{ color: "#7C8594" }}
          onClick={() => setopenutilititiesDialog(false)}
        >
          <CloseIcon />
        </Box>
      </Box>

      <Box className="ammunitcon">
        <Box className="amunifon">
          <Box
            className="amunitbaner"
            style={{ backgroundColor: "#DBF0F180", color: "#6DAFB3" }}
          >
            <Box className="amubancont">
              <Box className="aligesfs">
                <AutoAwesomeOutlinedIcon sx={{ fontSize: "35px" }} />
              </Box>
              <Box style={{ fontWeight: "600" }}>
                <span style={{ fontWeight: "800" }}>05</span> Total Utility
              </Box>
            </Box>

            <Box className="amubanpri">$ 200.00</Box>
          </Box>

          <Box className="availaamit">Available Amenities</Box>

          <Box className="tooglecon">
            {utidata.map((item, index) => (
              <Box className="tooglecard" key={index}>
                <Box className="toggleimgcon">
                  <img src={img} alt="" />
                </Box>

                <Box className="toogebancont">
                  <Box className="togcontne">{item.name}</Box>
                  <Box
                    className="togcontne"
                    style={{
                      fontSize: "12px",
                      color: "#4E5A6B",
                      fontWeight: "600",
                    }}
                  >
                    <Box>$ {item.prices}</Box>
                    <Box className="dot"></Box>
                    <Box>
                      Valid {item.startdat} - {item.enddate} {item.year}
                    </Box>
                  </Box>
                </Box>

                <Box className="contswitch">
                  <Switch color="success" size="lg" variant="soft" />
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="updatesavcon">
            <Button
              variant="contained"
              sx={{
                width: "100%",
                outline: "none", 
                textTransform: "none",
                backgroundColor: "#5078E1",
              }}
            >
              Update & Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Utilitypop;
