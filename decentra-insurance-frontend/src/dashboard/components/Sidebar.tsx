import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Dashboard, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem component={Link} to='/home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={Link} to='/dashboard'>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button component={Link} to='/settings'>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
