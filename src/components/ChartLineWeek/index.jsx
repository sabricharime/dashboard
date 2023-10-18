import { Paper, Typography } from "@mui/material";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChartWeek() {
  return (
    <Paper
      variant="outlined"
      sx={{
        paddingBlock: {
          xs: 5,
          md: 2,
        },
        maxWidth: "100%",
        width: "100%",
        height:300
      }}
    >
      <Typography variant="h3" gutterBottom sx={{
        marginLeft:2
      }}> 
        Revenue Analytics
      </Typography>
      <Line
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Electronic",
              data: [3000, 4200, 3500, 700, 9000, 8500, 8000],
              borderColor: "purple",
              tension: 0.5,
              fill: true,
              backgroundColor:"rgba(200,00,200,.1)"
            },
            {
              label: "cloths",
              data: [2000, 1200, 7500, 1200, 4000, 3500, 1000],
              borderColor: "lightgreen",
              backgroundColor:'rgba(50,255,50,.1)',
              tension: 0.5,
              fill: true,
            },
            {
              label: "books",
              data: [4000, 1200, 800, 400, 200, 500, 700],
              borderColor: "#ff9900",
              backgroundColor:'rgba(200,200,0,.6)',
              tension: 0.5,
              fill: true,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display:false
            },
            
          },
        }}
        height={200}
        width={400}
      />
    </Paper>
  );
}
