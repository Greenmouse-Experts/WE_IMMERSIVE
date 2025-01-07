import AdminDashboardLayout from "../layout/admin";
import AllCreators from "../pages/admin/allCreators";
import AllInstitutions from "../pages/admin/allInstitutions";
import AllStudents from "../pages/admin/allStudents";
import AllUsers from "../pages/admin/allUsers";
import CreateAsset from "../pages/admin/assets/createAssets";
import DigitalAssets from "../pages/admin/assets/digitalAssets";
import PhysicalAssets from "../pages/admin/assets/physicalAssets";
import SuperAdminDashboard from "../pages/admin/dashboard";
import GeneralUsers from "../pages/admin/generalUsers";
import Jobs from "../pages/admin/jobs";
import UploadRequests from "../pages/admin/uploadRequests";

export const adminRoutes = [
  {
    path: "/super-admin",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: <SuperAdminDashboard />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "general-users",
        element: <GeneralUsers />,
      },
      {
        path: "all-creators",
        element: <AllCreators />,
      },
      {
        path: "all-institutions",
        element: <AllInstitutions />,
      },
      {
        path: "all-students",
        element: <AllStudents />,
      },
      {
        path: "digitalAssets",
        element: <DigitalAssets />,
      },
      {
        path: "assets/create",
        element: <CreateAsset />,
      },
      {
        path: "physicalAssets",
        element: <PhysicalAssets />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "upload-requests",
        element: <UploadRequests />,
      }
    ],
  },
];
