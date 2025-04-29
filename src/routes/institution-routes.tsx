import InstitutionDashboard from "../pages/institution/dashboard";
import StudentTable from "../pages/institution/studentTable";
import TutorsTable from "../pages/institution/tutorsTable";
import CoursesTable from "../pages/institution/coursesTable";
import AssetTable from "../pages/institution/assetTable";
import TransactionTable from "../pages/institution/transactionTable";
import UploadedStatusTable from "../pages/institution/uploadedStatusTable";
import Notification from "../modules/institution/dashboard/notification";
import SettingsTable from "../pages/institution/settingsTable";
import JobsTable from "../pages/institution/jobsTable";
import CartTable from "../pages/institution/cartTable";
import MessageTable from "../pages/institution/messageTable";
import SubscriptionTable from "../pages/institution/subscriptionTable";
import JobDetails from "../pages/institution/Job-details";
import EditJob from "../pages/institution/editJobs";
import Orders from "../pages/students/orders";
import OrderDetails from "../pages/students/orders-details";

export const institutionRoutes = [
  {
    path: "/institution",
    children: [
      {
        index: true,
        element: <InstitutionDashboard />,
      },
      {
        path:"student",
        element: <StudentTable/>,
      },
      {
        path:"tutor",
        element: <TutorsTable/>,
      },
      {
        path:"courses",
        element: <CoursesTable/>,
      },
      {
        path:"assets",
        element: <AssetTable/>,
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
        path:"upload",
        element: <UploadedStatusTable/>,
      },
      {
        path:"notification",
        element: <Notification/>,
      },
      {
        path:"settings",
        element: <SettingsTable />,
      },
      {
        path:"jobs",
        element: <JobsTable />,
      },
      {
        path: "job/view/:jobId",
        element: <JobDetails />, // Add this when profile page is ready
      },
      {
        path: "jobs/edit/:jobId",
        element: <EditJob />,
      },
      {
        path:"cart",
        element: <CartTable />,
      },
      {
        path:"message",
        element: <MessageTable />,
      },
      {
        path:"subscription",
        element: <SubscriptionTable/>,
      },
    ],
  },
];
