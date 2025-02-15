import UserDashboard from "../pages/user/dashboard";
import OngoingCourses from "../pages/user/OngoingCourses";

export const userRoutes = [
  {
    path: "/user",
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: 'ongoing-courses',
        element: <OngoingCourses />,
      },
    ],
  },
];
