import { createTheme } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";
import Home from "../pages/home";
import BackUp from "../pages/backup";
import Calendar from "../pages/calendar";
import Charts from "../pages/charts";
import Elements from "../pages/element";
import Forms from "../pages/forms";
import Log from "../pages/log";
import Notes from "../pages/notes";
import Orders from "../pages/orders";
import Posts from "../pages/posts";
import Products from "../pages/products";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import Users from "../pages/users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/backup", element: <BackUp /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/charts", element: <Charts /> },
      { path: "/elements", element: <Elements /> },
      { path: "/forms", element: <Forms /> },
      { path: "/log", element: <Log /> },
      { path: "/notes", element: <Notes /> },
      { path: "/orders", element: <Orders /> },
      { path: "/posts", element: <Posts /> },
      { path: "/products", element: <Products /> },
      { path: "/profile", element: <Profile /> },
      { path: "/settings", element: <Settings /> },
      { path: "/users", element: <Users /> },
    ],
  },
]);

export const theme = createTheme({
  palette: {
    mode: "light",
    
  },
  typography: {
    fontSize: 14,

    body1: {
      fontSize: 14,
    },
    body2: { fontSize: 14 },
    h1: { fontSize: 40 },
    h2: { fontSize: 32 },
    h3: { fontSize: 24, fontWeight: 700 },
    h4: { fontSize: 18 },
    h5: { fontSize: 16 },
    h6: { fontSize: 14 },
  },
});
