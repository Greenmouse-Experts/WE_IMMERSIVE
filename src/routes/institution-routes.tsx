import InstitutionDashboard from "../pages/institution/dashboard";

export const institutionRoutes = [
  {
    path: "/institution",
    children: [
      {
        index: true,
        element: <InstitutionDashboard />,
      },
    ],
  },
];
