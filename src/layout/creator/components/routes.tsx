import { GrHomeRounded } from "react-icons/gr";
// import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuCreditCard } from "react-icons/lu";
// import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiBookBookmark } from "react-icons/pi";
import { RiHeart2Line } from "react-icons/ri";
export interface RouteType {
  name: string;
  icon: any;
  route: string;
  submenu: {
    name: string;
    icon: any;
    route: string;
  }[];
}
export const Routes = [
  {
    name: "Dashboard",
    icon: <GrHomeRounded className="text-[17px] text-grey" />,
    route: "/creator",
    submenu: [],
  },
  {
    name: "Create",
    icon: <RiHeart2Line className="text-xl text-grey" />,
    route: "/creator/asset/create",
    submenu: [],
  },
  {
    name: "Physical Assets",
    icon: <RiHeart2Line className="text-xl text-grey" />,
    route: "/creator/physical-assets",
    submenu: [],
  },
  {
    name: "Digital Assets",
    icon: <RiHeart2Line className="text-xl text-grey" />,
    route: "/creator/digital-assets",
    submenu: [],
  },
  {
    name: "Courses",
    icon: <PiBookBookmark className="text-xl text-grey" />,
    route: "/creator/courses",
    submenu: [],
  },
  {
    name: "Jobs",
    icon: <PiBookBookmark className="text-xl text-grey" />,
    route: "/creator/jobs",
    submenu: [],
  },
  {
    name: "Orders",
    icon: <PiBookBookmark className="text-xl text-grey" />,
    route: "/creator/orders",
    submenu: [],
  },
  {
    name: "Portfolio",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "/creator/portfolio",
    submenu: [],
  },
  {
    name: "Upload Status",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Notifications",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "/creator/notification",
    submenu: [],
  },
  // {
  //   name: "Subscription",
  //   icon: <LuCreditCard className="text-lg text-grey" />,
  //   route: "/",
  //   submenu: [],
  // },
  {
    name: "Subscription",
    icon: <LuCreditCard className="text-xl" />,
    route: "#",
    submenu: [
      {
        name: "All Subscriptions",
        icon: <LuCreditCard className="text-lg" />,
        route: "/creator/subscriptions",
      },
      {
        name: "Active Subscription",
        icon: <LuCreditCard className="text-lg" />,
        route: "/creator/active-subscriptions",
      },
    ],
  },
  {
    name: "Coupon",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "/creator/coupon",
    submenu: [],
  },
  {
    name: "Transactions",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "/creator/transactions",
    submenu: [],
  },
];
