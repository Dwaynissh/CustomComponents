import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/LayoutHolder/Layout";
import HomeScreen from "../Pages/HomeScreen";
import AllComp from "../Pages/AllComp";
import SideNavComp from "../Pages/CompHolder/SideNavComp";
import SideNavCode from "../Pages/Codes/SideNavCode";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/allcomp",
        element: <AllComp />,
      },
      {
        path: "/sidenavcomp",
        element: <SideNavComp />,
      },
      {
        path: "/sidenavcode",
        element: <SideNavCode />,
      },
    ],
  },
]);
