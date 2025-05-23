import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { landingRoutes } from "./routes/landing-routes";
import { authRoutes } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";
import { institutionRoutes } from "./routes/institution-routes";
import { adminRoutes } from "./routes/admin-routes";
import { creatorRoutes } from "./routes/creator-routes";
import { studentRoutes } from "./routes/student-routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import AuthMiddleware from "./middleware/auth";
import UserDashboardLayout from "./layout/user";
import CreatorDashboardLayout from "./layout/creator";
import InstitutionDashboardLayout from "./layout/institution";
import StudentsDashboardLayout from "./layout/students";
import PageNotFound from "./pages/PageNotFound";
import PaymentCallback from "./pages/shared/payment-callback";
import { useEffect } from "react";
import { initMixpanel, trackEvent } from "./helpers/mixpanelClient";

const App = () => {
  const user = useSelector((state: any) => state.userData.data); // Assuming user.role exists in userData

  useEffect(() => {
    initMixpanel();
  }, []);

  const router = createBrowserRouter([
    ...landingRoutes,
    ...authRoutes,
    ...adminRoutes,
    {
      path: "/user",
      element: (
        <AuthMiddleware role={user?.accountType} allowedRoles={["user"]}>
          <UserDashboardLayout />
        </AuthMiddleware>
      ),
      children: userRoutes,
    },
    {
      path: "/creator",
      element: (
        <AuthMiddleware role={user?.accountType} allowedRoles={["creator"]}>
          <CreatorDashboardLayout />
        </AuthMiddleware>
      ),
      children: creatorRoutes,
    },
    {
      path: "/institution",
      element: (
        <AuthMiddleware role={user?.accountType} allowedRoles={["institution"]}>
          <InstitutionDashboardLayout />
        </AuthMiddleware>
      ),
      children: institutionRoutes,
    },
    {
      path: "/students",
      element: (
        <AuthMiddleware role={user?.accountType} allowedRoles={["student"]}>
          <StudentsDashboardLayout />
        </AuthMiddleware>
      ),
      children: studentRoutes,
    },
    {
      path: "/payment/callback",
      element: <PaymentCallback />,
      // Add super-admin routes here if required
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  useEffect(() => {
    const unsubscribe = router.subscribe((state) => {
      if (state.historyAction === "PUSH" || state.historyAction === "POP") {
        trackEvent("Page Viewed", {
          path: state.location.pathname,
          search: state.location.search,
          fullUrl: window.location.href,
          title: document.title,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};

export default App;
