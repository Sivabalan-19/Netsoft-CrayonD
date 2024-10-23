import React, { useContext, useState } from "react";
import "../../styles/MainSpace.css";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import MyContext from "../../context/Usecontext";
import Grid from "@mui/material/Grid";
import GridCard from "../GridCard/GridCard";
import MainPopup from "../Popup/Mainpop/MainPopup";

function UnitDetails() {
  const {data} = useContext(MyContext)
 


 



  return (
    <Box className="unitdetcon">
      <Box className="unitheadet">Unit Details</Box>

      <Box className="cardgridcon">
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} >
              <GridCard
                id={item.id}
                tit={item.tit}
                price={item.price}
                smaitit={item.smaitit}
                sqft={item.sqft}
                bed={item.bed}
                tub={item.tub}
                home={item.home}
                
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      
    </Box>
  );
}

export default UnitDetails;
