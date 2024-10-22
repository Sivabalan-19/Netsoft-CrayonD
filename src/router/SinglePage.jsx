import React from 'react'
import '.././App.css'
import Head from '../components/Header/Head'
import Sidebar from '../components/Sidebar/Sidebar'
import MainPage from '../Pages/MainPage'
import { Box } from '@mui/material'
function SinglePage() {
  return (
    <Box className="Singlepage">
      <Box className="Mainhead">
        <Head />
      </Box>
      <Box className="Mainbody">
        <Box className="MainSide">
          <Sidebar />
        </Box>
        <Box className="MainSpa">
          <MainPage />
        </Box>
      </Box>
    </Box>
  )
}

export default SinglePage
