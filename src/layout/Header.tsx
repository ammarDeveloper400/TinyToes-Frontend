import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* Conditionally render elements for small screens */}
        {!isSmallScreen && (
          <Box>{/* Add profile or other components here */}</Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
