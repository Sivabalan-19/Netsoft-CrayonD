import React from 'react'
import '../../styles/Threepage.css'
import { Box } from '@mui/material'
import { Grid, Typography } from '@mui/material';
import imag from '../../assets/image.png'
import { TimelineDot } from '@mui/lab';


function LeadDetails() {


  const data = [
    {tite:'LEASE START DATE',date:'30 Jan 22'},
    {tite:'LEASE END DATE',date:'30 Jan 23'},
    {tite:'RENT START DATE',date:'30 Jan 23'},
    {tite:'GRACE PERIOD',date:'90 Days(Beginning)'}
  ]
  return (
    <Box className='leaddiv'>

      <Box className='leadheaddiv'>Lead Details</Box>

      <Box className="imgprofilecon">

        <Box className="imgprofile">

          <Box className="squimg"><img src={imag} alt="" style={{width:'80%',borderRadius:'6px', height:'60%'}} /></Box>
          <Box className="imgcont">

              <Box className='pronamedet'> 
                <Box className='proname'>Tom Cruise</Box>
                <Box className='profprof'>Prospect</Box>
              </Box>

              <Box className='profmobild'>
                <Box >+91 9090808012</Box>
                <Box className='dot'></Box>
                <Box>Tomcruise2515@mail.com</Box>
              </Box>

          </Box>
        </Box>
          
      </Box>


      <Box className='profetials'>Quotation Details</Box>

      <Grid container spacing={2} width="100%">
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Typography className="gridtite" variant="caption" color="#98A0AC" sx={{ fontSize: '10px' }}>
            {item.tite}
          </Typography>
          <Typography className="griddate" variant="body2" style={{ color: '#091B29', fontWeight: 700, fontSize: '12px' }}>
            {item.date}
          </Typography>
        </Grid>
      ))}
    </Grid>
      
    </Box>
  )
}

export default LeadDetails
