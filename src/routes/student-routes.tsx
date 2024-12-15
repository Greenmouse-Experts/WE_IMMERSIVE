import StudentsDashboardLayout from "../layout/students";
import AllCourses from "../pages/students/allCourses";
import StudentsDashboard from "../pages/students/dashboard";
import StudentsNotificationScreen from "../pages/students/notifications";
import OngoingCourses from "../pages/students/ongoingCourses";
import Orders from "../pages/students/orders";
import TransactionList from "../pages/students/transactions";

export const studentRoutes = [
  {
    path: "/students",
    element: <StudentsDashboardLayout />,
    children: [
      {
        index: true,
        element: <StudentsDashboard />,
      },
      {
        path: "ongoing-courses",
        element: <OngoingCourses />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "notification",
        element: <StudentsNotificationScreen />,
      },
      {
        path: "transaction",
        element: <TransactionList />,
      },
    ],
  },
];
