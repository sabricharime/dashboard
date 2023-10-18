import { Box, Paper, Typography } from "@mui/material";
import { user } from "../../config/users";

export default function Users() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBlock: {
            xs:2,
            md:3
          },
          paddingInline: {
            xs:3,
            md:1
          },
        }}
      >
        <Typography variant="h3" gutterBottom>
          Top Deals
        </Typography>
        {user.map((item, idx) => (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                display: "inline-block",
              }}
              variant="body2"
              gutterBottom
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                display: "inline-block",
              }}
              variant="body1"
              gutterBottom
            >
              ${item.price}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
