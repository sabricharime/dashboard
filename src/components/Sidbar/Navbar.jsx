import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import { CropFree, Menu, MoreVert, Search, Settings } from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <IconButton color="inherit">
            {matches && <Menu color="inherit" />}
          </IconButton>
          <Typography variant="h6">Sabri</Typography>
        </Box>

        {matches ? (
          <MoreVert />
        ) : (
          <Box>
            <IconButton
              aria-label="button"
              onClick={() => alert("Button")}
              color="inherit"
            >
              <Search />
            </IconButton>
            <IconButton
              aria-label="button"
              onClick={() => alert("Button")}
              color="inherit"
            >
              <CropFree />
            </IconButton>
            <IconButton
              aria-label="button"
              onClick={() => alert("Button")}
              color="inherit"
            >
              <AppsIcon />
            </IconButton>
            <IconButton
              aria-label="button"
              onClick={() => alert("Button")}
              color="inherit"
            >
              <Avatar src="/2.jpg"></Avatar>

              <Chip label="sabri" color="primary" />
            </IconButton>
            <IconButton
              aria-label="button"
              onClick={() => alert("Button")}
              color="inherit"
            >
              <Settings />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
