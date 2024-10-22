import React from "react";
import {
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
// import LinearProgress from '@mui/joy/LinearProgress';
import { useState } from "react";
import "../../../styles/Popupstye/Pricepop.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import CloseIcon from "@mui/icons-material/Close";

function PrimaryInener({ selectedItem, setOpenOtherPopup }) {
  const progres = [
    { id: 1, cont: "Maximum", price: 100, value: 100, color: "#FF4B4B" },
    { id: 2, cont: "Recommended", price: 120, value: 60, color: "#5AC782" },
    { id: 3, cont: "Minimum", price: 200, value: 30, color: "#FF9340" },
  ];

  console.log(selectedItem);
  const categories = ["Lease", "Sales", "Manage"];
  const [act, setact] = useState("Yes");
  const [activeTab, setActiveTab] = useState("Lease");
  const Chargeble = ["Yes", "No"];

  const [gstvalue,setgstvalue] = useState('');
  const [pricing,setpricing] = useState('')



  return (
    <div className="innerpopcon">
      <Box className="pricehed" sx={{ height: "7%", width: "95%" }}>
        <Box sx={{ fontWeight: "700" }}>Add Discount To Unit</Box>
        <Box sx={{ color: "#7C8594",display:'flex', alignItems:'center' }} onClick={() => setOpenOtherPopup(false)}>
          <CloseIcon />
        </Box>
      </Box>
      <Box className="innerpoptie">
        <Box
          className="inpoptibox"
          sx={{ backgroundColor: selectedItem.secodcol }}
        >
          <Box sx={{ color: selectedItem.primcolo, marginLeft: "7px" }}>
            {selectedItem.conte} Component
          </Box>
          <Box
            style={{
              justifyContent: "end",
              marginRight: "12px",
              position: "relative",
            }}
          >
            <InfoOutlinedIcon />
          </Box>
        </Box>
      </Box>

      <div
        style={{
          display: "flex",
          height: "15%",
          alignItems: "start ",
          justifyContent: "space-between",
          width: "92%",
        }}
      >
        <div style={{ width: "48%" }}>
          <Box className="RevenueType" sx={{ marginTop: "15px" }}>
            Revenue Type
          </Box>
          <Box className="category-tabs">
            {categories.map((category) => (
              <Button
                key={category}
                sx={{textTransform:'none', fontWeight:'600'}}
                className={activeTab === category ? "active" : ""}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </Button>
            ))}
          </Box>
        </div>

        <Box className="col" sx={{ width: "48%" }}>
          <Box>Pricing Component</Box>
          <Box>
            <FormControl size="small">
              <Select
                displayEmpty
                IconComponent={FaChevronDown}
                value={pricing}
                className="pricing-buttons-gst"
                sx={{
                  height: "40px",
                  fontSize: "14px",
                  width: "210px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  ".MuiSvgIcon-root": {
                    color: "#091B29",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                }}
              >
                <MenuItem value="">Pricing Component</MenuItem>
                <MenuItem value={10}>GST 1</MenuItem>
                <MenuItem value={20}>GST 2</MenuItem>
                <MenuItem value={30}>GST 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </div>

      <div
        style={{
          height: "15%",
          width: "92%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box className="col" sx={{ width: "55%" }}>
          <Box>Tax Group For Pricing Component</Box>
          <Box>
            <FormControl size="small">
              <Select
                displayEmpty
                value={gstvalue}
                onChange={() => setgstvalue(taget.value)}
                IconComponent={FaChevronDown}
                className="pricing-buttons-gst"
                sx={{
                  height: "40px",
                  fontSize: "14px",
                  width: "220px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  ".MuiSvgIcon-root": {
                    color: "#091B29",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                }}
              >
                <MenuItem value="" hidden>
                  GST
                </MenuItem>
                <MenuItem value={10} >GST 1</MenuItem>
                <MenuItem value={20}>GST 2</MenuItem>
                <MenuItem value={30}>GST 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="col">
          <Box>Chargeble</Box>
          <Box className="category-tabs">
            {Chargeble.map((category) => (
              <Button
                key={category}
                sx={{textTransform:'none', fontWeight:'600'}}
                className={act === category ? "active" : ""}
                onClick={() => setact(category)}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>
      </div>

      <Box
        className="biginput"
        sx={{
          height: "12%",

          marginTop: "10px",
          width: "92%",
        }}
      >
        <Box
          className="RevenueType"
          style={{
            height: "40%",
            display: "flex",
            alignItems: "center",
            margin: "0",
          }}
        >
          UOM Value
        </Box>
        <Box className="inputbig">
          <Box style={{ height: "100%", width: "70%" }}>
            <input type="text" className="inputbd" />
          </Box>
          <Box
            style={{
              color: "#98A0AC",
              fontSize: "14px",
              height: "100%",
              width: "30%",
              marginRight:'15px',
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            $ / Monthly
          </Box>
        </Box>
      </Box>

      <div className="progescont">
        {progres.map((item, index) => (
          <div
            style={{
              width: "33%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <div style={{ color: "#98A0AC", fontSize: "12px" }}>
              {item.cont}
            </div>
            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                width: "90%",
                marginTop:'5px',
                "& .MuiLinearProgress-bar": {
                  borderRadius: "5px",
                  backgroundColor: item.color, 
                },
                backgroundColor: "#E4E8EE",
                borderRadius: "5px",
              }}
            />
            <div
              style={{
                height: "35%",
                width: "90%",
                marginTop:'10px',
                border: "1px solid #E4E8EE",
                borderRadius:'4px',
                display: "grid",
                placeItems: "center",
              }}
            >
              {" "}
              $ {item.price}
            </div>
            <div style={{ color: "#98A0AC", fontSize: "12px" }}>
              Sq. Yard/Monthly
            </div>
          </div>
        ))}
      </div>
      <Box className="buton4div" sx={{ width: "92%" }}>
        <Box>
          <Button
            variant="outlined"
            onClick={() => setOpenOtherPopup(false)}
            sx={{
              backgroundColor: "#ffff",
              color: "Black",
              textTransform: "none",
              height: "50%",
              fontWeight: "600",
              border: "2px solid #E4E8EE",
            }}
          >
            Back
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5078E1",
              fontWeight: "600",
              textTransform: "none",
              height: "50%",
              color: "white",
            }}
          >
            Create Pricing Component
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default PrimaryInener;
