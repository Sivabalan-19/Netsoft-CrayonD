import React from "react";

function AEDdropdown() {
  return (
    <div style={{width:'100%', height:'100%'}}>
      <select name="curre" style={{backgroundColor:'transparent', border:'none', color:"#091B29"}}>
        <option value="AED" style={{color:'#091B29'}} selected>AED</option>
        <option value="PERC" style={{color:'#091B29'}}>%</option>
      </select>
    </div>
  );
}

export default AEDdropdown;
