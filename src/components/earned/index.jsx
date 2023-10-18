import React from "react";

import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Box, Typography } from "@mui/material";

export default function Earned() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      width={200}
      sx={{
        height: "200px",
        margin: {
          xs: "auto",
          md: "0",
        },
        marginBlockStart: {
          xs: 8,
          md:6
        },
      }}
    >
      <Typography variant="h3">Total Earned</Typography>
      <Bar
        data={{
          labels: [22, 45, 23, 25, 27, 30],
          datasets: [
            {
              label: ["earned"],
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
            tooltip: {
              callbacks: {
                title: (item) => {
                  return item[0].formattedValue + "$";
                },
              },
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
              ticks: {
                callback: (v) => "$" + v,
              },
            },
          },
        }}
        height={200}
      />
    </Box>
  );
}
