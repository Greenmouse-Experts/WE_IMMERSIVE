import AllCourses from "../pages/students/allCourses";
import StudentsDashboard from "../pages/students/dashboard";
import StudentsNotificationScreen from "../pages/students/notifications";
import OngoingCourses from "../pages/students/ongoingCourses";
import Orders from "../pages/students/orders";
import TransactionList from "../pages/students/transactions";
import StudentCartTable from "../pages/students/studentCartTable";
import SettingsTable from "../pages/students/settingsTable";

export const studentRoutes = [
  {
    path: "/students",
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
      {
        path: "cart",
        element: <StudentCartTable />,
      },
      {
        path: "cart",
        element: <StudentCartTable />,
      },
      {
        path: "settings",
        element: <SettingsTable />,
      },
    ],
  },
];
