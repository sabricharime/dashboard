import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Box, Typography } from "@mui/material";

export default function TotalVisite() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3} width={"100%"}>
      <Typography variant="h3">Total Visit</Typography>
      <Bar
        data={{
          labels: [22, 45, 23, 25, 27, 30],
          datasets: [
            {
              label: ["Visitor"],
              data: [200, 400, 500, 300, 400, 200],
              backgroundColor: ["lightgreen"],
              borderRadius: 3,
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
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
        height={200}
      />
    </Box>
  );
}
