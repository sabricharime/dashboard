import { Box, Grid } from "@mui/material";
import Users from "../../components/Users";
import TotalVisite from "../../components/visit";
import SmallChart from "../../components/smallCardCharts";
import LineChartWeek from "../../components/ChartLineWeek";
import Pie from "../../components/ChartDoughnut";
import Earned from "../../components/earned";

export default function Home() {
  return (
    <Grid
      padding={0}
      margin={0}
      container
      spacing={{
        xs: 0,
        md: 0,
      }}
    >
      <Grid item xs={11} sm={9} md={3} lg={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Users />
          <TotalVisite />
        </Box>
      </Grid>
      <Grid item xs={11} sm={12} md={8} lg={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            paddingInline: {
              xs: 0,
              md: 2,
            },
            paddingBlock: 3,
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <SmallChart
              chartColor={"purple"}
              title={`Total  users`}
              color={"purple"}
              number1={"11.238"}
              number2={"45%"}
              status={"success"}
            />
            <SmallChart
              chartColor={"lightblue"}
              title={"Total Products"}
              color={"lightblue"}
              number1={"238"}
              number2={"21%"}
              status={"success"}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <SmallChart
              chartColor={"#ffbb00"}
              title={"red"}
              color={"#ffbb00"}
              number1={"2.6"}
              number2={"12%"}
              status={"success"}
            />
            <SmallChart
              chartColor={"#995500"}
              title={"red"}
              color={"#995500"}
              number1={"$56.432"}
              number2={"-12%"}
              status={"error"}
            />
          </Box>
        </Box>

        <Box>
          <LineChartWeek />
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              lg: "column",
              md:"row",
              xs: "column",
            },
            gap:6
          }}
        >
          <Pie />
          <Earned />
        </Box>
      </Grid>
    </Grid>
  );
}
