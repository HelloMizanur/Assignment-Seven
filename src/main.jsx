import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layout/RootLayout.jsx";
import HomePage from "./Pages/homePage/HomePage.jsx";
import TimelinePage from "./Pages/timelinePage/TimelinePage.jsx";
import StatsPage from "./Pages/statsPage/StatsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/timeline", Component: TimelinePage },
      { path: "/stats", Component: StatsPage },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
