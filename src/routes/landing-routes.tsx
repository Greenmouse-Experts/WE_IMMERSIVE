import LandingLayout from "../layout/landing";
import LandingHomepage from "../pages/landing/homepage";

export const landingRooutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomepage />,
      },
    ],
  },
];
