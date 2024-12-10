import CreatorDashboardLayout from "../layout/creator";
import CreateAsset from "../pages/creator/create-asset";
import CreatorAssetsScreen from "../pages/creator/creator-asset";
import CreatorPortfolio from "../pages/creator/creator-portfolio";
import CreatorDashboard from "../pages/creator/dashboard";
import CreatorNotificationScreen from "../pages/creator/notifications";
import CreatorOrders from "../pages/creator/orders";
import JobsScreen from "../pages/shared/job-screen";


export const creatorRoutes = [
    {
      path: "/creator",
      element: <CreatorDashboardLayout />,
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
          path: "portfolio",
          element: <CreatorPortfolio />, // Add this when profile page is ready
        }
      ],
    },
  ];