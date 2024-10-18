import React from "react";
import Card from "@mui/material/Card";
import '../../styles/Head.css'
import CardMedia from "@mui/material/CardMedia";
import Gridimg from "../../assets/Gridimg.png";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import { Box } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import "../../styles/Threepage.css";
import CardActionArea from "@mui/material/CardActionArea";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Menuicon from "../MenuSidebar/Menuicon";
function GridCard(props) {
  return (
    <Card sx={{ width: "100%", height: "100%", display: "flex" }}>
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
    width: "95%",
    display: "flex",
    alignItems: "center",
    position: 'relative',
  }}
>
  <CardMedia
    component="img"
    className="cardimgonle"
    image={Gridimg}
    alt="green iguana"
    style={{ width: '100%', height: '100%' }} // Ensure image fills the box
  />
  <Fab sx={{ position: 'absolute', display: 'flex', top: '5px', right: '5px', height: '2px', width: '20px' }}>
    <AddIcon sx={{ fontSize: '12px' }} />
  </Fab>
</Box>


        <Box className="cardconten">
          <Box className="cardnampr">
            <Box className="cardnam">{props.tit}</Box>
            <Box className="cardproc">${props.price}</Box>
          </Box>

          <Box className="cardsq">
            <Box>{props.smaitit}</Box>
            <Box className="dot"></Box>
            <Box>{props.sqft}</Box>
          </Box>


          <Box className="iconsanddot">
            <Box className="iconndnum">
              <Box className="aligences"><HotelOutlinedIcon/></Box>
              <Box className="aligences">{props.bed}</Box>
            </Box>
            <Box className="dot"></Box>
            <Box className="iconndnum">
              <Box className="aligences"><BathtubOutlinedIcon/></Box>
              <Box className="aligences">{props.tub}</Box>
            </Box>
            <Box className="dot"></Box>
            <Box className="iconndnum">
              <Box className="aligences"><HomeOutlinedIcon/></Box>
              <Box className="aligences">{props.home}BHK</Box>
            </Box>
          </Box>  

          <Box className="customx">
            <Menuicon/>
          </Box>
          
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default GridCard;
