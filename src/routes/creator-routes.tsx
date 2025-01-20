import CreateAsset from "../pages/creator/create-asset";
import CreatorAssetsScreen from "../pages/creator/creator-asset";
import CreatorPortfolio from "../pages/creator/creator-portfolio";
import CreatorDashboard from "../pages/creator/dashboard";
import EditJob from "../pages/creator/editJobs";
import CreatorNotificationScreen from "../pages/creator/notifications";
import CreatorOrders from "../pages/creator/orders";
import CreateJob from "../pages/shared/create";
import JobsScreen from "../pages/shared/job-screen";

export const creatorRoutes = [
  {
    path: "/creator",
    children: [
      {
        index: true,
        element: <CreatorDashboard />,
      },
      {
        path: "notification",
        element: <CreatorNotificationScreen />,
      },
      {
        path: "orders",
        element: <CreatorOrders />,
      },
      {
        path: "assets",
        element: <CreatorAssetsScreen />,
      },
      {
        path: "asset/create",
        element: <CreateAsset />, // Add this when profile page is ready
      },
      {
        path: "jobs",
        element: <JobsScreen />, // Add this when profile page is ready
      },
      {
        path: "jobs/create",
        element: <CreateJob />
      },
      {
        path: "jobs/edit/:id",
        element: <EditJob />
      },
      {
        path: "portfolio",
        element: <CreatorPortfolio />, // Add this when profile page is ready
      },
    ],
  },
];
