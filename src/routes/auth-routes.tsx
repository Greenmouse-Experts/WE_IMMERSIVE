import AuthLayout from "../layout/auth";
import ForgotPassword from "../pages/auth/forget-password";
import UserLogin from "../pages/auth/login";
import UserRegister from "../pages/auth/register";

export const authRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <UserLogin />,
      },
      {
        path: 'register',
        element: <UserRegister />,
      },
      {
        path: 'forget-password',
        element: <ForgotPassword />,
      },
    ],
  },
];
