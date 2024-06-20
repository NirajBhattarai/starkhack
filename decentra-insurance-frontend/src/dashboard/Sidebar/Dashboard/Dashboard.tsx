import React from "react";
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ConstructionIcon from "@mui/icons-material/Construction";
import PeopleIcon from "@mui/icons-material/People";
import Products from "../Products/Products";
import Graph from "../../components/Graph/Graph";
import DriverCard from "../../components/Card/DriverCard";

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //  gap: 0, // Space between Products and Graph
        padding: 2,
      }}
    >
      {/* this is upper box for products and graph */}
      <Box
        sx={{
          display: "flex",
          gap: 2, // Space between Products and Graph
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap", // Allow wrapping for responsiveness
        }}
      >
        <Box sx={{ flex: "1 1 45%" }}>
          <Products />
        </Box>
        <Box sx={{ flex: "1 1 45%" }}>
          <Graph />
        </Box>
      </Box>
      {/* this is downside box for small cards */}
      <Box
        sx={{
          display: "flex",
          gap: 2, // Space between small cards
          justifyContent: "center",
          flexWrap: "wrap", // Allow wrapping for responsiveness
          marginTop: 2,
        }}
      >
        <DriverCard
          heading='Truck Drivers'
          drivers={15}
          icon={LocalShippingIcon}
        />
        <DriverCard heading='Workshops' drivers={30} icon={ConstructionIcon} />
        <DriverCard heading='Visitors' drivers={45} icon={PeopleIcon} />
      </Box>
    </Box>
  );
}

export default Dashboard;
