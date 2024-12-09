import CreatorDashboardLayout from "../layout/creator";
import CreateAsset from "../pages/creator/create-asset";
import CreatorAssetsScreen from "../pages/creator/creator-asset";
import CreatorDashboard from "../pages/creator/dashboard";
import CreatorNotificationScreen from "../pages/creator/notifications";
import CreatorOrders from "../pages/creator/orders";


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
        }
      ],
    },
  ];