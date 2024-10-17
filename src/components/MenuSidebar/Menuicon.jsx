import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import AmenitiPop from "../Popup/AmenitiesPopup/AmenitiPop";
import React from "react";
import { useState } from "react";
import Pricingpop from "../Popup/PricingPopup/Pricingpop";
import Utilitypop from "../Popup/UtilityPopup/Utilitypop";
import { Box } from "@mui/material";

export default function Menuicon() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPricingDialog, setOpenPricingDialog] = useState(false);
  const [openAmmunitiesDialog, setOpenAmmunitiesDialog] =useState(false);
  const [openutilititiesDialog, setopenutilititiesDialog] =useState(false);
  

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenPricingDialog = () => {
    setOpenPricingDialog(true);
    handleClose(); // Close the menu
  };

  const handleClosePricingDialog = () => {
    setOpenPricingDialog(false);
  };

  const handleOpenAmmunitiesDialog = () => {
    setOpenAmmunitiesDialog(true);
    handleClose(); // Close the menu
  };

  const handleCloseAmmunitiesDialog = () => {
    setOpenAmmunitiesDialog(false);
  };


  
  const handleOpenUtilityDialog = () => {
    setopenutilititiesDialog(true);
    handleClose(); // Close the menu
  };

  const handleCloseUtilitiesDialog = () => {
    setopenutilititiesDialog(false);
  };


  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="small"
        sx={{
          border: "none",
          boxShadow: "none",
          fontWeight: "600",
          textTransform: "none",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        <AddIcon /> Customize
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenPricingDialog}>
          Add Pricing Component
        </MenuItem>
        <MenuItem onClick={handleOpenAmmunitiesDialog}>Add Ammunities</MenuItem>
        <MenuItem onClick={handleOpenUtilityDialog}>Add Utilities</MenuItem>
        <MenuItem onClick={handleClose}>Add Discount</MenuItem>
        <MenuItem onClick={handleClose}>Remove Component</MenuItem>
      </Menu>

      <Dialog
        open={openPricingDialog}
        onClose={handleClosePricingDialog}
        PaperProps={{
          style: { height: "800px", width: "500px" },
        }}
      >
        <Pricingpop
        openPricingDialog={openPricingDialog}
        setOpenPricingDialog={setOpenPricingDialog}
        />
      </Dialog>

      <Dialog
        open={openAmmunitiesDialog}
        onClose={handleCloseAmmunitiesDialog}
        PaperProps={{
          style: { height: "800px", width: "500px" },
        }}
      >
        <AmenitiPop 
        openAmmunitiesDialog={openAmmunitiesDialog}
        setOpenAmmunitiesDialog={setOpenAmmunitiesDialog} />
      </Dialog>

      <Dialog
        open={openutilititiesDialog}
        onClose={handleCloseUtilitiesDialog}
        PaperProps={{
          style: { height: "800px", width: "500px" },
        }}
      >
        <Utilitypop
        openutilititiesDialog={openutilititiesDialog}
        setopenutilititiesDialog={setopenutilititiesDialog} />
      </Dialog>
    </Box>
  );
}
