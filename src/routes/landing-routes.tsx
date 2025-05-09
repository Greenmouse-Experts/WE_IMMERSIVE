import LandingLayout from "../layout/landing";
import ViewJobIndex from "../modules/landing/jobs/viewJob";
import AssetDetailsPage from "../pages/landing/asset-details";
import AssetsPage from "../pages/landing/assets";
import BlogPage from "../pages/landing/blog";
import ContactPage from "../pages/landing/contact";
import FaqPage from "../pages/landing/faq";
import LandingHomepage from "../pages/landing/homepage";
import JobsPage from "../pages/landing/jobs";
import LearnPage from "../pages/landing/learn";
import CoursesDetails from "../pages/landing/courses-details";
import StorePage from "../pages/landing/store";
import AboutPage from "../pages/landing/about";
import StudentCartTable from "../pages/students/studentCartTable";
import PhysicalAssetDetails from "../pages/landing/physical-asset-details";
// 
import TermsPage from "../pages/landing/terms";
import PolicyPage from "../pages/landing/policy";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/explore",
        element: <AssetsPage />,
      },
      {
        path: "/asset/:id",
        element: <AssetDetailsPage />,
      },
      {
        path: "/physical/asset/:id",
        element: <PhysicalAssetDetails />,
      },
      {
        path: "/learn",
        element: <LearnPage />,
      },
      {
        path: "/learn/view-course/:courseId",
        element: <CoursesDetails />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/privacy-policy",
        element: <PolicyPage />,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
      },
      {
        path: "/jobs/view/:id",
        element: <ViewJobIndex />,
      },
      {
        path: "/cart",
        element: <StudentCartTable />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
    ],
  },
];
