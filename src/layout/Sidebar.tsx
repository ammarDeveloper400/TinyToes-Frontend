import { useState } from "react";
import {
  Drawer as MuiDrawer,
  List,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens (sm or smaller)

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Only show the menu icon on small screens */}
      {isSmallScreen && (
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ marginLeft: 2, marginTop: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <MuiDrawer
        open={open}
        onClose={toggleDrawer}
        variant={isSmallScreen ? "temporary" : "permanent"} // Switch between permanent and temporary variant
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            flexGrow: 1,
            boxSizing: "border-box",
          },
        }}
      >
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
            <Divider />
            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
