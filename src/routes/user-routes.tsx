import UserDashboard from "../pages/user/dashboard";
import OngoingCourses from "../pages/user/OngoingCourses";
import CourseDetails from "../pages/students/CourseDetails";
import AvailableAssets from "../pages/user/AllAssets";
import Notifications from "../pages/user/Notifications";
import Transactions from "../pages/user/Transactions";
import AvailableJobs from "../pages/user/AllJobs";
import SaveJobs from "../pages/user/SavedJobs";
import Orders from "../pages/user/Orders";
import JobDescription from "../pages/user/JobDescription";
import Settings from "../pages/user/ProfilePage";
import AvailableCourses from "../pages/students/allCourses";
import OrderDetails from "../pages/students/orders-details";
import StudentCart from "../modules/student/dashboard/studentCart";


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
      {
        path: 'all-courses',
        element: <AvailableCourses />,
      },
      {
        path: 'course/:courseId',
        element: <CourseDetails />,
      },
      {
        path: 'assets',
        element: <AvailableAssets />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
      {
        path: 'jobs',
        element: <AvailableJobs />,
      },
      {
        path: 'cart',
        element: <StudentCart />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: "orders/:orderId",
        element: <OrderDetails />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'saved-jobs',
        element: <SaveJobs />,
      },

      {
        path: 'job-details/:jobId',
        element: <JobDescription />,
      },
      
    ],
  },
];
