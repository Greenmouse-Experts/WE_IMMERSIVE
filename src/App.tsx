import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { landingRooutes } from './routes/landing-routes';
import { authRooutes } from './routes/auth-routes';

const router = createBrowserRouter([
  ...landingRooutes,
  ...authRooutes
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
