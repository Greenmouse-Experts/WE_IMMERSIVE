import StudentsDashboardLayout from "../layout/students";
import StudentsDashboard from "../pages/students/dashboard";

export const studentRoutes = [
  {
    path: "/students",
    element: <StudentsDashboardLayout />,
    children: [
      {
        index: true,
        element: <StudentsDashboard />,
      },
    ],
  },
];
