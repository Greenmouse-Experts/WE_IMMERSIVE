import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { landingRoutes } from "./routes/landing-routes";
import { authRoutes } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";
import { institutionRoutes } from "./routes/institution-routes";
import { adminRoutes } from "./routes/admin-routes";
import { creatorRoutes } from "./routes/creator-routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  ...landingRoutes,
  ...authRoutes,
  ...userRoutes,
  ...institutionRoutes,
  ...adminRoutes,
  ...creatorRoutes,
]);

function App() {
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
}

export default App;
