import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../styles/Popupstye/Pricepop.css";
function Pricingpop({setOpenPricingDialog}) {
  const listofpri = [
    { sno: 1, conte: "Primary", primcolo: "#B3776D", secodcol: "#FEEAEA80" },
    { sno: 2, conte: "Secondary", primcolo: "#896DB3", secodcol: "#EDE4FE80" },
    {
      sno: 3,
      conte: "One Time Charges",
      primcolo: "#6DAFB3",
      secodcol: "#DBF0F180",
    },
    {
      sno: 4,
      conte: "Refundables",
      primcolo: "#6D80B3",
      secodcol: "#E4EDFF80",
    },
    {
      sno: 5,
      conte: "Inventory Item",
      primcolo: "#B3A16D",
      secodcol: "#FFFAD880",
    },
    {
      sno: 6,
      conte: "Parking Slot",
      primcolo: "#B3776D",
      secodcol: "#FEEAEA80",
    },
    
  ];

  return (
    <Box className="pricepopcon">
      <Box className="pricehed">
        <Box sx={{ fontWeight: "700" }}>Pricing Table</Box>
        <Box sx={{ color: "#7C8594" }} onClick={() => setOpenPricingDialog(false)}>
          <CloseIcon />
        </Box>
      </Box>

      <Box className="pricingpopcon">
        {listofpri.map((item, index) => (
          <Box
            className="pricepopdiv"
            key={index}
            style={{ backgroundColor: item.secodcol }}
          >
            <Box className="priciintd" style={{ gap: "5%" }}>
              <Box className="pricpopcir">
                <span style={{ backgroundColor: item.primcolo }}>
                  0{item.sno}
                </span>
              </Box>
              <Box className="pricpopeh" style={{ color: item.primcolo }}>
                {item.conte}
              </Box>
            </Box>
            <Box className="priciintd" style={{ justifyContent: "end" }}>
              <Box>
                <InfoOutlinedIcon sx={{ color: "#CED3DD" }} />
              </Box>
              <Box className="arrowmark" style={{ justifyContent: "start" }}>
                <ArrowForwardIosIcon sx={{ color: item.primcolo }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Pricingpop;
