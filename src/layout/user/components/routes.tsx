import { PiBookBookmark } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuCreditCard } from "react-icons/lu";
import { RiHeart2Line, RiBriefcaseLine, RiNotificationLine } from "react-icons/ri";
import { FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
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
    icon: <GrHomeRounded className="text-[17px]" />,
    route: "/user",
    submenu: [],
  },
  {
    name: "Store",
    icon: <HiOutlineShoppingBag className="text-[20px]" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Courses",
    icon: <PiBookBookmark className="text-xl" />,
    route: "#",
    submenu: [
      { name: "All Courses", icon: <PiBookBookmark className="text-lg" />, route: "/user/all-courses" },
      { name: "Ongoing Courses", icon: <PiBookBookmark className="text-lg" />, route: "/user/ongoing-courses" },
    ],
  },
  {
    name: "Assets",
    icon: <RiHeart2Line className="text-xl" />,
    route: "/user/assets",
    submenu: [],
  },
  {
    name: "Orders",
    icon: <FaBoxOpen className="text-xl" />,
    route: "/user/orders",
    submenu: [],
  },
  {
    name: "Cart",
    icon: <FaShoppingCart className="text-xl" />,
    route: "/user/cart",
    submenu: [],
  },
  {
    name: "Jobs",
    icon: <RiBriefcaseLine className="text-xl" />,
    route: "/user/jobs",
    submenu: [],
  },
  {
    name: "Notifications",
    icon: <RiNotificationLine className="text-xl" />,
    route: "/user/notifications",
    submenu: [],
  },
  {
    name: "Subscription",
    icon: <MdSubscriptions className="text-xl" />,
    route: "/user/subscription",
    submenu: [],
  },
  {
    name: "Transactions",
    icon: <LuCreditCard className="text-lg" />,
    route: "/user/transactions",
    submenu: [],
  },
];

