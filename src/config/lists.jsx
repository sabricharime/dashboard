import {
  Assignment,
  Backup,
  BarChart,
  BorderColor,
  CalendarMonth,
  DisplaySettings,
  Grading,
  GridView,
  HomeOutlined,
  Person,
  Restore,
  Settings,
  ShoppingBag,
} from "@mui/icons-material";

export const HomeList = [
  {
    path: "/",
    name: "Home",
    icon: <HomeOutlined />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <Person />,
  },
];
export const Lists = [
  {
    path: "/users",
    name: "Users",
    icon: <Person />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <ShoppingBag />,
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <Grading />,
  },
  {
    path: "/posts",
    name: "Posts",
    icon: <Assignment />,
  },
];
export const General = [
  {
    path: "/elements",
    name: "Elements",
    icon: <GridView />,
  },
  {
    path: "/notes",
    name: "Notes",
    icon: <BorderColor />,
  },
  {
    path: "/forms",
    name: "Forms",
    icon: <DisplaySettings />,
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: <CalendarMonth />,
  },
];
export const Maintenance = [
  {
    path: "/settings",
    name: "Settings",
    icon: <Settings />,
  },
  {
    path: "/backup",
    name: "BackUps",
    icon: <Backup />,
  },
];

export const Analytics = [
  {
    path: "/charts",
    name: "Charts",
    icon: <BarChart />,
  },
  {
    path: "/log",
    name: "Log",
    icon: <Restore />,
  },
];
