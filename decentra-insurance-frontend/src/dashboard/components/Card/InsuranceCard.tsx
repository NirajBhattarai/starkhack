import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

const InsuranceCard = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <MonitorHeartIcon sx={{ mr: 1 }} />
          <Typography variant='h6'>Top 5 Insurances</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[
            "Insurance 1",
            "Insurance 2",
            "Insurance 3",
            "Insurance 4",
            "Insurance 5",
          ].map((label, index) => (
            <Button
              key={index}
              variant='contained'
              sx={{ borderRadius: "20px" }}
            >
              {label}
            </Button>
          ))}
          <Button variant='outlined' sx={{ alignSelf: "flex-end", mt: 1 }}>
            See...
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InsuranceCard;
