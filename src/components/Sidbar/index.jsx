import { Box, Drawer } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Listes from "../Lists";
import {
  General,
  Lists,
  Maintenance,
  Analytics,
  HomeList,
} from "../../config/lists";

function Desktop() {
  return (
    <Box
      sx={{
        flex: "1",
        transition: "all",
        transitionDuration: ".5",
        minWidth: "200px",
        maxWidth:200,
        padding: 3,
      }}
    >
      <Listes arr={HomeList} title={"MAIN"} />
      <Listes arr={Lists} title={"LISTS"} />
      <Listes arr={General} title={"GENERAL"} />
      <Listes arr={Maintenance} title={"MAINTENANCE"} />
      <Listes arr={Analytics} title={"ANALYTICS"} />
    </Box>
  );
}

function Mobile() {
  return <Drawer open={false}></Drawer>;
}

export default function SideBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? <Mobile /> : <Desktop />;
}
