import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Box, Typography } from "@mui/material";

export default function PieChart() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      width={200}
      sx={{

        height:"200px",
        margin:{
          xs:"auto", 
          md:"0"
        },
        marginBlockStart:{
          xs:3,
          md:6
        }
      }}
    >
      <Typography variant="h3">Leads by Source</Typography>
      <Doughnut
        data={{
          labels: ["electronic", "clothes", "books"],
          datasets: [
            {
              label: "Electronic",
              data: [3000, 4200, 3500],
              borderColor: ["purple", "lightgreen", "#ff9900"],
              tension: 0.5,
              fill: true,
              backgroundColor: ["purple", "lightgreen", "#ff9900"],
              hoverOffset: 4,
              borderRadius: 5,
              spacing: 20,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },

          animation: {
            animateRotate: true,
          },
        }}
      />
    </Box>
  );
}
