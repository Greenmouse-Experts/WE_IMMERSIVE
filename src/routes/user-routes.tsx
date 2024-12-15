import UserDashboard from "../pages/user/dashboard";

export const userRoutes = [
  {
    path: "/user",
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
    ],
  },
];
