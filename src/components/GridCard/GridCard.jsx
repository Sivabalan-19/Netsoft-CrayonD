import React, { useState } from "react";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";

import "../../styles/Head.css";
import CardMedia from "@mui/material/CardMedia";
import Gridimg from "../../assets/Gridimg.png";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import { Box, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "../../styles/Threepage.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CardActionArea from "@mui/material/CardActionArea";
import AddIcon from "@mui/icons-material/Add";
import Menuicon from "../MenuSidebar/Menuicon";
import MainPopup from "../Popup/Mainpop/MainPopup";
function GridCard(props) {
  const [openmainpop, setopenmainpop] = useState(false)

  const closepopup  = () =>
  {
    setopenmainpop(false)
  }
  return (
    <Card sx={{ width: "99%", height: "100%", display: "flex" , border:'1px solid #E4E8EE', borderRadius:'6px', boxShadow: 'none' }}>
      <CardActionArea
                

        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex ",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            height: "45%",
            width: "92%",
            marginTop:'11px',
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <CardMedia
          onClick = {() => setopenmainpop(true)}
            component="img"
            className="cardimgonle"
            image={Gridimg}
            alt="green iguana"
            style={{ width: "100%", height: "100%", position: "relative" }} // Ensure image fills the box
          />
          <IconButton
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              height: "25px",
              backgroundColor: "#ffffff",
              width: "25px",
            }}
          >
            <DeleteForeverOutlinedIcon
              sx={{ color: "#FF4B4B", fontSize: "17px" }}
            />
          </IconButton>
        </Box>

        <Box className="cardconten">
          <Box className="cardnampr">
            <Box className="cardnam">{props.tit}</Box>
            <Box className="cardproc">${props.price}</Box>
          </Box>

          <Box className="cardsq">
            <Box sx={{fontSize:''}}>{props.smaitit}</Box>
            <Box className="dot"></Box>
            <Box>{props.sqft}</Box>
          </Box>

          <Box className="iconsanddot">
            <Box className="iconndnum">
              <Box className="aligences">
                <HotelOutlinedIcon sx={{fontSize:'18px'}} />
              </Box>
              <Box className="aligences">{props.bed}</Box>
            </Box>
            <Box className="dot"></Box>
            <Box className="iconndnum">
              <Box className="aligences">
                <BathtubOutlinedIcon sx={{fontSize:'18px'}}  />
              </Box>
              <Box className="aligences">{props.tub}</Box>
            </Box>
            <Box className="dot"></Box>
            <Box className="iconndnum">
              <Box className="aligences">
                <HomeOutlinedIcon sx={{fontSize:'18px'}} />
              </Box>
              <Box className="aligences">{props.home}BHK</Box>
            </Box>
          </Box>

            <Box className="customx">
              <Menuicon />
            </Box>
        </Box>
      </CardActionArea>

      <Dialog
        open={openmainpop}
        onClose={closepopup}
        PaperProps={{
          style: { height: "700px", minWidth: "900px" },
        }}
      >
        <MainPopup  setopenmainpop={setopenmainpop}/>
      </Dialog>
    </Card>
  );
}

export default GridCard;
