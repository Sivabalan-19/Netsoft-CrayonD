import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../styles/Popupstye/Pricepop.css";
import PrimaryInener from "./PrimaryInener";
import Card from "@mui/material/Card";
import InnerPricingpopup from "./InnerPricingpopup";
import Twochanges from "./Twochange";

function Pricingpop({ setOpenPricingDialog }) {
  const [openfirstpop, setopenfirstpop] = useState(false);
  const [opentwopop, setopentwopop] = useState(false);
  const [openremaingpop, setopenremaingpop] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [twochagelist, settwochnaglist] = useState(null);


  const refund = [
    { id: 1, label: "Amount" },
    { id: 2, label: "Rental" },
    { id: 3, label: "%" },
  ];

  const Component = [
    { id: 1, label: "Monthly" },
    { id: 2, label: "Total" }
  ];

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

  const handleCardClick = (item) => {
    setSelectedItem(item);
    if (item.sno === 1) {
      setopenfirstpop(true); 
    } else if (item.sno === 4) {
      setopentwopop(true); 
      settwochnaglist(refund)
    } 
    else if ( item.sno === 5) {
      setopentwopop(true); 
      settwochnaglist(Component)
    }else {
      setopenremaingpop(true); 
    }
  };
  console.log(twochagelist)
  
  return (
    <Box className="pricepopcon">
      <Box className="pricehed">
        <Box sx={{ fontWeight: "800" }}>Pricing Table</Box>
        <Box
          sx={{ color: "#7C8594" }}
          onClick={() => setOpenPricingDialog(false)}
        >
          <CloseIcon />
        </Box>
      </Box>

      <Box className="pricingpopcon">
        {listofpri.map((item, index) => (
          <Card
            sx={{ boxShadow: 'none' }}
            className="pricepopdiv"
            key={index}
            style={{ backgroundColor: item.secodcol }}
            onClick={() => handleCardClick(item)}
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
          </Card>
        ))}
      </Box>

      <Dialog
        open={openfirstpop}
        onClose={() => setopenfirstpop(false)}
        PaperProps={{
          style: { height: "550px", width: "500px" },
        }}
      >
        <PrimaryInener
          selectedItem={selectedItem}
          setopenfirstpop={setopenfirstpop}
        />
      </Dialog>

      <Dialog
        open={opentwopop}
        onClose={() => setopentwopop(false)}
        PaperProps={{
          style: { height: "550px", width: "500px" },
        }}
      >
        <Twochanges 
          selectedItem={selectedItem}
          refund={refund}
          twochagelist={twochagelist}
          setopentwopop={setopentwopop}
        />
      </Dialog>
      <Dialog
        open={openremaingpop}
        onClose={() => setopenremaingpop(false)}
        PaperProps={{
          style: { height: "550px", width: "500px" },
        }}
      >
        <InnerPricingpopup
          selectedItem={selectedItem}
          setopenremaingpop={setopenremaingpop}
        />
      </Dialog>
    </Box>
  );
}

export default Pricingpop;
