import InstitutionDashboard from "../pages/institution/dashboard";
import StudentTable from "../pages/institution/studentTable";
import TutorsTable from "../pages/institution/tutorsTable";
import CoursesTable from "../pages/institution/coursesTable";
import AssetTable from "../pages/institution/assetTable";
import TransactionTable from "../pages/institution/transactionTable";
import UploadedStatusTable from "../pages/institution/uploadedStatusTable";

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
        path:"transaction",
        element: <TransactionTable/>,
      },
      {
        path:"upload",
        element: <UploadedStatusTable/>,
      },
    ],
  },
];
