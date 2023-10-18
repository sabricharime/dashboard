import { Analytics,  } from "@mui/icons-material";
import { Paper, Box, Typography, Chip } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

export default function SmallChart({
  title,
  chartColor,
  number1,
  number2,
  status,
  color,
}) {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        flex: 1,
        minWidth: {
          md: 180,
        },
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: { color },
          }}
        >
          <Analytics size={28} />
          <Typography variant="body1" color={"GrayText"}>
            {title}
          </Typography>
        </Box>

        <Box width={80} height={80}>
          <Line
            data={{
              labels: [22, 45, 23, 25, 27, 30],
              datasets: [
                {
                  label: ["Visitor"],
                  data: [200, 400, 500, 300, 400, 200],

                  borderRadius: 3,
                  tension: 0.5,
                  pointBackgroundColor: "transparent",
                  pointBorderColor: "transparent",
                  borderColor: `${chartColor}`,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },

              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 2,
          paddingBlock: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
          }}
        >
          <Typography variant="h4" color={"GrayText"}>
            {number1}
          </Typography>
          <Typography variant="body1" color={"GrayText"}>
            <Link to={"#"} style={{ textDecoration: "none", color: "inherit" }}>
              View All
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
          }}
        >
          <Typography variant="h4" color={"GrayText"}>
            <Chip label={number2} color={status} variant="contained" />
          </Typography>
          <Typography variant="body1" color={"GrayText"}>
            <Link to={"#"} style={{ textDecoration: "none", color: "inherit" }}>
              This month
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
