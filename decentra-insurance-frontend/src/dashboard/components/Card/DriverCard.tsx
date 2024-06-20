import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material"; // Type for MUI icons

interface DriverCardProps {
  heading: string;
  drivers: number;
  icon: SvgIconComponent;
}

const DriverCard: React.FC<DriverCardProps> = ({
  heading,
  drivers,
  icon: IconComponent,
}) => {
  return (
    <Card sx={{ maxWidth: 200, margin: "0 auto", padding: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconComponent sx={{ mr: 1 }} />
          <Typography variant='h6'>{heading}</Typography>
        </Box>
        <Typography variant='h4' sx={{ mb: 1 }}>
          {drivers}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Members
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DriverCard;
