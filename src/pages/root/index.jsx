
import { Box } from "@mui/material";
import {  Outlet } from "react-router-dom";

import SideBar from "../../components/Sidbar";
import Navbar from "../../components/Sidbar/Navbar";

export default function Root() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          gap: 4,
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* Menu  */}
        <SideBar />
        <Box sx={{ flex: "4", padding: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
  