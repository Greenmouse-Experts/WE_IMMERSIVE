import StudentsDashboard from "../pages/students/dashboard";
import StudentsNotificationScreen from "../pages/students/notifications";
import AvailableCourses from "../pages/students/allCourses";
import OngoingCourse from "../pages/students/OngoingCourse";
import CourseDetails from "../pages/students/CourseDetails";
import Orders from "../pages/students/orders";
import TransactionList from "../pages/students/transactions";
import StudentCartTable from "../pages/students/studentCartTable";
import SettingsTable from "../pages/students/settingsTable";
import OrderDetails from "../pages/students/orders-details";

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
        element: <OngoingCourse />,
      },
      {
        path: 'all-courses',
        element: <AvailableCourses />,
      },
      {
        path: 'course/:courseId',
        element: <CourseDetails />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "orders/:orderId",
        element: <OrderDetails />,
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
      // {
      //   path: "cart",
      //   element: <StudentCartTable />,
      // },
      {
        path: "settings",
        element: <SettingsTable />,
      },
    ],
  },
];
