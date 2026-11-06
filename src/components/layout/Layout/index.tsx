import { Box } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SystemStatus from "@/components/layout/SystemStatus";

function Layout() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <SystemStatus />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <ScrollRestoration />
    </Box>
  );
}

export default Layout;

