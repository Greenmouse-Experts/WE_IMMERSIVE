import AdminDashboardLayout from "../layout/admin";
import SuperAdminDashboard from "../pages/admin/dashboard";


export const adminRoutes = [
    {
      path: "/super-admin",
      element: <AdminDashboardLayout />,
      children: [
        {
          index: true,
          element: <SuperAdminDashboard />,
        },
      ],
    },
  ];