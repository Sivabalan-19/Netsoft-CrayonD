import React, { useState } from "react";
import "../../styles/MainSpace.css";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import GridCard from "../GridCard/GridCard";
import MainPopup from "../Popup/Mainpop/MainPopup";

function UnitDetails() {

 

  const data = [
    {
      tit: "Jumeirah Estate",
      price: 1200,
      smaitit: "Jumeirah Estate",
      sqft: 2000,
      bed: 2,
      tub: 2,
      home: 2,
    },
    {
      tit: "Jumeirah Estate",
      price: 1200,
      smaitit: "Jumeirah Estate",
      sqft: 2000,
      bed: 2,
      tub: 2,
      home: 2,
    },
    {
      tit: "Jumeirah Estate",
      price: 1200,
      smaitit: "Jumeirah Estate",
      sqft: 2000,
      bed: 2,
      tub: 2,
      home: 2,
    },
    {
      tit: "Jumeirah Estate",
      price: 1200,
      smaitit: "Jumeirah Estate",
      sqft: 2000,
      bed: 2,
      tub: 2,
      home: 2,
    },
    {
      tit: "Jumeirah Estate",
      price: 1200,
      smaitit: "Jumeirah Estate",
      sqft: 2000,
      bed: 2,
      tub: 2,
      home: 2,
    },
  ];

  return (
    <Box className="unitdetcon">
      <Box className="unitheadet">Unit Details</Box>

      <Box className="cardgridcon">
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <GridCard
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
