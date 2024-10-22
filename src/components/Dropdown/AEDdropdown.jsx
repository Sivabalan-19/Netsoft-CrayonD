import React from "react";
import { Box } from "@mui/material";

function AEDdropdown() {
  return (
    <Box style={{width:'100%', height:'100%'}}>
      <select name="curre" style={{backgroundColor:'transparent', border:'none', color:"#091B29"}}>
        <option value="AED" style={{color:'#091B29', fontWeight:'bold'}} selected>AED</option>
        <option value="PERC" style={{color:'#091B29', fontWeight:'bold'}}>%</option>
      </select>
    </Box>
  );
}

export default AEDdropdown;
