import { GrHomeRounded } from "react-icons/gr";
// import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuCreditCard, LuUpload } from "react-icons/lu";
// import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiBookBookmark } from "react-icons/pi";
import { RiHeart2Line } from "react-icons/ri";
import { PiUser } from "react-icons/pi";

export interface RouteType {
  name: string;
  icon: any;
  route: any;
  submenu: {
    name: string;
    icon: any;
    route: string;
  }[];
}
export const Routes = [
  {
    name: "Dashboard",
    icon: <GrHomeRounded className="text-[17px]" />,
    route: "/super-admin",
    submenu: [],
  },
  {
    name: "Users",
    icon: <PiUser className="text-xl" />,
    route: "",
    submenu: [
      {
        name: "All Users",
        route: "/super-admin/all-users",
      },
      {
        name: "General Users",
        route: "/super-admin/general-users",
      },
      {
        name: "All Creators",
        route: "/super-admin/all-creators",
      },
      {
        name: "All Institutions",
        route: "/super-admin/all-institutions",
      },
      {
        name: "All Students",
        route: "/super-admin/all-students",
      },
    ],
  },
  {
    name: "Courses",
    icon: <RiHeart2Line className="text-xl" />,
    route: "",
    submenu: [
      {
        name: "All Courses",
        route: "/super-admin/courses",
      },
      {
        name: "Course Category",
        route: "/super-admin/courses/category",
      },
    ],
  },
  {
    name: "Assets",
    icon: <PiBookBookmark className="text-xl" />,
    route: "",
    submenu: [
      {
        name: "Digital Assets",
        route: "/super-admin/digitalAssets",
      },
      {
        name: "Physical Assets",
        route: "/super-admin/physicalAssets",
      },
      {
        name: "Assets Category",
        route: "/super-admin/asset-category",
      },
    ],
  },
  {
    name: "Blog",
    icon: <RiHeart2Line className="text-xl" />,
    route: "",
    submenu: [
      {
        name: "Blog",
        route: "/super-admin/blog",
      },
      {
        name: "Blog Category",
        route: "/super-admin/blog/category",
      },
    ],
  },
  {
    name: "Faqs",
    icon: <RiHeart2Line className="text-xl" />,
    route: "",
    submenu: [
      {
        name: "Faq",
        route: "/super-admin/faq",
      },
      {
        name: "Faq Category",
        route: "/super-admin/faq/category",
      },
    ],
  },
  {
    name: "Upload Requests",
    icon: <LuUpload className="text-lg" />,
    route: "/super-admin/upload-requests",
    submenu: [],
  },
  // {
  //   name: "Jobs",
  //   icon: <LuCreditCard className="text-lg" />,
  //   route: "/super-admin/jobs",
  //   submenu: [],
  // },
  {
    name: "Jobs",
    icon: <LuCreditCard className="text-lg" />,
    route: "",
    submenu: [
      {
        name: "Posted Jobs",
        route: "/super-admin/jobs",
      },
      {
        name: "Job Category",
        route: "/super-admin/job-category",
      },
    ],
  },
  {
    name: "Subscription",
    icon: <LuCreditCard className="text-lg" />,
    route: "/super-admin/subscription",
    submenu: [],
  },
  // {
  //   name: "Sub Categories",
  //   icon: <LuCreditCard className="text-lg" />,
  //   route: "/super-admin/sub-category",
  //   submenu: [],
  // },
];
