import InstitutionDashboardLayout from "../layout/institution";
import InstitutionDashboard from "../pages/institution/dashboard";


export const institutionRoutes = [
    {
      path: "/institution",
      element: <InstitutionDashboardLayout />,
      children: [
        {
          index: true,
          element: <InstitutionDashboard />,
        },
      ],
    },
  ];