import React from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import Header from "./Header";
import Drawer from "./Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Drawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
};

export default AppLayout;
