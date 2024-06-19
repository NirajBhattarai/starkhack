import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* <Header /> */}
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}></Box>
      </Box>
    </Box>
  );
}

export default App;
