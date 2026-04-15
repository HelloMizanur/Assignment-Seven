import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/homePage/HomePage";
import TimelinePage from "../Pages/timelinePage/TimelinePage";
import StatsPage from "../Pages/statsPage/StatsPage";
import NotFoundPage from "../Pages/notFoundPage/NotFoundPage";
import FriendDetails from "../Pages/friendsDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "/timeline", Component: TimelinePage },
      { path: "/stats", Component: StatsPage },
      { path: "/friendDetail/:id", Component: FriendDetails },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);
