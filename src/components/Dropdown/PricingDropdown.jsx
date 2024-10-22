import React from 'react'
import { Box } from '@mui/material'
function PricingDropdown(props) {
  return (
    <Box style={{width:'100%', height:'100%'}}>
      <select name="curre" style={{backgroundColor:'transparent', border:'none', color:"#091B29"}}>
        <option  style={{color:'#091B29'}} selected>{props.name}</option>
        <option value="AED" style={{color:'#091B29'}} >AED</option>
        <option value="PERC" style={{color:'#091B29'}}>%</option>
      </select>
    </Box>
  )
}

export default PricingDropdown
