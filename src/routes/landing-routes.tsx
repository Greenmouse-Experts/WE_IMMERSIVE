import LandingLayout from "../layout/landing";
import AssetsPage from "../pages/landing/assets";
import BlogPage from "../pages/landing/blog";
import ContactPage from "../pages/landing/contact";
import FaqPage from "../pages/landing/faq";
import LandingHomepage from "../pages/landing/homepage";
import JobsPage from "../pages/landing/jobs";
import LearnPage from "../pages/landing/learn";
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
      {
        path: "/learn",
        element: <LearnPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path:"/jobs",
        element: <JobsPage/>
      }
    ],
  },
];
