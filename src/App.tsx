import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { landingRoutes } from './routes/landing-routes';
import { authRoutes } from './routes/auth-routes';
import { userRoutes } from './routes/user-routes';
import { institutionRoutes } from './routes/institution-routes';


const router = createBrowserRouter([
  ...landingRoutes,
  ...authRoutes,
  ...userRoutes,
  ...institutionRoutes
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
