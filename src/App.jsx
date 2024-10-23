import React from "react";
import "./App.css";
import { MyProvider } from "./context/Usecontext";
import { Box } from "@mui/material";
import SinglePage from "./router/SinglePage";

function App() {
  return (
    <MyProvider>
      <Box className="App">
        <SinglePage/>
      </Box>
    </MyProvider>
  );
}

export default App;
