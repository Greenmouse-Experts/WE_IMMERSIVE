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
    route: "/students",
    submenu: [],
  },
  {
    name: "Courses",
    icon: <PiBookBookmark className="text-xl text-grey" />,
    route: "/students/all-courses",
    submenu: [],
  },
  {
    name: "Orders",
    icon: <RiHeart2Line className="text-xl text-grey" />,
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
    icon: <PiBookBookmark className="text-xl text-grey" />,
    route: "#",
    submenu: [],
  },
  {
    name: "Notifications",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "/students/notification",
    submenu: [],
  },
  {
    name: "Subscription",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "#",
    submenu: [],
  },
  {
    name: "Transactions",
    icon: <LuCreditCard className="text-lg text-grey" />,
    route: "/students/transaction",
    submenu: [],
  },
];
