import React from "react";
import "./App.css";
import Head from "./components/Header/Head";
import { Box } from "@mui/material";
import Subhead from "./components/Subhead/Subhead";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./Pages/MainPage";
import Pricingpop from "./components/Popup/PricingPopup/Pricingpop";
import AmenitiPop from "./components/Popup/AmenitiesPopup/AmenitiPop";

function App() {
  return (
    <Box className="App">
      <Box className="MainSpa">
        <MainPage />
      </Box>
    </Box>
  );
}

export default App;
