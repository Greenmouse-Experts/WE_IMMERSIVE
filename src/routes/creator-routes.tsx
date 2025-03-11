import CreateLessons from "../modules/creator/courses/createLessons";
import CreateModules from "../modules/creator/courses/createModules";
import CreateAsset from "../pages/creator/create-asset";
import CreateCourses from "../pages/creator/create-courses";
import CreatorAssetsScreen from "../pages/creator/creator-asset";
import CreatorCoursesScreen from "../pages/creator/creator-courses";
import CreatorPortfolio from "../pages/creator/creator-portfolio";
import CreatorDashboard from "../pages/creator/dashboard";
import EditJob from "../pages/creator/editJobs";
import CreatorNotificationScreen from "../pages/creator/notifications";
import CreatorOrders from "../pages/creator/orders";
import CreateJob from "../pages/shared/create";
import JobsScreen from "../pages/shared/job-screen";
import SettingsTable from "../pages/creator/settingsTable";
import EditAsset from "../pages/creator/edit-asset";
import JobDetails from "../pages/creator/Job-details";

export const creatorRoutes = [
  {
    path: "/creator",
    children: [
      {
        index: true,
        element: <CreatorDashboard />,
      },
      {
        path: "notification",
        element: <CreatorNotificationScreen />,
      },
      {
        path: "orders",
        element: <CreatorOrders />,
      },
      {
        path: "assets",
        element: <CreatorAssetsScreen />,
      },
      {
        path: "courses",
        element: <CreatorCoursesScreen />,
      },
      {
        path: "courses/create/modules",
        element: <CreateModules />,
      },
      {
        path: "courses/create/modules/lessons/:id",
        element: <CreateLessons />,
      },
      {
        path: "courses/create",
        element: <CreateCourses />,
      },
      {
        path: "asset/create",
        element: <CreateAsset />, // Add this when profile page is ready
      },
      {
        path: "asset/edit/:assetId",
        element: <EditAsset />, // Add this when profile page is ready
      },
      {
        path: "jobs",
        element: <JobsScreen />, // Add this when profile page is ready
      },
      {
        path: "job/view/:jobId",
        element: <JobDetails />, // Add this when profile page is ready
      },
      {
        path: "jobs/create",
        element: <CreateJob />,
      },
      {
        path: "jobs/edit/:jobId",
        element: <EditJob />,
      },
      {
        path: "settings",
        element: <SettingsTable />,
      },
      {
        path: "portfolio",
        element: <CreatorPortfolio />, // Add this when profile page is ready
      },
    ],
  },
];
