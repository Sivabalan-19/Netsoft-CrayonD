import React from "react";
import "../../../styles/Popupstye/Pricepop.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, FormControl, Select, MenuItem } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PricingDropdown from "../../Dropdown/PricingDropdown"; 
import PrimaryInener from "./PrimaryInener";

import { FaChevronDown } from "react-icons/fa";

function Twochanges({ selectedItem, setopentwopop,twochagelist }) {
  const [activeTab, setActiveTab] = useState("Lease");
  const [act, setact] = useState("Monthly");
  const [act1, setact1] = useState("Amount");

  const categories = [
    { id: 1, name: "Lease" },
    { id: 2, name: "Sales" },
    { id: 3, name: "Manage" },
    { id: 4, name: "Stay" },
  ];


  return (
    <Box className="innerpopcon">
      <Box className="pricehed" sx={{ height: "7%", width: "95%" }}>
        <Box sx={{ fontWeight: "700" }}>Add Discount To Unit</Box>
        <Box sx={{ color: "#7C8594" }} onClick={() => setopentwopop(false)}>
          <CloseIcon />
        </Box>
      </Box>

      <Box className="innerpoptie">
        <Box
          className="inpoptibox"
          sx={{
            backgroundColor: selectedItem.secodcol,
            color: selectedItem.primcolo,
          }}
        >
          <Box sx={{ marginLeft: "7px", width:'80%' }}>{selectedItem.conte} Component</Box>
          <Box style={{ justifyContent: "end", marginRight: "12px" }}>
            <InfoOutlinedIcon />
          </Box>
        </Box>
      </Box>

      <Box className="inputcont">
        <Box>
          <Box className="RevenueType">Revenue Type</Box>
          <Box className="category-tabs">
            {categories.map((category) => (
              <Button
                key={category}
              
              sx={{outline: "none", textTransform:'none', fontWeight:'600',}}
                className={activeTab === category.name ? "active" : ""}
                onClick={() => setActiveTab(category.name)}
              >
                {category.name}
              </Button>
            ))}
          </Box>
          <Box className="category-tabs">
            <Box className="col">
              <Box>Pricing Component</Box>
              <Box>
                <FormControl size="small">
                  <Select
                    displayEmpty
                    IconComponent={FaChevronDown}
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
                    <MenuItem value="" disabled>
                      Pricing Component
                    </MenuItem>
                    <MenuItem value={10}>GST 1</MenuItem>
                    <MenuItem value={20}>GST 2</MenuItem>
                    <MenuItem value={30}>GST 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box className="col">
              <Box>Tax Group For Pricing Component</Box>
              <Box>
                <FormControl size="small">
                  <Select
                    displayEmpty
                    IconComponent={FaChevronDown}
                    className="pricing-buttons-gst"
                    sx={{
                      height: "40px",
                      fontSize: "14px",
                      width: "230px",
                      fontWeight: "bold",
                      marginTop: "10px",
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
                    <MenuItem value="" disabled>
                      GST
                    </MenuItem>
                    <MenuItem value={10}>GST 1</MenuItem>
                    <MenuItem value={20}>GST 2</MenuItem>
                    <MenuItem value={30}>GST 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>

          <Box className="category-tabs">
            <Box className="col">
              <Box>Chargeble</Box>
              <Box className="category-tabs">
                {twochagelist.map((category) => (
                  <Button
                    key={category.id}
                    sx={{outline: "none", textTransform:'none', fontWeight:'600'}}
                    className={act === category.label ? "active" : ""}
                    onClick={() => setact(category.label)}
                  >
                    {category.label}
                  </Button>
                ))}
              </Box>
            </Box>
          
          </Box>
        </Box>

        <Box className="biginput">
          <Box className="RevenueType" style={{ height: "40%", margin: "0" }}>
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

        <Box className="buton4div">
          <Box>
            <Button
              variant="outlined"
              onClick={() => setopentwopop(false)}
              sx={{
                outline: "none", 
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
                outline: "none", 
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
      </Box>
    </Box>
  );
}

export default Twochanges;
