import React from "react";
import { Box, Button, Switch, IconButton  } from "@mui/material";



import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import house from "../../../assets/house.png";

import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
function RemovePop({setremovecom}) {
  const data = [
    { detail: "Bill Name Here", prix: 1000 },
    { detail: "Bill Name Here", prix: 1000 },
    { detail: "Bill Name Here", prix: 1000 },
    { detail: "Bill Name Here", prix: 1000 },
    { detail: "Bill Name Here", prix: 1000 },
  ];
  return (
    <Box className="Discountpopto">
      <Box
        className="pricehed"
        sx={{ height: "7%", width: "95%", borderBottom: "0" }}
      >
        <Box sx={{ fontWeight: "700" }}>Remove Component</Box>
        <Box sx={{ color: "#7C8594" }} onClick = {() => setremovecom(false)}>
          <CloseIcon />
        </Box>
      </Box>

      <Box className="wholediscount">
        <Box className="wholeleft">
          <Box className="wholeleftin">
            <Box className="imagecont">
              <Box className="imagecontin">
                <Box className="imageleft">
                  <img
                    src={house}
                    alt="no"
                    style={{
                      height: "100%",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                  />
                </Box>
                <Box className="imagertight">
                  <img
                    src={house}
                    alt="no"
                    style={{
                      height: "100%",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                  />
                  <img
                    src={house}
                    alt="no"
                    style={{
                      height: "100%",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                  />
                  <img
                    src={house}
                    alt="no"
                    style={{
                      height: "100%",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                  />
                  <img
                    src={house}
                    alt="no"
                    style={{
                      height: "100%",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box className="imageconee">
              <Box className="imagedishe">
                <Box className="discoute">Jumeirah Estate</Box>
                <Box
                  sx={{
                    color: "#98A0AC",
                    fontSize: "12px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  UNT-1234
                </Box>
              </Box>
              <Box sx={{ fontSize: "14px", color: "#4E5A6B" }}>
                Rubix Apartment, K Tower, Floor 1
              </Box>
              <Box>
                <Box
                  className="iconsanddot"
                  sx={{
                    width: "70%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box className="iconndnum" sx={{ width: "15%" }}>
                    <Box className="aligences">
                      <HotelOutlinedIcon />
                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2
                    </Box>
                  </Box>
                  <Box className="dot"></Box>
                  <Box className="iconndnum" sx={{ width: "15%" }}>
                    <Box className="aligences">
                      <BathtubOutlinedIcon />
                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2
                    </Box>
                  </Box>
                  <Box className="dot"></Box>
                  <Box className="iconndnum" sx={{ width: "15%" }}>
                    <Box className="aligences">
                      <HomeOutlinedIcon />
                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2BHK
                    </Box>
                  </Box>
                  <Box className="dot"></Box>
                  <Box className="iconndnum" sx={{ width: "15%" }}>
                    <Box className="aligences">
                      <HomeOutlinedIcon />
                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2000sq.ft
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="handbodone">
              <Box sx={{ color: "#091B29" }}>
                <LibraryBooksIcon sx={{ fontSize: "16px" }} />
                Handbook
              </Box>
              <Box sx={{ color: "#5078E1" }}>View / Download</Box>
            </Box>
          </Box>
        </Box>
        <Box className="wholeright">
          <Box className="wholerightin">
            <Box className="wholerighed">UNIT PRICE DETAIL</Box>

            <Box className="removecomitem">
              <Box className="scrolremcon">
                {data.map((item, index) => (
                  <Box className="removitdiv" key={index}>
                    <Box sx={{ fontWeight: "600", fontSize: "14px" }}>
                      {item.detail}
                    </Box>
                    <Box className="remoddelico">
                      <Box>${item.prix}</Box>
                      <IconButton  style={{height:'25px', borderRadius:'5px',backgroundColor:'#ffecec', width:'25px'}}>
          <DeleteForeverOutlinedIcon sx={{color:'#FF4B4B', fontSize:'17px'}} />
        </IconButton>
                    </Box>
                  </Box>
                ))}

               
              </Box>

              <Box className="removefinal">
                <Box>Final Total</Box>
                <Box>$1,200</Box>
              </Box>
            </Box>
          </Box>
          <Box className="removbutcon">
            <Button
              variant="contained"
              sx={{
                width: "100%",
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

export default RemovePop;
