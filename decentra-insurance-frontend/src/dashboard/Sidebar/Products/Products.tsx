import React from "react";
import { Box, Typography } from "@mui/material";
import InsuranceCard from "../../components/Card/InsuranceCard";

function Products() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2, // spacing between cards
        justifyContent: "center", // center align the cards
      }}
    >
      <InsuranceCard />
      <InsuranceCard />
    </Box>
  );
}

export default Products;
