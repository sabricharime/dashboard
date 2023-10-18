import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Listes = ({ arr, title }) => {

  const location = useLocation()
  const theme = useTheme();
  return (
    <List>
      <Typography variant="body2" color="GrayText">
        {title}
      </Typography>
      {Array.isArray(arr) &&
        arr.map((item, idx) => (
          <ListItemButton
            button="true"
            
            components={Link}
            href={item.path}
            key={idx}
            color="primary"
            sx={{
                borderRadius:1,
                marginBlock:.5,
              background:
               location.pathname === item.path
                  ? theme.palette.mode === "dark"
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark
                  : "inherit",
              color:
                location.pathname === item.path
                  ? theme.palette.mode === "dark"
                    ? theme.palette.primary.contrastText
                    : theme.palette.primary.contrastText
                  : "inherit",
              "&:hover": {
                background:
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark,
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.contrastText
                    : theme.palette.primary.contrastText,
              },
            }}
          >
            <ListItemIcon
              
              sx={{
                color:
                 location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? theme.palette.primary.contrastText
                      : theme.palette.primary.contrastText
                    : "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.name}  sx={{
                fontWeight:600
            }}/>
          </ListItemButton>
        ))}
    </List>
  );
};

export default Listes;
