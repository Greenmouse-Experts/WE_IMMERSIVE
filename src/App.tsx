import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { landingRoutes } from './routes/landing-routes';
import { authRoutes } from './routes/auth-routes';
import { userRoutes } from './routes/user-routes';


const router = createBrowserRouter([
  ...landingRoutes,
  ...authRoutes,
  ...userRoutes,
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
