import UserDashboardLayout from "../layout/user";
import UserDashboard from "../pages/user/dashboard";

export const userRoutes = [
    {
      path: "/user",
      element: <UserDashboardLayout />,
      children: [
        {
          index: true,
          element: <UserDashboard />,
        },
      ],
    },
  ];