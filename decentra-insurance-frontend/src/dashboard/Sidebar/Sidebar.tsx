import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PeopleIcon from "@mui/icons-material/People";
import { Home, Dashboard, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "/navbarlogo.webp";

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
      <div className='w-full'>
        <img src={logo} alt='' className='w-full h-16' />
      </div>

      <List>
        <ListItem component={Link} to='/dashboard'>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button component={Link} to='/products'>
          <ListItemIcon>
            <TimeToLeaveIcon />
          </ListItemIcon>
          <ListItemText primary='Products' />
        </ListItem>
        <ListItem button component={Link} to='/shop'>
          <ListItemIcon>
            <AddShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary='Shop' />
        </ListItem>
        <ListItem button component={Link} to='/request'>
          <ListItemIcon>
            <RequestPageIcon />
          </ListItemIcon>
          <ListItemText primary='Requests' />
        </ListItem>
        <ListItem button component={Link} to='/approve'>
          <ListItemIcon>
            <FactCheckIcon />
          </ListItemIcon>
          <ListItemText primary='Approve Requests' />
        </ListItem>
        <ListItem button component={Link} to='/users'>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary='Users' />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
