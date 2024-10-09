import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { landingRooutes } from './routes/landing-routes';

const router = createBrowserRouter([
  ...landingRooutes,
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
