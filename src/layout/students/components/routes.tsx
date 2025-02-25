import { PiBookBookmark } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { LuCreditCard } from "react-icons/lu";
import { RiHeart2Line , RiNotificationLine } from "react-icons/ri";
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
    icon: <GrHomeRounded className="text-[17px] text-grey" />,
    route: "/students",
    submenu: [],
  },
  {
    name: "Courses",
    icon: <PiBookBookmark className="text-xl" />,
    route: "#",
    submenu: [
      { name: "All Courses", icon: <PiBookBookmark className="text-lg" />, route: "/students/all-courses" },
      { name: "Ongoing Courses", icon: <PiBookBookmark className="text-lg" />, route: "/students/ongoing-courses" },
    ],
  },
  {
    name: "Orders",
    icon: <FaBoxOpen className="text-xl" />,
    route: "/students/orders",
    submenu: [],
  },
  {
    name: "Achievements",
    icon: <RiHeart2Line className="text-xl text-grey" />,
    route: "#",
    submenu: [],
  },
  {
    name: "Cart",
    icon: <FaShoppingCart className="text-xl" />,
    route: "cart",
    submenu: [],
  },
  {
    name: "Notifications",
    icon: <RiNotificationLine className="text-xl" />,
    route: "/students/notification",
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
    route: "/students/transaction",
    submenu: [],
  },
  
];
