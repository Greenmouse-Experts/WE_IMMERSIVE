import AdminDashboardLayout from "../layout/admin";
import AllCreators from "../pages/admin/allCreators";
import AllInstitutions from "../pages/admin/allInstitutions";
import AllStudents from "../pages/admin/allStudents";
import AllUsers from "../pages/admin/allUsers";
import CreateAsset from "../pages/admin/assets/createAssets";
import DigitalAssets from "../pages/admin/assets/digitalAssets";
import PhysicalAssets from "../pages/admin/assets/physicalAssets";
import SuperAdminDashboard from "../pages/admin/dashboard";
import GeneralUsers from "../pages/admin/generalUsers";
import Jobs from "../pages/admin/jobs";
import CreateJob from "../pages/admin/jobs/create";
import Subscription from "../pages/admin/subscription";
import CreateSubscription from "../pages/admin/subscription/createSubscription";
import UploadRequests from "../pages/admin/uploadRequests";
import CoursesTable from "../pages/admin/coursesTable";
import SettingsTable from "../pages/admin/settingsTable";
import CourseCategory from "../pages/admin/assets/courseCategory";
import EditSubscription from "../pages/admin/subscription/editSubscription";
import CreateAssetTextTo3d from "../pages/creator/create-asset-text-to-3d";
import CreateAssetImageTo3d from "../pages/creator/create-asset-image-to-3d";
import AssetCategory from "../pages/admin/assets/assetCategoryTable";
import JobCategory from "../pages/admin/assets/jobCategory";
import SubCategory from "../pages/admin/subCategory";
import UserDetails from "../pages/admin/userDetails";
import CourseSubCategory from "../pages/admin/assets/courseSubCategory";
import BlogCategory from "../pages/admin/blog/blogCategory";
import BlogTable from "../pages/admin/blog/blogTable";
import FaqTable from "../pages/admin/faq/faqTable";
import FaqCategory from "../pages/admin/faq/faqCategory";

export const adminRoutes = [
  {
    path: "/super-admin",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: <SuperAdminDashboard />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "general-users",
        element: <GeneralUsers />,
      },
      {
        path: "all-creators",
        element: <AllCreators />,
      },
      {
        path: "all-institutions",
        element: <AllInstitutions />,
      },
      {
        path: "all-students",
        element: <AllStudents />,
      },
      {
        path: "user-details/:userId",
        element: <UserDetails />,
      },
      {
        path: "digitalAssets",
        element: <DigitalAssets />,
      },
      {
        path: "asset-category",
        element: <AssetCategory />,
      },
      {
        path: "job-category",
        element: <JobCategory />,
      },
      {
        path: "assets/create",
        element: <CreateAsset />,
      },
      {
        path: "assets/create/text-to-3d",
        element: <CreateAssetTextTo3d />, // Add this when profile page is ready
      },
      {
        path: "assets/create/image-to-3d",
        element: <CreateAssetImageTo3d />, // Add this when profile page is ready
      },
      {
        path: "physicalAssets",
        element: <PhysicalAssets />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/create",
        element: <CreateJob />
      },
      {
        path: "upload-requests",
        element: <UploadRequests />,
      },
      {
        path: "subscription",
        element: <Subscription />
      },
      {
        path: "subscription/create",
        element: <CreateSubscription />
      },
      {
        path: "subscription/edit/:planId",
        element: <EditSubscription />
      },
      {
        path: "courses",
        element: <CoursesTable />
      },
      {
        path: "courses/category",
        element: <CourseCategory />
      },
      {
        path: "blog",
        element: <BlogTable />
      },
      {
        path: "blog/category",
        element: <BlogCategory />
      },
      {
        path: "faq",
        element: <FaqTable />
      },
      {
        path: "faq/category",
        element: <FaqCategory />
      },
      {
        path: "sub-category/:categoryId",
        element: <CourseSubCategory />
      },
      {
        path: "settings",
        element: <SettingsTable />
      },
      {
        path: "sub-category",
        element: <SubCategory />
      }
    ],
  },
];
