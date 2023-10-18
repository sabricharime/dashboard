import { Box, Button, Stack, Typography } from "@mui/material";

import React from "react";
import CardProfile from "../../components/userCard";
import RowInput, { RowSelect } from "../../components/form";

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography variant="h3">Profile</Typography>
      <Stack
        direction={{
          sx: "column",
          lg: "row",
        }}
        spacing={4}
      >
        <CardProfile />
        <Box
          sx={{
            flex: 1,
            display: "grid",
            placeItems: "center",
            marginBlockStart: 3,
          }}
          component={"form"}
        >
          <Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant="h3">Profile</Typography>
              <Typography variant="body1">
                The information can be edited
              </Typography>
            </Box>
            ;
            <RowInput />
            <RowInput />
            <RowSelect />
            <Button fullWidth variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
