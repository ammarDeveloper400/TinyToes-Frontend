import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  ListItemButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Services" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar position="fixed">
        <Toolbar>
          {/* Menu Icon for Small Screens */}
          {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Responsive App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for Larger Screens */}
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={isSmallScreen ? openDrawer : true}
        onClose={handleDrawerToggle}
        sx={{
          width: 240,
          // flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          paddingTop: theme.spacing(8),
          paddingLeft: isSmallScreen ? 0 : 30,
          paddingRight: 2,
          paddingBottom: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the Responsive Layout
        </Typography>
        <Typography variant="body1">
          This is a simple responsive layout using MUI v6 with an AppBar and
          Drawer. Resize the window to see how the layout adapts!
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
