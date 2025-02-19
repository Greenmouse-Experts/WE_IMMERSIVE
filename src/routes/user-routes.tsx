import UserDashboard from "../pages/user/dashboard";
import AvailableCourses from "../pages/user/AllCourses";
import OngoingCourses from "../pages/user/OngoingCourses";
import CourseDetails from "../pages/user/CourseDetails";
import AvailableAssets from "../pages/user/AllAssets";
import Notifications from "../pages/user/Notifications";
import Transactions from "../pages/user/Transactions";
import AvailableJobs from "../pages/user/AllJobs";
import SaveJobs from "../pages/user/SavedJobs";
import CartPage from "../pages/user/CartPage";
import Orders from "../pages/user/Orders";
import Settings from "../pages/user/ProfilePage";


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
        path: 'course-details',
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
        element: <CartPage />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'saved-jobs',
        element: <SaveJobs />,
      },
      
    ],
  },
];
