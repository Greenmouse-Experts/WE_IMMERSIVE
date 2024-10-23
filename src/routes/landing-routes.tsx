import LandingLayout from "../layout/landing";
import AssetsPage from "../pages/landing/assets";
import ContactPage from "../pages/landing/contact";
import FaqPage from "../pages/landing/faq";
import LandingHomepage from "../pages/landing/homepage";
import StorePage from "../pages/landing/store";

export const landingRoutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomepage />,
      },
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/faqs",
        element: <FaqPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/explore",
        element: <AssetsPage />,
      },
    ],
  },
];
