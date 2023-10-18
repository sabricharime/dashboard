import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { router, theme } from "./config";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
